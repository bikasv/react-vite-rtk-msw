import { z } from 'zod';

export const schema = z.object({
  dob: z.string(z.coerce.date()).length(10, 'Please input correct date'),
  first: z.string().min(2, 'This field is mandatory'),
  gender: z.enum(['male', 'female', 'other'], { errorMap: () => ({ message: 'Please select a value from below' }) }),
  last: z.string().min(2, 'This field is mandatory'),
  title: z.enum(['Mr', 'Ms', 'Mrs', 'Mx'], { errorMap: () => ({ message: 'Please select a value from below' }) }),
});

export type FormPayloadType = z.infer<typeof schema>;
