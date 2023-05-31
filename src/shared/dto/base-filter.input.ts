import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class BaseFilterInput {
  @Field(() => ID, { nullable: true })
  id_equal?: string;

  @Field(() => ID, { nullable: true })
  id_notEqual?: string;

  @Field(() => ID, { nullable: true })
  id_in?: string[];

  @Field(() => ID, { nullable: true })
  id_notIn?: string[];

  @Field(() => ID, { nullable: true })
  id_greaterThan?: string;

  @Field(() => ID, { nullable: true })
  id_greaterThanOrEqual?: string;

  @Field(() => ID, { nullable: true })
  id_lessThan?: string;

  @Field(() => ID, { nullable: true })
  id_lessThanOrEqual?: string;
}
