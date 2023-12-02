import {$host} from './index';

export const createRole = async (params: any) => {
  const {data} = await $host.post('api/role', params);
  return data;
};

//ID - album and other
export const fetchRoles = async () => {
  const {data} = await $host.get('api/role');
  return data;
};
