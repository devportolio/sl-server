"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const balances_entity_1 = require("./balances.entity");
const balances_resolvers_1 = require("./balances.resolvers");
const common_1 = require("@nestjs/common");
const balances_service_1 = require("./balances.service");
const typeorm_1 = require("@nestjs/typeorm");
let BalancesModule = class BalancesModule {
};
BalancesModule = __decorate([
    common_1.Module({
        providers: [balances_service_1.BalancesService, balances_resolvers_1.BalancesResolvers],
        imports: [typeorm_1.TypeOrmModule.forFeature([balances_entity_1.Balances])],
    })
], BalancesModule);
exports.BalancesModule = BalancesModule;
//# sourceMappingURL=balances.module.js.map