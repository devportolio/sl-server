import { BaseEntity } from './../shared/base.entity';
export declare enum PaymentTypes {
    CASH_IN = "CASH_IN",
    CASH_OUT = "CASH_OUT",
    CONTRIBUTION = "CONTRIBUTION",
    LOAN_PAYMENT = "LOAN_PAYMENT",
    LOAN_RELEASE = "LOAN_RELEASE"
}
export declare class Balances extends BaseEntity {
    userId: number;
    amount: number;
    paymentType: PaymentTypes;
    negateBalance(): Promise<void>;
}
