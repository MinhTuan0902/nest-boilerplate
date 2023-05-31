import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { HealthCheckService } from './health-check-service';
import { HealthCheckController } from './health-check.controller';

@Module({
  imports: [TerminusModule],
  providers: [HealthCheckService],
  controllers: [HealthCheckController],
})
export class HealthCheckModule {}
