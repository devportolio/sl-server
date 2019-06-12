"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const gql_jwt_auth_guard_1 = require("./../guards/gql-jwt-auth.guard");
const users_service_1 = require("./users.service");
const graphql_1 = require("@nestjs/graphql");
const common_1 = require("@nestjs/common");
let UsersResolver = class UsersResolver {
    constructor(usersService) {
        this.usersService = usersService;
    }
    getUser(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.usersService.findById(userId);
        });
    }
    allUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.usersService.findAll();
        });
    }
    createUser(newUser) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.usersService.create(newUser);
        });
    }
    deleteUser(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.usersService.delete(userId);
        });
    }
    updateUser(userId, input) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.usersService.update(userId, input);
        });
    }
};
__decorate([
    common_1.UseGuards(gql_jwt_auth_guard_1.GqlAuthGuard),
    graphql_1.Query(),
    __param(0, graphql_1.Args('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "getUser", null);
__decorate([
    common_1.UseGuards(gql_jwt_auth_guard_1.GqlAuthGuard),
    graphql_1.Query(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "allUsers", null);
__decorate([
    graphql_1.Mutation(),
    __param(0, graphql_1.Args('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "createUser", null);
__decorate([
    common_1.UseGuards(gql_jwt_auth_guard_1.GqlAuthGuard),
    graphql_1.Mutation(),
    __param(0, graphql_1.Args('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "deleteUser", null);
__decorate([
    common_1.UseGuards(gql_jwt_auth_guard_1.GqlAuthGuard),
    graphql_1.Mutation(),
    __param(0, graphql_1.Args('userId')),
    __param(1, graphql_1.Args('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "updateUser", null);
UsersResolver = __decorate([
    graphql_1.Resolver('Users'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersResolver);
exports.UsersResolver = UsersResolver;
//# sourceMappingURL=users.resolvers.js.map