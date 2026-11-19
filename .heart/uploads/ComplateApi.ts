import Base from "./Base"
import { ComplateResponse } from '@/interface/Complate'

/**
 * 完工运单管理
 */
class ComplateApi extends Base {
    protected Controller = 'complate'

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
		jsdw?: string,
		bzFlag?: boolean,
		saleType?: string,
		ggxh?: string }): Promise<ComplateResponse> {
		if (param.pageNo <= 0 || param.pageSize <= 0) return super.error('传入正确页码或数量')
        return super.get('/list', param)
    }

    /**
     * 审核
     * @param param 
     */
    updateCheck(param: {
        id : number,
        ccDate: number,
        ggxh: string,
        chmz: number,
        chpz: number,
        chjz: number,
        shDate : number,
        shxh: string,
        shmz: number,
        shpz: number,
        shkz: number,
        shksl: number,
        shjz: number,
        bc: number
    }) {
        return super.post('/updateCheck', param)
    }
	
	/**
	 * 变更
	 * @param param 
	 */
	update(param: {
	    id : number,
	    saleType: string,
	    chcj: string,
	    shdw: string,
	    ggxh: string,
	    shxh: string
	}) {
	    return super.post('/update', param)
	}
	
	/**
	 * 审核撤回
	 * @param id 
	 */
	updateCancel(id: number) {
	    return super.post('/updateCancel', { id })
	}
}

export default new ComplateApi