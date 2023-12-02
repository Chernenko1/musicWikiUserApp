import {$host} from './index';

export const createBandMember = async (params: any) => {
  const {data} = await $host.post('api/bmember', params);
  return data;
};

//ID - album and other
export const fetchBandMembers = async (id: any) => {
  const {data} = await $host.get('api/bmember/' + id);
  return data;
};

export const destroyBandMember = async (id: any) => {
  await $host.delete('api/bmember', {data: id});
};

export const updateBandMember = async (id: any, param: any) => {
  await $host.put('api/award/update/' + id, param);
};
