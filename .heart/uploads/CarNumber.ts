export interface CarNumberAddObject {
  id: number;
  uid: number;
  clxh?: string;
  clhp: string;
}

export interface CarNumberListResponse {
  totalPage: number;
  totalCount: number;
  list: CarNumberListObject[];
}

export interface CarNumberListObject {
  id: number;
  uid: number;
  userName: string;
  clxh?: string;
  clhp: string;
  fleetId: number;
  groupId: number;
  fleetName: string;
  groupName: string;
  fleetType: string;
}