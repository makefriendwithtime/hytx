export interface DictListResponse {
  totalPage: number;
  totalCount: number;
  list: DictListObject[];
}

export interface DictListObject {
  cvalue: string;
  ovalue: string;
  remark: string;
  cident: string;
  cclass: string;
  jsdw: string;
  cpgg: string;
  clxh: string;
  bflag: boolean;
}

export interface DictAddObject {
  cident: string;
  cvalue: string;
  ovalue: string;
  remark: string;
  cclass: string;
  jsdw: string;
  cpgg: string;
  clxh: string;
  bflag: boolean;
}