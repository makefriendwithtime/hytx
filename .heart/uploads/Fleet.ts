export interface FleetAddObject {
  id: number;
  fleetName: string;
  fleetType: string;
  memo: string;
}

export interface FleetListResponse {
  totalPage: number;
  totalCount: number;
  list: FleetListObject[];
}

export interface FleetListObject {
  id: number;
  fleetName: string;
  fleetType: string;
  memo: string;
  groups: GroupListObject[];
}

export interface GroupListObject {
  id: number;
  fleetId: number;
  fleetName: string;
  groupName: string;
  clxh: string;
  memo: string;
  cars: FleetCarListObject[];
}

export interface FleetCarListObject {
  fleetId: number;
  fleetName: string;
  groupId: number;
  groupName: string;
  clhp: string;
}