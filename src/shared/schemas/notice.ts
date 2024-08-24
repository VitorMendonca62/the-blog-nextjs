import { z } from 'zod';

const noticeSchema = {
  title: z.string().min(6, 'Titulo muito curto'),
  slug: z.string().min(10, 'Corpo da noticia muito curta'),
  author: z.string().min(6, 'Nomed do autor curto demais'),
};

export const noticePostSchema = z.object({
  title: noticeSchema.title,
  slug: noticeSchema.slug,
  author: noticeSchema.author,
});
