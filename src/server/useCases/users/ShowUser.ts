import { collection, getDocs, query, where } from 'firebase/firestore';
import { firestore, usersRef } from '@/server/lib/firebase';

type Atribbute = 'username' | 'email' | 'id';

export default class ShowUser {
  async getUserSnapshot(value: string, atribbute: Atribbute) {
    const queryAtribbute = query(usersRef, where(atribbute, '==', value));
    return await getDocs(queryAtribbute);
  }

  async verifyAtribbute(value: string, atribbute: Atribbute) {
    const userSnapshot = await this.getUserSnapshot(value, atribbute);
    return userSnapshot.size != 0;
  }

  async getUser(value: string, atribbute: Atribbute) {
    const userSnapshot = await this.getUserSnapshot(value, atribbute);

    if (userSnapshot.size == 0) return null;
    return userSnapshot.docs[0].data() as unknown as IUser;
  }
}
