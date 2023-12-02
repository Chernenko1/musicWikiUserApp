import { $host } from "./index";

export const createImage = async (params: any) => {
  const { data } = await $host.post("api/image", params);
  return data;
};

//ID - album and other
export const fetchImages = async () => {
  const { data } = await $host.get("api/image");
  return data;
};