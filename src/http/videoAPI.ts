import {$host} from './index';

export const createVideo = async (params: any) => {
  const {data} = await $host.post('api/video', params);
  return data;
};

//ID - album and other
export const fetchVideos = async () => {
  const {data} = await $host.get('api/video');
  return data;
};
