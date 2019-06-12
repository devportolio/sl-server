import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { RefreshTokenModule } from './refresh-token/refresh-token.module';
import { ContributionsModule } from './contributions/contributions.module';
import { SystemSettingsModule } from './system-settings/system-settings.module';
import { BalancesModule } from './balances/balances.module';

const defaultOptions = {
    type: 'postgres',
    port: 5432,
    username: 'postgres',
    password: 'root',
    database: 'db',
    synchronize: true,
};

@Module({
    imports: [
        GraphQLModule.forRoot({
            typePaths: ['./**/*.graphql'],
            context: ({ req }) => ({ req }),
        }),
        // TypeOrmModule.forRoot({
        //     host: 'localhost',
        //     type: 'postgres',
        //     port: 5432,
        //     username: 'postgres',
        //     password: 'root',
        //     database: 'dummy',
        //     entities: [__dirname + '/**/*.entity{.ts,.js}'],
        //     synchronize: true,
        // }),
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: process.env.MSQL_HOST,
            // tslint:disable-next-line: radix
            port: parseInt(process.env.MSQL_PORT),
            username: process.env.MSQL_USERNAME,
            password: process.env.MSQL_PASSWORD,
            database: process.env.MSQL_DATABASE,
            entities: [__dirname + '/**/*.entity{.ts,.js}'],
            synchronize: true,
        }),
        UsersModule,
        AuthModule,
        RefreshTokenModule,
        ContributionsModule,
        SystemSettingsModule,
        BalancesModule,
    ],

    controllers: [AppController],
    providers: [AppService],
})
export class AppModule { }
