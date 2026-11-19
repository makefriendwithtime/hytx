export interface ReceiveInsertObject {
	id : number;
	clhp? : string;
	clxh? : string;
	shNum? : string;
	shDate : number;
	zzgls : number;
	shdw? : string;
	shxh : string;
	shmz : number;
	shpz : number;
	shkz : number;
	shjz : number;
	shdh : string;
	shgls : number;
	km : number;
	bc : number;
	oilDate : number;
	oilNum : number;
	zzlf : number;
	kzlf : number;
	repairDate? : number;
	repairHour? : number;
	repairPrice? : number;
	oilPrice : number;
	oilAmount : number;
	oilMileage : number;
	oilUnit : string;
	receiveRemark? : string;
	receiveFlag? : boolean;
	receiveDate? : number;
	fleetType?: string;
	saleType?: string;
}

export interface ReceiveResponse {
	totalPage : number;
	totalCount : number;
	list : ReceiveListObject[];
}

export interface ReceiveListObject {
	id : number;
	clhp? : string;
	clxh? : string;
	orderId? : number;
	uid? : number;
	ccgls? : number;
	chmz? : number;
	chcj? : string;
	adminFlag? : boolean;
	shNum? : string;
	shDate : number;
	zzgls : number;
	shdw : string;
	shxh : string;
	shmz : number;
	shpz : number;
	shkz : number;
	shksl: number;
	shjz : number;
	shdh : string;
	shgls : number;
	km : number;
	bc : number;
	oilDate : number;
	oilNum : number;
	zzlf : number;
	kzlf : number;
	repairDate? : number;
	repairHour? : number;
	repairPrice? : number;
	oilPrice : number;
	oilAmount : number;
	oilMileage : number;
	oilUnit : string;
	bzUid? : number;
	bzDate? : number;
	bzResult? : string;
	bzFlag? : boolean;
	receiveRemark : string;
	receiveFlag : boolean;
	receiveDate : number;
	userName? : string;
	bzName? : string;
	attachFlag? : boolean;
	fleetType?: string;
	saleType?: string;
}