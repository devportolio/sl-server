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
const system_settings_service_1 = require("./../system-settings/system-settings.service");
const base_service_1 = require("./../shared/base.service");
const contributions_entity_1 = require("./contributions.entity");
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const typeorm_2 = require("typeorm");
let ContributionsService = class ContributionsService extends base_service_1.BaseService {
    constructor(contributionsRepository, systemSettings) {
        super(contributionsRepository);
        this.contributionsRepository = contributionsRepository;
        this.systemSettings = systemSettings;
    }
    getSettings() {
        return __awaiter(this, void 0, void 0, function* () {
            let setting = yield this.systemSettings.first();
            if (!setting) {
                setting = yield this.systemSettings.create();
            }
            return setting;
        });
    }
};
ContributionsService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(contributions_entity_1.Contributions)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        system_settings_service_1.SystemSettingsService])
], ContributionsService);
exports.ContributionsService = ContributionsService;
//# sourceMappingURL=contributions.service.js.map