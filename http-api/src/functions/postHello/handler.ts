import { withApiHooks } from '@hooks/withApiHooks';
import { OK } from '@libs/response';
import { APIGatewayProxyHandlerV2 } from '@libs/types';

import { HelloBody, helloSchema as schema } from './schema';

export const handler: APIGatewayProxyHandlerV2<HelloBody> = async (event) => {
  const { name = 'World' } = event.body;

  return OK({ message: `Hello ${name}` });
};

export const main = withApiHooks(handler, { schema });
