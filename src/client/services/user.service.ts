import axios from 'axios';

const API_URL = 'https://desafio-atom-omega.vercel.app/api';
// const API_URL = 'http://localhost:3000/api';

export const api = axios.create({
  baseURL: API_URL,
});

export const loginUserService = async (dataForms: IUserLogin) => {
  try {
    const response = await api.post('users/auth', dataForms);
    const { data } = response;
    return data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    const { data } = err.response;
    return data;
  }
};

export const createUserService = async (dataForms: IUserInput) => {
  try {
    const response = await api.post('/users', dataForms);
    const { data } = response;

    return data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    const { data } = err.response;
    return data;
  }
};
