import {$host} from './index';

export const createPr = async (params: any) => {
  const {data} = await $host.post('api/pr', params);
  return data;
};

//ID - album and other
export const fetchPrs = async (id: any) => {
  const {data} = await $host.get('api/pr/' + id);
  return data;
};
