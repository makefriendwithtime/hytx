export interface MenuListResponse {
  totalPage: number;
  totalCount: number;
  list: MenuListObject[];
}

export interface MenuListObject {
  parentName: string;
  menuUrl: string;
  menuName: string;
  id: number;
  type: boolean;
}