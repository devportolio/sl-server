import { BaseEntity } from './../shared/base.entity';
export declare class Users extends BaseEntity {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    hashPassword(): Promise<void>;
    protected fullName: string;
    setFullName(): void;
}
