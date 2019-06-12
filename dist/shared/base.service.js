"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
class BaseService {
    constructor(repository) {
        this.repository = repository;
    }
    findAll(criteria) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.find(criteria);
        });
    }
    findById(itemId) {
        return __awaiter(this, void 0, void 0, function* () {
            const item = yield this.repository.findOne(itemId);
            if (!item) {
                throw new common_1.UnauthorizedException('Item not found.');
            }
            return item;
        });
    }
    first() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.findOne();
        });
    }
    create(newItem) {
        return __awaiter(this, void 0, void 0, function* () {
            const item = yield this.repository.create(newItem);
            yield this.repository.save(item);
            return item;
        });
    }
    update(itemId, updateItem) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.repository.update(itemId, Object.assign({}, updateItem));
            return yield this.repository.findOne(itemId);
        });
    }
    delete(itemId) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.repository.delete(itemId);
            return result.raw.affectedRows > 0;
        });
    }
}
exports.BaseService = BaseService;
//# sourceMappingURL=base.service.js.map