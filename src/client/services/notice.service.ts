import axios from 'axios';

const API_URL = 'http://localhost:3000/api/notices';

export const api = axios.create({
  baseURL: API_URL,
});

export const getAllNotices = async () => {
  try {
    const response = await api.get('');
    const { data } = response;

    return data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    const { data } = err.response;
    return data;
  }
};

export const getOneNoticee = async (id: string) => {
  try {
    const response = await api.get(`/${id}`);
    const { data } = response;

    return data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    const { data } = err.response;
    return data;
  }
};
