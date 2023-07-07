import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { transformAndValidateSync } from 'class-transformer-validator';
import { EnvService } from './env.service';
import { EnvVariableValidator } from './env.validator';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
      isGlobal: true,
    }),
  ],
  providers: [
    EnvService,
    {
      provide: EnvVariableValidator,
      useValue: transformAndValidateSync(EnvVariableValidator, process.env, {
        validator: {
          enableDebugMessages: true,
          skipMissingProperties: false,
          skipNullProperties: false,
          skipUndefinedProperties: false,
        },
      }),
    },
  ],
  exports: [EnvService],
})
export class EnvModule {}
