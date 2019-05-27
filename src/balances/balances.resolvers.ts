import { User as CurrentUser } from './../shared/decorators/user.decorator';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from './../guards/gql-jwt-auth.guard';
import { BalancesService } from './balances.service';
import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';

@UseGuards(GqlAuthGuard)
@Resolver('Balances')
export class BalancesResolvers {
  constructor(private balancesService: BalancesService) {}

  @Query()
  async allBalances(@Args('userId') userId?: number) {
    return await this.balancesService.findAll({ userId });
  }

  @Mutation()
  async createBalance(@Args() input: any, @CurrentUser() user: any) {
    return await this.balancesService.create({ ...input, userId: user.id });
  }

  @Mutation()
  async deleteBalance(@Args('balanceId') balanceId: string) {
    return await this.balancesService.delete(balanceId);
  }
}
