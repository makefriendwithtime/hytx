export interface RoleListResponse {
  totalPage: number;
  totalCount: number;
  list: RoleListObject[];
}

export interface RoleListObject {
  roleName: string;
  description: string;
  id: number;
}

export interface QueryUserObject {
  userList: UserList[];
  checkList: number[];
}

export interface UserList {
  id: number;
  userName: string;
  sex?: any;
  tel?: any;
  isStart: boolean;
  createDate: number;
  check?: boolean
}

export interface RoleMenuListObject {
  isSystem: boolean;
  menuUrl: string;
  roleId: number;
  roleName: string;
  menuName: string;
  pid: number;
  childList: any[];
  id: number;
  type: boolean;
  description?: string;
}