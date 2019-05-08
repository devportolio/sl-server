import { JwtPayload } from './../auth/jwt-payload.interface';
import { Users } from './users.entity';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { createDTO, updateDTO } from './users.dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(Users)
        private readonly usersRepository: Repository<Users>,
    ) { }

    async findAll(): Promise<Users[]> {
        return await this.usersRepository.find();
    }

    async create(newUser: createDTO): Promise<Users> {
        const user = await this.usersRepository.create(newUser);
        await this.usersRepository.save(user);
        return user;
    }

    async update(userId: string, updateUser: updateDTO): Promise<Users> {
        const id = parseInt(userId)
        await this.usersRepository.update({ id }, { ...updateUser });
        return await this.usersRepository.findOne({ id });
    }

    async delete(userId: any): Promise<any> {
        return await this.usersRepository.delete(userId)
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

    async findById(userId: any) {
        const user = await this.usersRepository.findOne({ id: userId });

        if (!user) {
            throw new UnauthorizedException('User not found.');
        }

        return user;
    }
}
