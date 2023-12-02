import {$host} from './index';

export const createCity = async (params: any) => {
  const {data} = await $host.post('api/city', params);
  return data;
};

//ID - album and other
export const fetchCities = async () => {
  const {data} = await $host.get('api/city');
  return data;
};

export const destroyCity = async (id: any) => {
  await $host.delete('api/city', {data: id});
};

export const updateCity = async (id: any, param: any) => {
  await $host.put('api/award/update/' + id, param);
};
