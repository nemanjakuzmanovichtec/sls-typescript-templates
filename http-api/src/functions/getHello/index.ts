import { handlerPath } from '@libs/handler-resolver';
import { APIGatewayFunction } from '@libs/types';

export const helloGetHandler: APIGatewayFunction = {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [{ httpApi: { method: 'get', path: '/hello/{name}' } }],
};
