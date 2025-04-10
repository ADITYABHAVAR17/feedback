// src/api/axios.js
import axios from 'axios';

const instance = axios.create({
  baseURL: '/api/', // Change if your backend runs on a different port
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
