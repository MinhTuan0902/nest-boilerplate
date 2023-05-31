import { JwtModuleOptions } from '@nestjs/jwt';
import { EnvVariable } from '@shared/enums';
import { EnvService } from '@shared/modules/env/env.service';

export const getJwtModuleOptions = (
  envService: EnvService,
): JwtModuleOptions => ({
  secret: envService.get(EnvVariable.JWTSecret),
});
