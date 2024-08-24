import ShowUser from './ShowUser';
import bcrypt from 'bcryptjs';
import { generateToken } from '@/server/lib/jwt';
import { errorInServer } from '../../utils/errorInServer';
import { auth, signInWithEmailAndPassword } from '../../lib/firebase';

export default class LoginUser {
  showUser = new ShowUser();

  verifyPassword(userPassword: string, inputPassword: string) {
    return bcrypt.compareSync(inputPassword, userPassword);
  }

  async execute(email: string, password: string) {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      const user = await this.showUser.getUser(email, 'email');

      const token = generateToken(user as IUser);

      return {
        auth: true,
        token,
        msg: 'Usuário logado com sucesso!',
        error: false,
        status: 201,
        data: {},
      };
    } catch (err: unknown) {
      return {
        error: true,
        status: 404,
        msg: 'Email ou senha estão incorretos.',
        data: {},
      };
    }
  }
}
