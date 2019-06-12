import { BalancesService } from './balances.service';
export declare class BalancesResolvers {
    private balancesService;
    constructor(balancesService: BalancesService);
    allBalances(userId?: number): Promise<any[]>;
    createBalance(input: any, user: any): Promise<any>;
    deleteBalance(balanceId: string): Promise<any>;
}
