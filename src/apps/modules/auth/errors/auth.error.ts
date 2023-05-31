import { CodeError } from '@shared/enums';
import { GraphQLBadRequestError } from '@shared/errors';

export class UnregisteredUsernameError extends GraphQLBadRequestError {
  constructor() {
    super({
      messageCode: CodeError.UnregisteredUsername,
      message: 'Unregistered username',
    });
    this.name = 'UnregisteredUsernameError';
  }
}

export class RegisteredUsernameError extends GraphQLBadRequestError {
  constructor() {
    super({
      messageCode: CodeError.RegisteredUsername,
      message: 'Registered username',
    });
    this.name = 'RegisteredUsernameError';
  }
}

export class WrongPasswordError extends GraphQLBadRequestError {
  constructor() {
    super({
      messageCode: CodeError.WrongPassword,
      message: 'The password is wrong',
    });
    this.name = 'WrongPasswordError';
  }
}
