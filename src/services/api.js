import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:4000/api',
  timeout: 15000,
});

api.interceptors.request.use((config) => {
  // Attach auth tokens or headers if needed
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Centralized error handling: toast, logger, etc.
    return Promise.reject(error);
  }
);

export default api;
