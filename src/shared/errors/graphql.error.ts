import { HttpStatus } from '@nestjs/common';
import { GraphQLError } from 'graphql';

interface ErrorInput {
  messageCode: string;
  message: string;
}

export class GraphQLBadRequestError extends GraphQLError {
  constructor({ messageCode, message }: ErrorInput) {
    super(message, {
      extensions: {
        status: HttpStatus.BAD_REQUEST,
        code: 'BAD_REQUEST',
        messageCode,
      },
    });
  }
}

export class GraphQLNotFoundError extends GraphQLError {
  constructor({ messageCode, message }: ErrorInput) {
    super(message, {
      extensions: {
        status: HttpStatus.NOT_FOUND,
        code: 'NOT_FOUND',
        messageCode,
      },
    });
  }
}
