import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { JwtPayload } from './jwt-payload.interface';
import { credentialDTO } from './auth.dto';
import { RefreshTokenService } from 'src/refresh-token/refresh-token.service';
export declare class AuthService {
    private readonly usersService;
    private readonly jwtService;
    private readonly refreshTokenService;
    constructor(usersService: UsersService, jwtService: JwtService, refreshTokenService: RefreshTokenService);
    signIn(payload: JwtPayload): Promise<string>;
    validateUser(payload: JwtPayload): Promise<any>;
    login(credential: credentialDTO): Promise<{
        token: any;
        refreshToken: string;
    }>;
    getRefreshToken(refreshToken: string): Promise<string>;
    getPayload(userId: any): Promise<JwtPayload>;
}
