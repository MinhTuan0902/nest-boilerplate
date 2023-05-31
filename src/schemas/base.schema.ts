import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class BaseSchema {
  @Field(() => ID)
  _id: string;

  @Field(() => Date, { nullable: true })
  createdAt?: Date;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date;

  @Field(() => Date, { nullable: true })
  deletedAt?: Date;
}
