import { z } from 'zod';

const userSchema = {
  username: z.string().min(4, 'Username muito curto'),
  name: z.string().min(6, 'Nome muito curto'),
  email: z.string().email('Email inválido'),
  password: z.string().min(8, 'A senha é curta demais'),
  confirmPassword: z.string().min(8, 'A senha é curta demais'),
};

export const userPostSchema = z
  .object({
    username: userSchema.username,
    name: userSchema.name,
    email: userSchema.email,
    password: userSchema.password,
    confirmPassword: userSchema.confirmPassword,
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: 'As senhas precisam ser iguais.',
    path: ['confirmPassword'],
  });

export const userLoginSchema = z.object({
  email: userSchema.email,
  password: userSchema.password,
});
