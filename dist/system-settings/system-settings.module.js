"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const system_settings_entity_1 = require("./system-settings.entity");
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const system_settings_service_1 = require("./system-settings.service");
const system_settings_resolver_1 = require("./system-settings.resolver");
let SystemSettingsModule = class SystemSettingsModule {
};
SystemSettingsModule = __decorate([
    common_1.Module({
        providers: [system_settings_service_1.SystemSettingsService, system_settings_resolver_1.SystemSettingsResolver],
        imports: [typeorm_1.TypeOrmModule.forFeature([system_settings_entity_1.SystemSettings])],
        exports: [system_settings_service_1.SystemSettingsService],
    })
], SystemSettingsModule);
exports.SystemSettingsModule = SystemSettingsModule;
//# sourceMappingURL=system-settings.module.js.map