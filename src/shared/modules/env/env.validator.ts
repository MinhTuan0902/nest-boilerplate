import { Injectable } from '@nestjs/common';
import { NodeEnv } from '@shared/enums';
import {
  IsEnum,
  IsNotEmpty,
  IsNumberString,
  IsPort,
  IsString,
} from 'class-validator';

@Injectable()
export class EnvVariableValidator {
  @IsPort()
  SERVER_PORT: number;

  @IsEnum(NodeEnv)
  NODE_ENV: NodeEnv;

  @IsNotEmpty()
  @IsString()
  MONGO_CONNECTION_URI: string;

  @IsNotEmpty()
  @IsString()
  JWT_SECRET: string;

  @IsNotEmpty()
  @IsNumberString()
  JWT_ACCESS_TOKEN_EXPIRATION_TIME: string;

  @IsNotEmpty()
  @IsNumberString()
  JWT_REFRESH_TOKEN_EXPIRATION_TIME: string;

  @IsNotEmpty()
  @IsString()
  REDIS_HOST: string;

  @IsPort()
  REDIS_PORT: number;
}
