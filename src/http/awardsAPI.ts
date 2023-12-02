import {$host} from './index';

export const createAward = async (params: any) => {
  const {data} = await $host.post('api/award', params);
  return data;
};

//ID - album and other
export const fetchAwards = async (id: any) => {
  const {data} = await $host.get('api/award/' + id);
  return data;
};

export const destroyAward = async (id: any) => {
  await $host.delete('api/award', {data: id});
};

export const updateAward = async (id: any, param: any) => {
  await $host.put('api/award/update/' + id, param);
};
