import { z } from 'zod';

export const schema = z.object({
  email: z.string().email('Please input the valid email address'),
  phone: z.string().min(10, 'Please input a valid phone number').max(11, 'Please input a valid phone number'),
});

export type FormPayloadType = z.infer<typeof schema>;
