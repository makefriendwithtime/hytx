export interface MachineListResponse {
  totalPage: number;
  totalCount: number;
  list: MachineListObject[];
}

export interface MachineListObject {
  id: number;
  num: string;
  shifts?: any;
  uid: number;
  ctype: string;
  jxxh: string;
  jxbh: string;
  startDate: number;
  endDate: number;
  ihours: number;
  jxsjqs: number;
  jxsjzs: number;
  iruntime: number;
  oil?: any;
  oilDate?: any;
  oilNum?: any;
  ccontent: string;
  repairDate?: any;
  repairPrice?: any;
  repairHour?: any;
  repairDesc?: any;
  bzUid?: any;
  bzDate?: any;
  bzResult?: any;
  adminUid?: any;
  adminDate?: any;
  adminResult?: any;
  remark?: any;
  createDate: number;
  userName: string;
  bzName: string;
  adminName: string;
}