import { MongooseModuleOptions } from '@nestjs/mongoose';
import { EnvVariable } from '@shared/enums';
import { EnvService } from '@shared/modules/env/env.service';
import { MongooseError } from 'mongoose';

export const getMongooseModuleOptions = (
  envService: EnvService,
): MongooseModuleOptions => ({
  uri: envService.get(EnvVariable.MongoConnectionURI),
  retryAttempts: 5,
  connectionErrorFactory: (error: MongooseError) => {
    if (error) {
      return error;
    }
  },
});
