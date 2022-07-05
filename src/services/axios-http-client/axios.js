import axios from 'axios';

const api = axios.create({
  baseURL: '',
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    console.error(error);

    return Promise.reject(error);
  },
);

export default api;
