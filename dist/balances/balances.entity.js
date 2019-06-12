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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_entity_1 = require("./../shared/base.entity");
const typeorm_1 = require("typeorm");
var PaymentTypes;
(function (PaymentTypes) {
    PaymentTypes["CASH_IN"] = "CASH_IN";
    PaymentTypes["CASH_OUT"] = "CASH_OUT";
    PaymentTypes["CONTRIBUTION"] = "CONTRIBUTION";
    PaymentTypes["LOAN_PAYMENT"] = "LOAN_PAYMENT";
    PaymentTypes["LOAN_RELEASE"] = "LOAN_RELEASE";
})(PaymentTypes = exports.PaymentTypes || (exports.PaymentTypes = {}));
let Balances = class Balances extends base_entity_1.BaseEntity {
    negateBalance() {
        return __awaiter(this, void 0, void 0, function* () {
            if (['CASH_OUT', 'CONTRIBUTION', 'LOAN_PAYMENT'].includes(this.paymentType)) {
                this.amount *= -1;
            }
        });
    }
};
__decorate([
    typeorm_1.Column('int'),
    __metadata("design:type", Number)
], Balances.prototype, "userId", void 0);
__decorate([
    typeorm_1.Column('double'),
    __metadata("design:type", Number)
], Balances.prototype, "amount", void 0);
__decorate([
    typeorm_1.Column('enum', { enum: PaymentTypes }),
    __metadata("design:type", String)
], Balances.prototype, "paymentType", void 0);
__decorate([
    typeorm_1.BeforeInsert(),
    typeorm_1.BeforeUpdate(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Balances.prototype, "negateBalance", null);
Balances = __decorate([
    typeorm_1.Entity()
], Balances);
exports.Balances = Balances;
//# sourceMappingURL=balances.entity.js.map