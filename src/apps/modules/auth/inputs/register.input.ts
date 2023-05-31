import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class RegisterInput {
  @Field(() => String)
  username: string;

  @Field(() => String)
  fullName: string;

  @Field(() => String)
  password: string;
}
