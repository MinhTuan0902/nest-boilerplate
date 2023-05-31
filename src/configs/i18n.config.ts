import {
  AcceptLanguageResolver,
  I18nOptions,
  QueryResolver,
} from 'nestjs-i18n';
import { join } from 'path';

export const getI18nOptions = (): I18nOptions => ({
  fallbackLanguage: 'en',
  loaderOptions: {
    path: join(__dirname, '/locales/'),
    watch: true,
  },
  resolvers: [
    { use: QueryResolver, options: ['lang'] },
    AcceptLanguageResolver,
  ],
});
