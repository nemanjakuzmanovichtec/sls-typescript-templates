import { handlerPath } from '@libs/handler-resolver';
import { APIGatewayFunction } from '@libs/types';

export const helloGetHandler: APIGatewayFunction = {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [{ http: { method: 'get', path: 'hello/{name}' } }],
};
