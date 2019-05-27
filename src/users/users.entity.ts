import { BaseEntity } from './../shared/base.entity';
import {
  Entity,
  Column,
  BeforeInsert,
  BeforeUpdate,
  AfterLoad,
  OneToOne,
} from 'typeorm';
import * as bcrypt from 'bcrypt';

@Entity()
export class Users extends BaseEntity {
  @Column({ length: 50 })
  firstname: string;

  @Column({ length: 50 })
  lastname: string;

  @Column({ length: 50 })
  email: string;

  @Column()
  password: string;

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword() {
    if (this.password) {
      this.password = await bcrypt.hash(this.password, 10);
    }
  }

  protected fullName: string;
  @AfterLoad()
  setFullName() {
    this.fullName = `${this.firstname} ${this.lastname}`;
  }
}
