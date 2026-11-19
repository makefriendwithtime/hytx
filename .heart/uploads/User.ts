export interface LoginResponse {
  userInfo: UserInfo;
  pageMenu: any[];
  sessionId: string;
  funMenu:any[];
}

export interface UserInfo {
  id: number;
  userName: string;
  sex?: any;
  tel?: any;
  isStart: boolean;
  isVerify: boolean;
  createDate: number;
  clientId: string;
  deviceId: string;
}

export interface UserListResponse {
  totalPage: number;
  totalCount: number;
  list: UserListObject[];
}

export interface UserListObject {
  id: number;
  logName: string;
  userName: string;
  isStart: boolean;
  isVerify: boolean;
  createDate: number;
  clientId: string;
  deviceId: string;
}