import { AuthGuard } from '@nestjs/passport';
import { jwtCookieConstants } from 'src/constants';

export class AccessGuard extends AuthGuard(jwtCookieConstants.accessTokenName) {
  constructor() {
    super();
  }
}

export class RefreshGuard extends AuthGuard(
  jwtCookieConstants.refreshTokenName,
) {
  constructor() {
    super();
  }
}
