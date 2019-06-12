"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const auth_resolver_1 = require("./auth.resolver");
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const auth_service_1 = require("./auth.service");
const jwt_strategy_1 = require("./jwt.strategy");
const users_module_1 = require("../users/users.module");
const passport_1 = require("@nestjs/passport");
const typeorm_1 = require("@nestjs/typeorm");
const users_entity_1 = require("src/users/users.entity");
const refresh_token_module_1 = require("src/refresh-token/refresh-token.module");
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([users_entity_1.Users]),
            passport_1.PassportModule.register({ defaultStrategy: 'jwt' }),
            jwt_1.JwtModule.register({
                secretOrPrivateKey: process.env.JWT_SECRET,
                signOptions: {
                    expiresIn: process.env.JWT_EXPIRATION,
                },
            }),
            users_module_1.UsersModule,
            refresh_token_module_1.RefreshTokenModule,
        ],
        exports: [auth_service_1.AuthService],
        providers: [auth_service_1.AuthService, jwt_strategy_1.JwtStrategy, auth_resolver_1.AuthResolver],
    })
], AuthModule);
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.module.js.map