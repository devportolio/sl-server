import { Balances } from './balances.entity';
import { BalancesResolvers } from './balances.resolvers';
import { Module } from '@nestjs/common';
import { BalancesService } from './balances.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  providers: [BalancesService, BalancesResolvers],
  imports: [TypeOrmModule.forFeature([Balances])],
})
export class BalancesModule {}
