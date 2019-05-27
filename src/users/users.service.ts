import { BaseService } from './../shared/base.service';
import { JwtPayload } from './../auth/jwt-payload.interface';
import { Users } from './users.entity';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { createDTO, updateDTO } from './users.dto';

@Injectable()
export class UsersService extends BaseService {
  constructor(
    @InjectRepository(Users)
    private readonly usersRepository: Repository<Users>,
  ) {
    super(usersRepository);
  }

  async findOneByPayload(payload: JwtPayload) {
    return await this.usersRepository.findOne({ email: payload.email });
  }

  async findByEmail(email: string) {
    const user = await this.usersRepository.findOne({ email });
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    return user;
  }
}
