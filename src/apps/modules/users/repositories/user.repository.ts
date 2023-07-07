import { RegisterInput } from '@api/auth/inputs';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from '@schemas/user.schema';
import { transformFilterToMongoFilterQuery } from '@utils/filter';
import { FilterQuery, Model } from 'mongoose';
import { FilterUserInput } from '../inputs';

@Injectable()
export class UserRepository {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ) {}

  async createOne(input: RegisterInput): Promise<User> {
    return this.userModel.create(input);
  }

  async findOneByFilter(filter: FilterUserInput): Promise<User> {
    const filterQuery: FilterQuery<UserDocument> =
      transformFilterToMongoFilterQuery(filter);
    return this.userModel.findOne(filterQuery).lean().exec();
  }

  async findManyBuFilter(filter: FilterUserInput): Promise<User[]> {
    const filterQuery: FilterQuery<UserDocument> =
      transformFilterToMongoFilterQuery(filter);
    return this.userModel.find(filterQuery).lean().exec();
  }
}
