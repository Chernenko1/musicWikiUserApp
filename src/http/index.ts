import axios from 'axios';

const $host = axios.create({
  baseURL: 'http://10.0.2.2:4848',
});

export {$host};
