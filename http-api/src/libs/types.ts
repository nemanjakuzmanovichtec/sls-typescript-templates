/* eslint-disable @typescript-eslint/ban-types */
import {
  Context,
  APIGatewayProxyEventV2 as AWSEventV2,
  APIGatewayProxyResultV2,
} from 'aws-lambda';
import { AWS } from '@serverless/typescript';

// @ts-ignore
export type APIGatewayFunction = AWS['functions'][''];
export type AWSContext = Context;
export type AnyObj = Record<string, unknown>;
export type EmptyObj = Record<string, never>;

type Obj = {
  [k: string]: unknown;
};
type ObjWithStringValues = {
  [k: string]: string | undefined;
};
type ObjWithStringArrayValues = {
  [k: string]: string[] | undefined;
};
type AsyncHandler<TEvent = AnyObj, TResult = AnyObj> = (
  event: TEvent,
  context: Context
) => void | Promise<TResult>;

export interface APIGatewayProxyEventV2<
  Body extends Obj = {},
  PathParameters extends ObjWithStringValues = {},
  QueryStringParameters extends ObjWithStringValues = {},
  MultiValueQueryStringParameters extends ObjWithStringArrayValues = {}
> extends Omit<
    AWSEventV2,
    | 'body'
    | 'pathParameters'
    | 'queryStringParameters'
    | 'multiValueQueryStringParameters'
  > {
  body: Body;
  pathParameters: PathParameters;
  queryStringParameters: QueryStringParameters;
  multiValueQueryStringParameters: MultiValueQueryStringParameters;
}

export declare type APIGatewayProxyHandlerV2<
  Body extends Obj = {},
  PathParameters extends ObjWithStringValues = {},
  QueryStringParameters extends ObjWithStringValues = {},
  MultiValueQueryStringParameters extends ObjWithStringArrayValues = {}
> = AsyncHandler<
  APIGatewayProxyEventV2<
    Body,
    PathParameters,
    QueryStringParameters,
    MultiValueQueryStringParameters
  >,
  APIGatewayProxyResultV2
>;
