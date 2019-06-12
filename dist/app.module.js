"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_1 = require("@nestjs/typeorm");
const graphql_1 = require("@nestjs/graphql");
const users_module_1 = require("./users/users.module");
const auth_module_1 = require("./auth/auth.module");
const refresh_token_module_1 = require("./refresh-token/refresh-token.module");
const contributions_module_1 = require("./contributions/contributions.module");
const system_settings_module_1 = require("./system-settings/system-settings.module");
const balances_module_1 = require("./balances/balances.module");
const defaultOptions = {
    type: 'postgres',
    port: 5432,
    username: 'postgres',
    password: 'root',
    database: 'db',
    synchronize: true,
};
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            graphql_1.GraphQLModule.forRoot({
                typePaths: ['./**/*.graphql'],
                context: ({ req }) => ({ req }),
            }),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: process.env.MSQL_HOST,
                port: parseInt(process.env.MSQL_PORT),
                username: process.env.MSQL_USERNAME,
                password: process.env.MSQL_PASSWORD,
                database: process.env.MSQL_DATABASE,
                entities: [__dirname + '/**/*.entity{.ts,.js}'],
                synchronize: true,
            }),
            users_module_1.UsersModule,
            auth_module_1.AuthModule,
            refresh_token_module_1.RefreshTokenModule,
            contributions_module_1.ContributionsModule,
            system_settings_module_1.SystemSettingsModule,
            balances_module_1.BalancesModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map