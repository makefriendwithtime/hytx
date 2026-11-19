import Base from "./Base";
import { TransportInsertObject, TransportResponse } from '@/interface/Transport';

/**
 * 发车单管理
 */
class TransportApi extends Base {
    protected Controller = 'transport'

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
		ggxh?: string }): Promise<TransportResponse> {
        if (param.pageNo <= 0 || param.pageSize <= 0) return super.error('传入正确页码或数量')
		if (param.uids && param.uids instanceof Array) param.uids = param.uids.join(',')
        return super.get('/list', param)
    }

    /**
     * 添加提交
     * @param param 
     */
    insert(param: {
        orderId: number,
        num?: string,
        uid?: number,
        clxh?: string,
        clhp: string,
        mileage?: number,
        itotal?: number,
        ccDate?: number,
        chcj: string,
        ggxh: string,
        chmz?: number,
        chpz?: number,
        chjz?: number,
        ccdh?: string,
        ccgls?: number,
        remark?: string,
        submitFlag?: boolean,
        shdw: string,
		saleType: string,
        address?: string,
        deviceId?: string
    }): Promise<TransportInsertObject> {
        return super.post('/insert', param)
    }
	
	/**
	 * 添加草稿
	 * @param param 
	 */
	insertDraft(param: {
		orderId: number,
		num?: string,
		uid?: number,
		clxh?: string,
		clhp: string,
		mileage?: number,
		itotal?: number,
		ccDate?: number,
		chcj: string,
		ggxh: string,
		chmz?: number,
		chpz?: number,
		chjz?: number,
		ccdh?: string,
		ccgls?: number,
		remark?: string,
		submitFlag?: boolean,
		shdw: string,
		saleType: string,
        address?: string,
        deviceId?: string
	}): Promise<TransportInsertObject> {
	    return super.post('/insertDraft', param)
	}

    /**
     * 修改提交
     * @param param 
     */
    update(param: {
        id: number,
        orderId?: number,
        num?: string,
        uid?: number,
        clxh?: string,
        clhp: string,
        mileage?: number,
        itotal?: number,
        ccDate?: number,
        chcj?: string,
        ggxh?: string,
        chmz?: number,
        chpz?: number,
        chjz?: number,
        ccdh?: string,
        ccgls?: number,
        remark?: string,
        submitFlag?: boolean,
        shdw?: string,
		saleType?: string
    }) {
        return super.post('/update', param)
    }
	
	/**
	 * 修改草稿
	 * @param param 
	 */
	updateDraft(param: {
	    id: number,
	    orderId?: number,
	    num?: string,
	    uid?: number,
	    clxh?: string,
	    clhp: string,
	    mileage?: number,
	    itotal?: number,
	    ccDate?: number,
	    chcj?: string,
	    ggxh?: string,
	    chmz?: number,
	    chpz?: number,
	    chjz?: number,
	    ccdh?: string,
	    ccgls?: number,
	    remark?: string,
	    submitFlag?: boolean,
	    shdw?: string,
		saleType?: string
	}) {
	    return super.post('/updateDraft', param)
	}


    /**
     * 审核意见
     * @param param 
     */
    updateAdminyj(param: { id: number, result: string }) {
        if (param.id == 0) return super.error('请传入正确ID')
        if (param.result.trim() == '') return super.error('请输入审核意见')
        return super.post('/updateAdminyj', param, true)
    }
	
	/**
     * 审核
     * @param param 
     */
    adminCheck(param: { id: number, result: string }) {
        if (param.id == 0) return super.error('请传入正确ID')
        if (param.result.trim() == '') return super.error('请输入审核结果')
        return super.post('/adminCheck', param, true)
    }

    /**
     * 审核撤回
     * @param id 
     */
    updateShCancel(id: number) {
        return super.post('/updateShCancel', { id })
    }

    /**
     * 删除
     * @param id 
     */
    delete(id: number) {
        return super.post('/delete', { id })
    }
}

export default new TransportApi