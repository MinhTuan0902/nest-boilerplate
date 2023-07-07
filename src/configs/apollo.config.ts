import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLFormattedError } from 'graphql';
import { join } from 'path';

export const getApolloDriverConfig = (): ApolloDriverConfig => ({
  driver: ApolloDriver,
  playground: true,
  buildSchemaOptions: {
    dateScalarMode: 'isoDate',
  },
  autoSchemaFile: {
    path: join(process.cwd(), 'graphql/schema.gql'),
  },
  definitions: {
    path: join(process.cwd(), 'generated/graphql.ts'),
  },
  formatError: (
    formattedError: GraphQLFormattedError,
  ): GraphQLFormattedError => {
    delete formattedError.extensions.stacktrace;
    return formattedError;
  },
  subscriptions: {
    'subscriptions-transport-ws': {
      path: '/graphql',
      onConnect: (context: any) => {
        // TODO: Validate auth data on Subscriptions
      },
    },
  },
});
