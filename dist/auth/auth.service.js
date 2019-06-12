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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const jwt_1 = require("@nestjs/jwt");
const common_1 = require("@nestjs/common");
const users_service_1 = require("../users/users.service");
const bcrypt = __importStar(require("bcrypt"));
const rg = __importStar(require("rand-token"));
const refresh_token_service_1 = require("src/refresh-token/refresh-token.service");
let AuthService = class AuthService {
    constructor(usersService, jwtService, refreshTokenService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
        this.refreshTokenService = refreshTokenService;
    }
    signIn(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.jwtService.sign(payload);
        });
    }
    validateUser(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.usersService.findOneByPayload(payload);
        });
    }
    login(credential) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password } = credential;
            const user = yield this.usersService.findByEmail(email);
            let accessToken;
            const match = yield bcrypt.compare(password, user.password);
            if (match) {
                accessToken = yield this.signIn(yield this.getPayload(user.id));
            }
            else {
                throw new common_1.UnauthorizedException('Invalid credentials');
            }
            const existRefreshToken = yield this.refreshTokenService.findRefreshToken({
                userId: user.id,
            });
            let refreshToken = existRefreshToken && existRefreshToken.token;
            if (!existRefreshToken) {
                refreshToken = yield this.refreshTokenService.storeToken({
                    userId: user.id,
                    token: rg.suid(50),
                });
            }
            return { token: accessToken, refreshToken };
        });
    }
    getRefreshToken(refreshToken) {
        return __awaiter(this, void 0, void 0, function* () {
            const foundRefreshToken = yield this.refreshTokenService.findRefreshToken({
                token: refreshToken,
            });
            let accessToken;
            if (foundRefreshToken) {
                accessToken = yield this.signIn(yield this.getPayload(foundRefreshToken.userId));
            }
            return accessToken;
        });
    }
    getPayload(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.usersService.findById(userId);
            return {
                email: user.email,
            };
        });
    }
};
AuthService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService,
        refresh_token_service_1.RefreshTokenService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map