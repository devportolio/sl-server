import { User as CurrentUser } from './../shared/decorators/user.decorator';
import { ContributionsService } from './contributions.service';
import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/guards/gql-jwt-auth.guard';

@Resolver('Contributions')
export class ContributionsResolover {
  constructor(private contributionsService: ContributionsService) {}

  @Query()
  async allContributions(@Args('userId') userId: number) {
    return await this.contributionsService.findAll({ userId });
  }

  @UseGuards(GqlAuthGuard)
  @Mutation()
  async addContribution(
    @Args('numberOfShare') numberOfShare: number,
    @CurrentUser() user: any,
  ) {
    const {
      amountPerShare,
      loanLimitPercent,
      guarantorLimitPercent,
      numbeOfContributions,
    } = await this.contributionsService.getSettings();

    const newContribution = {
      userId: user.id,
      numberOfShare,
      amountPerShare,
      loanLimitPercent,
      guarantorLimitPercent,
      numbeOfContributions,
    };

    const { id } = await this.contributionsService.create(newContribution);
    return await this.contributionsService.findById(id);
  }
}
