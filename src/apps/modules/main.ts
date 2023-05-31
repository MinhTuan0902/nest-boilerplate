import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { EnvVariable } from '@shared/enums';
import { EnvService } from '@shared/modules/env/env.service';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Middleware
  app.useGlobalPipes(new ValidationPipe());

  const envService = app.get(EnvService);
  const SERVER_PORT = envService.get(EnvVariable.ServerPort);

  await app.listen(SERVER_PORT, async () => {
    Logger.log(`Server successfully started on port ${SERVER_PORT}`);
  });
}
bootstrap();
