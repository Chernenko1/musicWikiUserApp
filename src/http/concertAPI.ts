import {$host} from './index';

export const createConcert = async (params: any) => {
  const {data} = await $host.post('api/concert', params);
  return data;
};

//ID - album and other
export const fetchConcerts = async (id: any) => {
  const {data} = await $host.get('api/concert/' + id);
  return data;
};

export const destroyConcert = async (id: any) => {
  await $host.delete('api/concert', {data: id});
};

export const updateConcert = async (id: any, param: any) => {
  await $host.put('api/concert/update/' + id, param);
};
