import ShowUser from '@/server/useCases/users/ShowUser';
import { v4 } from 'uuid';
import bcrypt from 'bcryptjs';
import { auth, usersRef } from '../../lib/firebase';
import { addDoc } from 'firebase/firestore';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export default class CreateUserUseCase {
  showUser = new ShowUser();

  async execute(user: IUserInput) {
    try {
      const { name, email, password: _password, username } = user;

      const userWithUsername = await this.showUser.verifyAtribbute(
        username,
        'username',
      );

      if (userWithUsername) {
        return {
          error: true,
          status: 400,
          msg: 'Já existe um usuário com esse username. Tente novamente!',
          data: {},
        };
      }

      const userWithEmail = await this.showUser.verifyAtribbute(email, 'email');

      if (userWithEmail) {
        return {
          error: true,
          status: 400,
          msg: 'Já existe um usuário com esse email. Tente novamente!',
          data: {},
        };
      }

      const password = bcrypt.hashSync(String(_password), 10);
      const id = v4();
      const dateNow = new Date();

      const _user: IUser = {
        id,
        name,
        email,
        password,
        username,
        createdAt: dateNow,
        updatedAt: dateNow,
      };

      await createUserWithEmailAndPassword(auth, email, _password);
      await addDoc(usersRef, _user);

      return {
        error: false,
        status: 201,
        msg: 'Usuário criado com sucesso.',
        data: {},
      };
    } catch (err: unknown) {
      console.log(err)
      return {
        error: true,
        status: 500,
        msg: 'Erro na criação do usuário.',
        data: err,
      };
    }
  }
}
