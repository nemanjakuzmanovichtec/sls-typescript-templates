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
) => {
  const beforeArr = [parseEvent, logEvent];

  if (config.schema) beforeArr.push(validateEvent);

  return useHooks(
    {
      before: beforeArr,
      onError: [handleUnexpectedError],
    },
    config
  )(lambda);
};
