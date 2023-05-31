import { registerEnumType } from '@nestjs/graphql';

export enum CodeError {
  RegisteredUsername = 'REGISTERED_USERNAME',
  UnregisteredUsername = 'UNREGISTERED_USERNAME',
  UserNotFound = 'USER_NOT_FOUND',
  WrongPassword = 'WRONG_PASSWORD',
}
registerEnumType(CodeError, { name: 'CodeError' });
