import { Repository } from 'typeorm';
import { RefreshToken } from './refresh-token.entity';
import { RefreshTokenDTO } from './refresh-token.dto';
export declare class RefreshTokenService {
    private readonly refreshToken;
    constructor(refreshToken: Repository<RefreshToken>);
    storeToken(refreshtoken: RefreshTokenDTO): Promise<string>;
    deleteToken(refreshToken: string): Promise<boolean>;
    findRefreshToken(column: any): Promise<RefreshToken>;
}
