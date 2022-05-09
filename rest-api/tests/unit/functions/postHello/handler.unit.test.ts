/* eslint-disable @typescript-eslint/no-empty-function */
import { APIGatewayProxyResult, Context } from 'aws-lambda';
import { handler } from '@functions/postHello/handler';
import { HelloBody } from '@functions/postHello/schema';
import { OK } from '@libs/response';
import { APIGatewayProxyEvent } from '@libs/types';

describe('hello', () => {
  let mockEvent: APIGatewayProxyEvent<HelloBody>;
  let mockContext: Context;
  let expectedResult: APIGatewayProxyResult;

  it('should return name from event body', async () => {
    const name = 'John';
    mockEvent = { ...mockEvent, body: { name } };
    expectedResult = OK({ message: `Hello ${name}` });

    const result = await handler(mockEvent, mockContext, () => {});

    expect(result).toEqual(expectedResult);
  });

  it('should return Hello World', async () => {
    mockEvent = { ...mockEvent, body: { name: undefined } };
    expectedResult = OK({ message: `Hello World` });

    const result = await handler(mockEvent, mockContext, () => {});

    expect(result).toEqual(expectedResult);
  });
});
