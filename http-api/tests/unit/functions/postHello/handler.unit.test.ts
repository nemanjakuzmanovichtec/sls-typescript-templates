import { MockProxy, mock } from 'jest-mock-extended';
import { APIGatewayProxyResultV2 } from 'aws-lambda';
import { handler } from '@functions/postHello/handler';
import { HelloBody } from '@functions/postHello/schema';
import { OK } from '@libs/response';
import { APIGatewayProxyEventV2, AWSContext } from '@libs/types';

describe('hello', () => {
  let event: MockProxy<APIGatewayProxyEventV2<HelloBody>>;
  let context: MockProxy<AWSContext>;
  let expectedResult: APIGatewayProxyResultV2;

  beforeEach(() => {
    event = mock<APIGatewayProxyEventV2<HelloBody>>();
    context = mock<AWSContext>();
  });

  it('should return name from event body', async () => {
    const name = 'John';

    event.body = { name };
    expectedResult = OK({ message: `Hello ${name}` });

    const result = await handler(event, context);

    expect(result).toEqual(expectedResult);
  });

  it('should return Hello World', async () => {
    event.body = { name: undefined };
    expectedResult = OK({ message: `Hello World` });

    const result = await handler(event, context);

    expect(result).toEqual(expectedResult);
  });
});
