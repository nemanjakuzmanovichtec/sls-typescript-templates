import { withApiHooks } from '@hooks/withApiHooks';
import { OK } from '@libs/response';
import { APIGatewayProxyHandlerV2, EmptyObj } from '@libs/types';

import { HelloPathParams, helloSchema as schema } from './schema';

export const handler: APIGatewayProxyHandlerV2<
  EmptyObj,
  HelloPathParams
> = async (event) => {
  const { name = 'World' } = event.pathParameters;

  return OK({ message: `Hello ${name}` });
};

export const main = withApiHooks(handler, { schema });
