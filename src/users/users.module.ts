import { PassportModule } from '@nestjs/passport';
import { Users } from './users.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolvers';

@Module({
    imports: [
        TypeOrmModule.forFeature([Users]),
    ],
    exports: [UsersService],
    providers: [UsersService, UsersResolver],
})
export class UsersModule { }
