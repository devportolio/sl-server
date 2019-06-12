import { AuthService } from './auth.service';
import { credentialDTO } from './auth.dto';
import { RefreshTokenService } from 'src/refresh-token/refresh-token.service';
export declare class AuthResolver {
    private readonly authService;
    private readonly refreshTokenService;
    constructor(authService: AuthService, refreshTokenService: RefreshTokenService);
    userLogin(credential: credentialDTO): Promise<{
        token: any;
        refreshToken: string;
    }>;
    userLogout(refreshToken: string): Promise<boolean>;
    refreshToken(refreshToken: string): Promise<string>;
}
