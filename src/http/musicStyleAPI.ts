import {$host} from './index';

export const createMusicS = async (group: any) => {
  const {data} = await $host.post('api/musicstyle', group);
  return data;
};

//ID - album and other
export const fetchMusicS = async () => {
  const {data} = await $host.get('api/musicstyle');
  return data;
};
