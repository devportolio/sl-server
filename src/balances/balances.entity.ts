import { BaseEntity } from './../shared/base.entity';
import { Entity, Column, BeforeInsert, BeforeUpdate } from 'typeorm';

export enum PaymentTypes {
  CASH_IN = 'CASH_IN',
  CASH_OUT = 'CASH_OUT',
  CONTRIBUTION = 'CONTRIBUTION',
  LOAN_PAYMENT = 'LOAN_PAYMENT',
  LOAN_RELEASE = 'LOAN_RELEASE',
}

@Entity()
export class Balances extends BaseEntity {
  @Column('int')
  userId: number;

  @Column('double')
  amount: number;

  @Column('enum', { enum: PaymentTypes })
  paymentType: PaymentTypes;

  @BeforeInsert()
  @BeforeUpdate()
  async negateBalance() {
    if (
      ['CASH_OUT', 'CONTRIBUTION', 'LOAN_PAYMENT'].includes(this.paymentType)
    ) {
      this.amount *= -1;
    }
  }
}
