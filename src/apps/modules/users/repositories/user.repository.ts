import { RegisterInput } from '@api/auth/inputs';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from '@schemas/user.schema';
import { transformFilterToMongoFilterQuery } from '@utils/filter';
import { Model } from 'mongoose';
import { FilterUserInput } from '../inputs';

@Injectable()
export class UserRepository {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ) {}

  async createOneUser(input: RegisterInput): Promise<User> {
    return this.userModel.create(input);
  }

  async findOneUser(filter: FilterUserInput): Promise<User> {
    return this.userModel.findOne(transformFilterToMongoFilterQuery(filter));
  }

  async findManyUsers(filter: FilterUserInput): Promise<User[]> {
    const filterQuery = transformFilterToMongoFilterQuery(filter);
    return this.userModel.find(filterQuery);
  }
}
