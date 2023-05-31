import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { LoginInput } from '../inputs';
import { AuthService } from '../services';
import { AuthData } from '../types';

@Resolver()
export class AuthMutationResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => AuthData)
  async login(@Args('input') input: LoginInput): Promise<AuthData> {
    return this.authService.login(input);
  }
}
