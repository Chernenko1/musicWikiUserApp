import {$host} from './index';

export const createGroup = async (group: any) => {
  const {data} = await $host.post('api/group', group);
  return data;
};

//ID - album and other
export const fetchGroups = async () => {
  try {
    const {data} = await $host.get('api/group');
    return data;
  } catch (e) {
    console.log(2 + e);
  }
};

export const fetchOneGroup = async (id: any) => {
  const {data} = await $host.get('api/group/' + id);
  return data;
};
