import { AnyObjectSchema } from 'yup';
import {
  handleUnexpectedError,
  logEvent,
  parseEvent,
  useHooks,
} from 'lambda-hooks';
import { APIGatewayProxyHandlerV2 } from '@libs/types';

import { validateEvent } from './validateEvent';

interface WithApiHooksConfig {
  schema?: AnyObjectSchema;
}

export const withApiHooks = (
  lambda: APIGatewayProxyHandlerV2,
  config: WithApiHooksConfig = {}
) => {
  const beforeArr = [parseEvent, logEvent];

  if (config.schema) beforeArr.push(validateEvent);

  const hooks = { before: beforeArr, onError: [handleUnexpectedError] };
  const withHooks = useHooks(hooks, config);

  return withHooks(lambda);
};
