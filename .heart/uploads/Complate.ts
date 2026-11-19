export interface ComplateInsertObject {
	id : number;
	clhp? : string;
	ccDate: number;
	chcj?: string;
	ggxh: string;
	chmz: number;
	chpz: number;
	chjz: number;
	shDate : number;
	shdw? : string;
	shxh: string;
	shmz: number;
	shpz: number;
	shkz?: number;
	shjz: number;
	bc?: number;
	saleType?: string;
}

export interface ComplateResponse {
	totalPage : number;
	totalCount : number;
	list : ComplateListObject[];
}

export interface ComplateListObject {
	id : number;
	clhp? : string;
	ccDate: number;
	chcj?: string;
	ggxh: string;
	chmz: number;
	chpz: number;
	chjz: number;
	shDate: number;
	shdw? : string;
	orderShdw? : string;
	shxh: string;
	shmz: number;
	shpz: number;
	shkz?: number;
	shksl?: number;
	shjz: number;
	bc?: number;
	createDate?: number;
	bzFlag?: boolean;
	userName?: string;
	fleetType?: string;
	jsdwf?: string;
	jsdws?: string;
	jsdww?: string;
	saleType?: string;
}