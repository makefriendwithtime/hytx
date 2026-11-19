export interface DispatchOrderAddObject {
  id: number;
  orderno: string;
  saleType: string;
  cclass: string;
  chcj: string;
  shdw: string;
  fleetId: number;
  groupId: number;
  ggxh: string;
  amount: number;
  memo: string;
  uid: number;
  datetime: number;
}

export interface DispatchOrderListResponse {
  totalPage: number;
  totalCount: number;
  list: DispatchOrderListObject[];
}

export interface DispatchOrderListObject {
  id: number;
  orderno: string;
  saleType: string;
  cclass: string;
  chcj: string;
  shdw: string;
  fleetId: number;
  fleetName: string;
  groupId: number;
  groupName: string;
  ggxh: string;
  amount: number;
  memo: string;
  uid: number;
  userName: string;
  datetime: number;
  ycount: number;
  fleetType: string;
}