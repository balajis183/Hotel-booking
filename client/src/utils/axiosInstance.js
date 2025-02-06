import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000', // Your Express server URL
  // baseURL: 'http://localhost:8000', // Your Express server URL

});

export default axiosInstance;
