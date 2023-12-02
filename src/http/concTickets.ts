import {$host} from './index';

export const createConcTickets = async (params: any) => {
  const {data} = await $host.post('api/concTickets', params);
  return data;
};

//ID - album and other
export const fetchConcTicketss = async () => {
  const {data} = await $host.get('api/concTickets');
  return data;
};
