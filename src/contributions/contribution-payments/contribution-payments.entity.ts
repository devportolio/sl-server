import { BaseEntity } from './../../shared/base.entity';
import { Entity, Column } from 'typeorm';

@Entity()
export class ContributionPayments extends BaseEntity {
  @Column('int')
  contributionId: number;

  @Column('int')
  balanceId: number;
}
