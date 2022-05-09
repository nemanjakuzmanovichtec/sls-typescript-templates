import { withApiHooks } from '@hooks/withApiHooks';
import { OK } from '@libs/response';
import { APIGatewayProxyHandler } from '@libs/types';

import { HelloBody, helloSchema as schema } from './schema';

export const handler: APIGatewayProxyHandler<HelloBody> = async (event) => {
  const { name = 'World' } = event.body;

  return OK({ message: `Hello ${name}` });
};

export const main = withApiHooks(handler, { schema });
