import {$authHost, $host} from './index';

//ID - album and other
export const fetchAlbums = async (id: any) => {
  const {data} = await $host.get('api/albums/all/' + id);
  return data;
};

export const fetchAllAlbums = async () => {
  const {data} = await $host.get('api/albums/all');
  return data;
};
