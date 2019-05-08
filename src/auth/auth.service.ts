import { JwtService } from '@nestjs/jwt';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtPayload } from './jwt-payload.interface';
import { credentialDTO } from './auth.dto';
import * as bcrypt from 'bcrypt';
import * as rg from 'rand-token';
import { RefreshTokenService } from 'src/refresh-token/refresh-token.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
    private readonly refreshTokenService: RefreshTokenService,
  ) {}

  async signIn(payload: JwtPayload): Promise<string> {
    // In the real-world app you shouldn't expose this method publicly
    // instead, return a token once you verify user credentials
    return await this.jwtService.sign(payload);
  }

  async validateUser(payload: JwtPayload): Promise<any> {
    return await this.usersService.findOneByPayload(payload);
  }

  async login(credential: credentialDTO) {
    const { email, password } = credential;
    const user = await this.usersService.findByEmail(email);

    let accessToken;

    const match = await bcrypt.compare(password, user.password);
    if (match) {
      accessToken = await this.signIn(await this.getPayload(user.id));
    } else {
      throw new UnauthorizedException('Invalid credentials');
    }

    const existRefreshToken = await this.refreshTokenService.findRefreshToken({
      userId: user.id,
    });

    let refreshToken: string = existRefreshToken && existRefreshToken.token;
    if (!existRefreshToken) {
      refreshToken = await this.refreshTokenService.storeToken({
        userId: user.id,
        token: rg.suid(50),
      });
    }

    return { token: accessToken, refreshToken };
  }

  async getRefreshToken(refreshToken: string) {
    const foundRefreshToken = await this.refreshTokenService.findRefreshToken({
      token: refreshToken,
    });

    let accessToken: string;
    if (foundRefreshToken) {
      accessToken = await this.signIn(
        await this.getPayload(foundRefreshToken.userId),
      );
    }

    return accessToken;
  }

  async getPayload(userId: any): Promise<JwtPayload> {
    const user = await this.usersService.findById(userId);
    return {
      email: user.email,
    };
  }
}
