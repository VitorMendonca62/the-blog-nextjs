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

export const getFilterNotice = async (title: string) => {
  const notices = (await getAllNotices()).data as INotice[];

  return notices.filter((notice) => notice.title.includes(title));
};

export const createNoticeService = async (dataForms: INoticeInput) => {
  try {
    const response = await api.post('', dataForms);
    const { data } = response;
    return data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    const { data } = err.response;
    return data;
  }
};
