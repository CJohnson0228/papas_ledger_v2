import { z } from 'zod'

export const authSchema = z
  .object({
    email: z.string().email({ message: 'Must enter a valid Email Address' }),
    password: z
      .string()
      .min(8, { message: 'Password must be at least 8 characters' })
      .max(20, { message: 'password cannot be longer than 20 characters' })
      .refine((password) => /[A-Z]/.test(password), {
        message: 'Password must have at least 1 Uppercase Character',
      })
      .refine((password) => /[a-z]/.test(password), {
        message: 'Password must have at least 1 Lowercase Character',
      })
      .refine((password) => /[0-9]/.test(password), {
        message: 'Password must have at least 1 number',
      })
      .refine((password) => /[!@#$%^&*]/.test(password), {
        message: 'Password must have at least 1 special Character',
      }),
    first_name: z
      .string()
      .min(2, { message: 'First name must be at least 2 characters' })
      .max(50, { message: 'First name must be no more than 50 characters' })
      .regex(/^[a-zA-Z0-9_]+$/, {
        message:
          'First name can only contain letters, numbers, and underscores',
      })
      .optional(), // Only required for signup
    last_name: z
      .string()
      .min(2, { message: 'Last name must be at least 2 characters' })
      .max(50, { message: 'Last name must be no more than 50 characters' })
      .regex(/^[a-zA-Z0-9_]+$/, {
        message: 'Last name can only contain letters, numbers, and underscores',
      })
      .optional(), // Only required for signup
  })
  .refine(
    (data) => {
      // Ensure first_name & last_name are provided for signup
      if (!data.first_name || !data.last_name) {
        return data.email && data.password // Allow login with just email/password
      }
      return true
    },
    {
      message: 'First and last name are required for signup',
      path: ['first_name', 'last_name'],
    }
  )
