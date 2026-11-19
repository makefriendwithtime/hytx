export interface FleetCarAddObject {
  fleetId: number;
  groupId: number;
  clhp: string;
}

export interface FleetCarListResponse {
  totalPage: number;
  totalCount: number;
  list: FleetCarListObject[];
}

export interface FleetCarListObject {
  fleetId: number;
  fleetName: string;
  groupId: number;
  groupName: string;
  clhp: string;
}