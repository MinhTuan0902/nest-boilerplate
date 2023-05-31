import { getJwtModuleOptions } from '@configs/jwt.config';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { EnvService } from '@shared/modules/env/env.service';
import { UserModule } from '../users/user.module';
import { AuthMutationResolver } from './resolvers';
import { AuthService } from './services';

@Module({
  imports: [
    JwtModule.registerAsync({
      inject: [EnvService],
      useFactory: (envService: EnvService) => getJwtModuleOptions(envService),
    }),
    UserModule,
  ],
  providers: [
    // Resolvers
    AuthMutationResolver,

    // Services
    AuthService,
  ],
})
export class AuthModule {}
