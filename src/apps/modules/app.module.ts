import { getApolloDriverConfig } from '@configs/apollo.config';
import { getMongooseModuleOptions } from '@configs/mongoose.config';
import { ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { EnvModule } from '@shared/modules/env/env.module';
import { EnvService } from '@shared/modules/env/env.service';
import { DataLoaderInterceptor } from 'nestjs-dataloader';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './users/user.module';

@Module({
  imports: [
    // Core modules
    EnvModule,
    MongooseModule.forRootAsync({
      inject: [EnvService],
      useFactory: (envService: EnvService) =>
        getMongooseModuleOptions(envService),
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>(getApolloDriverConfig()),

    AuthModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: DataLoaderInterceptor,
    },
  ],
})
export class AppModule {}
