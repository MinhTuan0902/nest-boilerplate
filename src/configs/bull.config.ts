import { BullModuleOptions } from '@nestjs/bull';
import { BullQueueName, EnvVariable } from '@shared/enums';
import { EnvService } from '@shared/modules/env/env.service';

// Define all queues here
const bullQueueConfig: Record<string, BullModuleOptions> = {};

export const getBullModuleOptions = (
  envService: EnvService,
): BullModuleOptions => ({
  redis: {
    host: envService.get(EnvVariable.RedisHost),
    port: +envService.get(EnvVariable.RedisPort),
  },
});

/**
 *
 * @param bullQueueNames Bull queue names to get queue's config
 * @returns Array of queue's config
 */
export const getBullQueueConfig = (
  bullQueueNames?: BullQueueName[],
): Array<BullModuleOptions> => {
  const allConfigs = Object.values(bullQueueConfig);

  /**
   * If @bullQueueNames is falsy or empty array, then return @allConfigs
   */
  if (!bullQueueNames || bullQueueNames?.length === 0) {
    return allConfigs;
  }

  const configs: Array<BullModuleOptions> = [];
  for (const config of allConfigs) {
    if (bullQueueNames.map((name) => name.toString()).includes(config?.name)) {
      configs.push(config);
    }
  }

  return configs;
};
