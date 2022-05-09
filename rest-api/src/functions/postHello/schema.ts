import { InferType, object, string } from 'yup';

const bodySchema = object({
  name: string().optional(),
});

export type HelloBody = InferType<typeof bodySchema>;

export const helloSchema = object({
  body: bodySchema,
});
