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
const user_decorator_1 = require("./../shared/decorators/user.decorator");
const common_1 = require("@nestjs/common");
const gql_jwt_auth_guard_1 = require("./../guards/gql-jwt-auth.guard");
const balances_service_1 = require("./balances.service");
const graphql_1 = require("@nestjs/graphql");
let BalancesResolvers = class BalancesResolvers {
    constructor(balancesService) {
        this.balancesService = balancesService;
    }
    allBalances(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.balancesService.findAll({ userId });
        });
    }
    createBalance(input, user) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.balancesService.create(Object.assign({}, input, { userId: user.id }));
        });
    }
    deleteBalance(balanceId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.balancesService.delete(balanceId);
        });
    }
};
__decorate([
    graphql_1.Query(),
    __param(0, graphql_1.Args('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BalancesResolvers.prototype, "allBalances", null);
__decorate([
    graphql_1.Mutation(),
    __param(0, graphql_1.Args()), __param(1, user_decorator_1.User()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], BalancesResolvers.prototype, "createBalance", null);
__decorate([
    graphql_1.Mutation(),
    __param(0, graphql_1.Args('balanceId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BalancesResolvers.prototype, "deleteBalance", null);
BalancesResolvers = __decorate([
    common_1.UseGuards(gql_jwt_auth_guard_1.GqlAuthGuard),
    graphql_1.Resolver('Balances'),
    __metadata("design:paramtypes", [balances_service_1.BalancesService])
], BalancesResolvers);
exports.BalancesResolvers = BalancesResolvers;
//# sourceMappingURL=balances.resolvers.js.map