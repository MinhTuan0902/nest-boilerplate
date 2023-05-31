import { User } from '@schemas/user.schema';
import { sortDataByIds } from '@utils/loader';
import * as DataLoader from 'dataloader';
import { NestDataLoader } from 'nestjs-dataloader';
import { UserRepository } from '../repositories';

export class UserLoader implements NestDataLoader<string, User> {
  constructor(private readonly userRepository: UserRepository) {}

  generateDataLoader(): DataLoader<string, User> {
    return new DataLoader<string, User>((keys: string[]) =>
      this.userRepository
        .findManyUsers({
          id_in: keys,
        })
        .then((users) => sortDataByIds(users, keys)),
    );
  }
}
