import { RedisModuleOptions } from '@liaoliaots/nestjs-redis';
import { EnvVariable } from '@shared/enums';
import { EnvService } from '@shared/modules/env/env.service';
import { Redis, RedisOptions } from 'ioredis';

class RedisServerError extends Error {
  constructor() {
    super();
    this.message = 'Fail to connect to Redis server';
    this.name = 'RedisServerError';
  }
}

export const getRedisModuleOptions = (
  envService: EnvService,
): RedisModuleOptions => ({
  config: {
    host: envService.get(EnvVariable.RedisHost),
    port: +envService.get(EnvVariable.RedisPort),
    onClientCreated: (client: Redis) => {
      client.on('error', () => {
        throw new RedisServerError();
      });
    },
  },
});

export const getRedisPubsubOptions = (
  envService: EnvService,
): RedisOptions => ({
  host: envService.get(EnvVariable.RedisHost),
  port: +envService.get(EnvVariable.RedisPort),
});
