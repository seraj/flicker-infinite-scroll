import { ApiKey } from "../utils/config";
import request from "./request";

// Flickr has a lot of url params that i can just used them like this.i didnt need them on my Gallery Component
// i used fetch for  getting data and config the fetch function in request.js file
const getRecentPhotos = async (page: number) => {
  const urlParams = {
    method: "flickr.photos.getRecent",
    api_key: ApiKey,
    format: "json",
    nojsoncallback: 1,
    per_page: 40, // 40 images per request
    extras: "owner_name", // used this to get owner name
    page: page,
  };
  const data = await request(`/rest`, urlParams);
  return data;
};

export { getRecentPhotos };
