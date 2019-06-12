"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const system_settings_module_1 = require("./../system-settings/system-settings.module");
const contributions_resolvers_1 = require("./contributions.resolvers");
const typeorm_1 = require("@nestjs/typeorm");
const contributions_entity_1 = require("./contributions.entity");
const common_1 = require("@nestjs/common");
const contributions_service_1 = require("./contributions.service");
const system_settings_service_1 = require("src/system-settings/system-settings.service");
const contribution_payments_module_1 = require("./contribution-payments/contribution-payments.module");
let ContributionsModule = class ContributionsModule {
};
ContributionsModule = __decorate([
    common_1.Module({
        providers: [
            contributions_service_1.ContributionsService,
            contributions_resolvers_1.ContributionsResolover,
            system_settings_service_1.SystemSettingsService,
        ],
        imports: [typeorm_1.TypeOrmModule.forFeature([contributions_entity_1.Contributions]), system_settings_module_1.SystemSettingsModule, contribution_payments_module_1.ContributionPaymentsModule],
    })
], ContributionsModule);
exports.ContributionsModule = ContributionsModule;
//# sourceMappingURL=contributions.module.js.map