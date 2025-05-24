/** @format */

import { getDocs, query, where } from 'firebase/firestore';
import { noticesRef } from '@/server/lib/firebase';

export default class ShowNoticeUseCase {
  async all() {
    try {
      const notices: INotice[] = [];
      const noticeSnapshot = await getDocs(noticesRef);
      noticeSnapshot.forEach((notice) => {
        notices.push(notice.data() as unknown as INotice);
      });

      return {
        error: false,
        status: 200,
        msg: 'Aqui estão todas as noticias',
        data: notices,
      };
    } catch (err: unknown) {
      return {
        error: true,
        status: 500,
        msg: 'Erro no GET da noticia.',
        data: err,
      };
    }
  }

  async one(id: string) {
    try {
      const queryAtribbute = query(noticesRef, where('id', '==', id));
      const noticeSnapshot = await getDocs(queryAtribbute);

      if (noticeSnapshot.size == 0) {
        return {
          error: true,
          status: 404,
          msg: 'Não foi encontrado a noticia',
          data: {},
        };
      }

      const notice = noticeSnapshot.docs[0].data();

      return {
        error: false,
        status: 200,
        msg: 'Aqui está a noticia',
        data: notice,
      };
    } catch (err: unknown) {
      return {
        error: true,
        status: 500,
        msg: 'Erro no GET da noticia.',
        data: err,
      };
    }
  }
}
