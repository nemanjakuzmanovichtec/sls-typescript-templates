import { InferType, object, string } from 'yup';

const pathParamSchema = object({
  name: string().optional(),
});

export type HelloPathParams = InferType<typeof pathParamSchema>;

export const helloSchema = object({
  pathParameters: pathParamSchema,
});
