import { BaseService } from './../shared/base.service';
import { JwtPayload } from './../auth/jwt-payload.interface';
import { Users } from './users.entity';
import { Repository } from 'typeorm';
export declare class UsersService extends BaseService {
    private readonly usersRepository;
    constructor(usersRepository: Repository<Users>);
    findOneByPayload(payload: JwtPayload): Promise<Users>;
    findByEmail(email: string): Promise<Users>;
}
