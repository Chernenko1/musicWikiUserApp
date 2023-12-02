import {$host} from './index';

export const createLabels = async (params: any) => {
  const {data} = await $host.post('api/labels', params);
  return data;
};

//ID - album and other
export const fetchLabelss = async () => {
  const {data} = await $host.get('api/labels');
  return data;
};

export const destroyLabels = async (id: any) => {
  await $host.delete('api/labels/update/', {data: id});
};
