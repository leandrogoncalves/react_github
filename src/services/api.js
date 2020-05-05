import axios from 'axios';

const api = axios.create({
  baseURL: 'https://proxier.now.sh/https:/api.github.com',
});

export default api;
