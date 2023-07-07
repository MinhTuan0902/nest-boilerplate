import { RegisterInput } from '@api/auth/inputs';
import { Injectable } from '@nestjs/common';
import { User } from '@schemas/user.schema';
import { FilterUserInput } from '../inputs';
import { UserRepository } from '../repositories';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async createOneUser(input: RegisterInput): Promise<User> {
    return this.userRepository.createOne(input);
  }

  async findOneUser(filter: FilterUserInput): Promise<User> {
    return this.userRepository.findOneByFilter(filter);
  }
}
