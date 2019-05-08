import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { RefreshToken } from './refresh-token.entity';
import { RefreshTokenDTO } from './refresh-token.dto';

@Injectable()
export class RefreshTokenService {
  constructor(
    @InjectRepository(RefreshToken)
    private readonly refreshToken: Repository<RefreshToken>,
  ) {}

  async storeToken(refreshtoken: RefreshTokenDTO) {
    refreshtoken.userId = parseInt(refreshtoken.userId);
    const newToken = await this.refreshToken.create(refreshtoken);
    await this.refreshToken.save(newToken);
    return newToken.token;
  }

  async deleteToken(refreshToken: string) {
    await this.refreshToken.delete({ token: refreshToken });
    const found = await this.refreshToken.findOne({ token: refreshToken });

    return found ? false : true;
  }

  async findRefreshToken(column: any) {
    return await this.refreshToken.findOne(column);
  }
}
