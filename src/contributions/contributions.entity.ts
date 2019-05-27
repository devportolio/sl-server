import { BaseEntity } from './../shared/base.entity';
import { Entity, Column, AfterLoad } from 'typeorm';

@Entity()
export class Contributions extends BaseEntity {
  @Column('int')
  userId: number;

  @Column('int')
  numberOfShare: number;

  @Column('int')
  amountPerShare: number;

  @Column('int')
  loanLimitPercent: number;

  @Column('int')
  guarantorLimitPercent: number;

  @Column('int')
  numbeOfContributions: number;

  protected totalPayables: number;
  protected loanLimit: number;
  protected guarantorLimit: number;
  protected isDone: boolean = false;

  @AfterLoad()
  setComputed() {
    this.totalPayables =
      this.amountPerShare * this.numberOfShare * this.numbeOfContributions;

    this.loanLimit = (this.loanLimitPercent / 100) * this.totalPayables;
    this.guarantorLimit =
      (this.guarantorLimitPercent / 100) * this.totalPayables;
  }
}
