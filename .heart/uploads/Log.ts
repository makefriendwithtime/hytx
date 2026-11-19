export interface LogListResponse {
  totalPage: number;
  totalCount: number;
  list: LogListObject[];
}

export interface LogListObject {
  uid: number;
  methodName: string;
  description: string;
  id: number;
  userName: string;
  createDate: number;
}