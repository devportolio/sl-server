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
Object.defineProperty(exports, "__esModule", { value: true });
const system_settings_entity_1 = require("./system-settings.entity");
const typeorm_1 = require("@nestjs/typeorm");
const base_service_1 = require("./../shared/base.service");
const common_1 = require("@nestjs/common");
const typeorm_2 = require("typeorm");
let SystemSettingsService = class SystemSettingsService extends base_service_1.BaseService {
    constructor(systemSettings) {
        super(systemSettings);
        this.systemSettings = systemSettings;
    }
};
SystemSettingsService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(system_settings_entity_1.SystemSettings)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SystemSettingsService);
exports.SystemSettingsService = SystemSettingsService;
//# sourceMappingURL=system-settings.service.js.map