import { GqlAuthGuard } from './../guards/gql-jwt-auth.guard';
import { UsersService } from './users.service';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { createDTO, updateDTO } from './users.dto';
import { UseGuards } from '@nestjs/common';

@Resolver('Users')
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(GqlAuthGuard)
  @Query()
  async getUser(@Args('userId') userId: number) {
    return await this.usersService.findById(userId);
  }

  @UseGuards(GqlAuthGuard)
  @Query()
  async allUsers() {
    return await this.usersService.findAll();
  }

  @Mutation()
  async createUser(@Args('input') newUser: createDTO) {
    return await this.usersService.create(newUser);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation()
  async deleteUser(@Args('userId') userId: string) {
    return await this.usersService.delete(userId);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation()
  async updateUser(
    @Args('userId') userId: number,
    @Args('input') input: updateDTO,
  ) {
    return this.usersService.update(userId, input);
  }
}
