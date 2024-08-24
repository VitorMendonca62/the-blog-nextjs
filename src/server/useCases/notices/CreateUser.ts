import { v4 } from 'uuid';
import { addDoc, Timestamp } from 'firebase/firestore';
import { noticesRef } from '@/server/lib/firebase';

export default class CreateNoticeUseCase {
  async execute(notice: INoticeInput) {
    try {
      const { author, category, slug, title } = notice;
      const id = v4().slice(0, 13);
      const dateNow = Timestamp.now();

      const _notice: INotice = {
        id,
        title,
        author,
        category,
        slug,
        createdAt: dateNow,
        updatedAt: dateNow,
      };
      await addDoc(noticesRef, _notice);

      return {
        error: false,
        status: 201,
        msg: 'Noticia criada com sucesso.',
        data: {},
      };
    } catch (err: unknown) {
      return {
        error: true,
        status: 500,
        msg: 'Erro na criação da noticia.',
        data: err,
      };
    }
  }
}
