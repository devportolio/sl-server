import { BaseEntity } from './../shared/base.entity';
export declare class Contributions extends BaseEntity {
    userId: number;
    numberOfShare: number;
    amountPerShare: number;
    loanLimitPercent: number;
    guarantorLimitPercent: number;
    numbeOfContributions: number;
    protected totalPayables: number;
    protected loanLimit: number;
    protected guarantorLimit: number;
    protected isDone: boolean;
    setComputed(): void;
}
