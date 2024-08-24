interface IUserInput {
  username: string;
  name: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

type InputsUser = 'name' | 'email' | 'password' | 'confirmPassword';

interface IUserLogin {
  email: string;
  password: string;
}

interface IUser {
  username: string;
  name: string;
  id: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}
