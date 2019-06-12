import { Balances } from './balances.entity';
import { BaseService } from './../shared/base.service';
import { Repository } from 'typeorm';
export declare class BalancesService extends BaseService {
    private readonly balancesRepository;
    constructor(balancesRepository: Repository<Balances>);
}
