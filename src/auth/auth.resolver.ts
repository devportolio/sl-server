import { AuthService } from './auth.service';
import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { credentialDTO } from './auth.dto';
import { RefreshTokenService } from 'src/refresh-token/refresh-token.service';

@Resolver('Auth')
export class AuthResolver {
  constructor(
    private readonly authService: AuthService,
    private readonly refreshTokenService: RefreshTokenService,
  ) {}

  @Mutation()
  async userLogin(@Args('credential') credential: credentialDTO) {
    return await this.authService.login(credential);
  }

  @Mutation()
  async userLogout(@Args('refreshToken') refreshToken: string) {
    return await this.refreshTokenService.deleteToken(refreshToken);
  }

  @Query()
  async refreshToken(@Args('refreshToken') refreshToken: string) {
    return await this.authService.getRefreshToken(refreshToken);
  }
}
