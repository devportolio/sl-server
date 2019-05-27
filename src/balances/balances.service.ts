import { InjectRepository } from '@nestjs/typeorm';
import { Balances } from './balances.entity';
import { BaseService } from './../shared/base.service';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

@Injectable()
export class BalancesService extends BaseService {
  constructor(
    @InjectRepository(Balances)
    private readonly balancesRepository: Repository<Balances>,
  ) {
    super(balancesRepository);
  }
}
