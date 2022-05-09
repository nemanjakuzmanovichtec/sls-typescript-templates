import { AnyObjectSchema } from 'yup';
import {
  handleUnexpectedError,
  logEvent,
  parseEvent,
  useHooks,
} from 'lambda-hooks';
import { APIGatewayProxyHandler } from '@libs/types';

import { validateEvent } from './validateEvent';

interface WithApiHooksConfig {
  schema?: AnyObjectSchema;
}

export const withApiHooks = (
  lambda: APIGatewayProxyHandler,
  config: WithApiHooksConfig = {}
) =>
  useHooks(
    {
      before: [parseEvent, logEvent, validateEvent],
      onError: [handleUnexpectedError],
    },
    config
  )(lambda);
