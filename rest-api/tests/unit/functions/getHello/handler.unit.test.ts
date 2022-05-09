import { MockProxy, mock } from 'jest-mock-extended';
import { APIGatewayProxyResultV2 } from 'aws-lambda';
import { handler } from '@functions/getHello/handler';
import { HelloPathParams } from '@functions/getHello/schema';
import { OK } from '@libs/response';
import { APIGatewayProxyEventV2, AWSContext, EmptyObj } from '@libs/types';

describe('getHello', () => {
  let event: MockProxy<APIGatewayProxyEventV2<EmptyObj, HelloPathParams>>;
  let context: MockProxy<AWSContext>;
  let expectedResult: APIGatewayProxyResultV2;

  beforeEach(() => {
    event = mock<APIGatewayProxyEventV2<EmptyObj, HelloPathParams>>();
    context = mock<AWSContext>();
  });

  it('should return name from event pathParameters', async () => {
    const name = 'John';

    event.pathParameters = { name };
    expectedResult = OK({ message: `Hello ${name}` });

    const result = await handler(event, context);

    expect(result).toEqual(expectedResult);
  });

  it('should return Hello World', async () => {
    event.pathParameters = { name: undefined };
    expectedResult = OK({ message: `Hello World` });

    const result = await handler(event, context);

    expect(result).toEqual(expectedResult);
  });
});
