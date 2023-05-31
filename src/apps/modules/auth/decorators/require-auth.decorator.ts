import { UseGuards, applyDecorators } from '@nestjs/common';
import { JWTGuard } from '../guards';

export function RequireAuth() {
  return applyDecorators(UseGuards(JWTGuard));
}
