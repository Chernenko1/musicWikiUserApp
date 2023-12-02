import {$host} from './index';

export const createSong = async (params: any) => {
  const {data} = await $host.post('api/song', params);
  return data;
};

//ID - album and other
export const fetchSongs = async (id: any) => {
  const {data} = await $host.get('api/song/' + id);
  return data;
};
