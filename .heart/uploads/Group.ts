export interface GroupAddObject {
  id: number;
  clxh: string;
  fleetId: number;
  groupName: string;
  memo: string;
}

export interface GroupListResponse {
  totalPage: number;
  totalCount: number;
  list: GroupListObject[];
}

export interface GroupListObject {
  id: number;
  fleetId: number;
  clxh: string;
  fleetName: string;
  groupName: string;
  memo: string;
}