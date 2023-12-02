import axios from 'axios';

const $host = axios.create({
  baseURL: 'http://10.0.2.2:4848',
});

const $authHost = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export {$host, $authHost};
