export interface RepairListResponse {
    totalPage: number;
    totalCount: number;
    list: RepairListObject[];
}

export interface RepairListObject {
    id: number;
    cclass: string;
    csbhp: string;
	ctype: string;
    ccontent: string;
    repairDate?: any;
    repairHour?: any;
    repairPrice?: any;
    cunit: string;
    cmethod: string;
    mileage?: any;
    cmemo: string;
    jhUid?: any;
    jhyj?: any;
    jhDate?: any;
    shUid?: any;
    shyj?: any;
    shDate?: any;
    uid: number;
    createDate: number;
	submitFlag?: boolean;
	jhFlag?: boolean;
	shFlag?: boolean;
}