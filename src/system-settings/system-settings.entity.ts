import { BaseEntity } from './../shared/base.entity';
import { Entity, Column } from 'typeorm';

@Entity()
export class SystemSettings extends BaseEntity {
  @Column('int', { default: 1000 })
  amountPerShare: number;

  @Column('int', { default: 70 })
  loanLimitPercent: number;

  @Column('int', { default: 70 })
  guarantorLimitPercent: number;

  @Column('int', { default: 24 })
  numbeOfContributions: number;
}
