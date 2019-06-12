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
Object.defineProperty(exports, "__esModule", { value: true });
const base_entity_1 = require("./../shared/base.entity");
const typeorm_1 = require("typeorm");
let Contributions = class Contributions extends base_entity_1.BaseEntity {
    constructor() {
        super(...arguments);
        this.isDone = false;
    }
    setComputed() {
        this.totalPayables =
            this.amountPerShare * this.numberOfShare * this.numbeOfContributions;
        this.loanLimit = (this.loanLimitPercent / 100) * this.totalPayables;
        this.guarantorLimit =
            (this.guarantorLimitPercent / 100) * this.totalPayables;
    }
};
__decorate([
    typeorm_1.Column('int'),
    __metadata("design:type", Number)
], Contributions.prototype, "userId", void 0);
__decorate([
    typeorm_1.Column('int'),
    __metadata("design:type", Number)
], Contributions.prototype, "numberOfShare", void 0);
__decorate([
    typeorm_1.Column('int'),
    __metadata("design:type", Number)
], Contributions.prototype, "amountPerShare", void 0);
__decorate([
    typeorm_1.Column('int'),
    __metadata("design:type", Number)
], Contributions.prototype, "loanLimitPercent", void 0);
__decorate([
    typeorm_1.Column('int'),
    __metadata("design:type", Number)
], Contributions.prototype, "guarantorLimitPercent", void 0);
__decorate([
    typeorm_1.Column('int'),
    __metadata("design:type", Number)
], Contributions.prototype, "numbeOfContributions", void 0);
__decorate([
    typeorm_1.AfterLoad(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Contributions.prototype, "setComputed", null);
Contributions = __decorate([
    typeorm_1.Entity()
], Contributions);
exports.Contributions = Contributions;
//# sourceMappingURL=contributions.entity.js.map