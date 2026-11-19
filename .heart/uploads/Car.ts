export interface CarAddObject {
  clhp: string;
  clxh?: string;
  deviceId?: string;
  memo?: string;
}

export interface CarListResponse {
  totalPage: number;
  totalCount: number;
  list: CarListObject[];
}

export interface CarListObject {
  clhp: string;
  clxh?: string;
  deviceId?: string;
  memo?: string;
}