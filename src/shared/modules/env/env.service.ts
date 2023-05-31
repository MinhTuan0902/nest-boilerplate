import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { EnvVariable } from '@shared/enums';

@Injectable()
export class EnvService {
  constructor(private readonly configService: ConfigService) {}

  get(envVariable: EnvVariable): string {
    return this.configService.get(envVariable);
  }
}
