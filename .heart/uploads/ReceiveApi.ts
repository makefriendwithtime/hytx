import Base from "./Base"
import { ReceiveResponse } from '@/interface/Receive'

/**
 * 收货单管理
 */
class ReceiveApi extends Base {
    protected Controller = 'receive'

    /**
     * 列表
     * @param param 
     */
    list(param: { 
		pageNo: number, 
		pageSize: number, 
		id?: number, 
		startDate?: string, 
		endDate?: string, 
		uids?: number[] | string, 
		clhp?: string, 
		chcj?: string, 
		shdw?: string, 
		saleType?: string,
		shxh?: string }): Promise<ReceiveResponse> {
        if (param.pageNo <= 0 || param.pageSize <= 0) return super.error('传入正确页码或数量')
		if (param.uids && param.uids instanceof Array) param.uids = param.uids.join(',')
        return super.get('/list', param)
    }

    /**
     * 修改提交
     * @param param 
     */
    update(param: {
        id: number,
        clhp? : string,
        clxh? : string,
        shNum? : string,
        shDate : number,
        zzgls : number,
        shdw? : string,
        shxh : string,
        shmz : number,
        shpz : number,
        shkz : number,
        shksl: number,
        shjz : number,
        shdh : string,
        shgls : number,
        km : number,
        bc : number,
        oilDate : number,
        oilNum : number,
        zzlf : number,
        kzlf : number,
        repairDate : number,
        repairHour : number,
        repairPrice : number,
        oilPrice : number,
        oilAmount : number,
        oilMileage : number,
        oilUnit : string,
        receiveRemark? : string,
        receiveFlag? : boolean,
        receiveDate? : number
    }) {
        return super.post('/update', param)
    }
	
	/**
	 * 修改草稿
	 * @param param 
	 */
	updateDraft(param: {
	    id: number,
	    clhp? : string,
	    clxh? : string,
	    shNum? : string,
	    shDate : number,
	    zzgls : number,
	    shdw? : string,
	    shxh : string,
	    shmz : number,
	    shpz : number,
	    shkz : number,
        shksl: number,
	    shjz : number,
	    shdh : string,
	    shgls : number,
	    km : number,
	    bc : number,
	    oilDate : number,
	    oilNum : number,
	    zzlf : number,
	    kzlf : number,
	    repairDate : number,
	    repairHour : number,
	    repairPrice : number,
	    oilPrice : number,
	    oilAmount : number,
	    oilMileage : number,
	    oilUnit : string,
	    receiveRemark? : string,
	    receiveFlag? : boolean,
	    receiveDate? : number
	}) {
	    return super.post('/updateDraft', param)
	}


    /**
     * 审核意见
     * @param param 
     */
    updateBzyj(param: { id: number, result: string }): Promise<{ data: null, msg: string, result: number }> {
        if (param.id == 0) return super.error('请传入正确ID')
        if (param.result.trim() == '') return super.error('请输入校核意见')
        return super.post('/updateBzyj', param, true)
    }
	
	/**
	 * 审核
	 * @param param 
	 */
	bzCheck(param: { id: number, result: string }): Promise<{ data: null, msg: string, result: number }> {
	    if (param.id == 0) return super.error('请传入正确ID')
	    if (param.result.trim() == '') return super.error('请输入校核结果')
	    return super.post('/bzCheck', param, true)
	}

    /**
     * 审核撤回
     * @param id 
     */
    updateJhCancel(id: number) {
        return super.post('/updateJhCancel', { id })
    }
	
	/**
	 * 变更收货单位
	 * @param id 
	 */
	updateAddress(param: {id: number, chcj: string, shdw: string}) {
	    return super.post('/updateAddress', param)
	}

    /**
     * 删除
     * @param id 
     */
    delete(id: number) {
        return super.post('/delete', { id })
    }
}

export default new ReceiveApi