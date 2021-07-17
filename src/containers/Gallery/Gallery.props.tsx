// Single Photo data type
export type PhotoType = {
  id: string;
  owner: string;
  ownername: string;
  secret: string;
  server: string;
  farm: number;
  title: string;
  ispublic: number;
  isfriend: number;
  isfamily: number;
};

// flicker Photos Response data type

export type PhotosType = {
  page: number;
  pages: number;
  perpage: number;
  total: number;
  photo: PhotoType[];
};
