import { InputType } from '@nestjs/graphql';
import { BaseFilterInput } from '@shared/dto';

@InputType()
export class FilterUserInput extends BaseFilterInput {
  username_equal?: string;
}
