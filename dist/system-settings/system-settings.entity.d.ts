import { BaseEntity } from './../shared/base.entity';
export declare class SystemSettings extends BaseEntity {
    amountPerShare: number;
    loanLimitPercent: number;
    guarantorLimitPercent: number;
    numbeOfContributions: number;
}
