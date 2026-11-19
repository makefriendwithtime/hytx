export interface TransportInsertObject {
  id: number;
  orderId: number;
  num: string;
  uid: number;
  clxh?: string;
  clhp: string;
  mileage?: number;
  itotal?: number;
  ccDate?: number;
  chcj: string;
  ggxh: string;
  chmz?: number;
  chpz?: number;
  chjz?: number;
  ccdh?: string;
  ccgls?: number;
  remark?: string;
  submitFlag?: boolean;
  createDate?: number;
  shdw: string;
  saleType: string;
}

export interface TransportResponse {
  totalPage: number;
  totalCount: number;
  list: TransportListObject[];
}

export interface TransportListObject {
  id: number;
  orderId: number;
  num: string;
  uid: number;
  clxh?: string;
  clhp: string;
  mileage?: number;
  itotal?: number;
  ccDate?: number;
  chcj: string;
  ggxh: string;
  chmz?: number;
  chpz?: number;
  chjz?: number;
  ccdh?: string;
  ccgls?: number;
  adminUid?: number;
  adminDate?: number;
  adminResult?: string;
  adminFlag?: boolean;
  remark?: string;
  submitFlag?: boolean;
  createDate?: number;
  shdw: string;
  userName?: string;
  adminName?: string;
  status?: string;
  attachFlag?: boolean;
  shNum?: string | null
  bzFlag?: boolean | null
  fleetType?: string | null
  saleType: string;
}