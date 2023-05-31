import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from '@schemas/user.schema';
import { UserLoader } from './loaders';
import { UserRepository } from './repositories';
import { UserService } from './services';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema,
      },
    ]),
  ],
  providers: [
    // Loaders
    UserLoader,

    // Repositories
    UserRepository,

    // Services
    UserService,
  ],
  exports: [UserLoader, UserService],
})
export class UserModule {}
