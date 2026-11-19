import Base from "./Base";
import { RepairListResponse } from '@/interface/Repair';


class RepairApi extends Base {
    protected Controller = 'repair'

    /**
     * 列表
     * @param param 
     */
    list(param: { pageNo: number, pageSize: number, id?: number, clcp?: string }): Promise<RepairListResponse> {
        return super.get('/list', param)
    }

    /**
     * 添加维修单
     * @param param 
     */
    insert(param: { cclass: string,csbhp: string, ctype: string, ccontent: string, repairDate?: string, repairHour?: string, repairPrice?: string , cunit?: string , cmethod?: string , mileage?: string , cmemo?: string }) {
        return super.post('/insert', param)
    }
	
	insertDraft(param: { cclass: string,csbhp: string, ctype: string, ccontent: string, repairDate?: string, repairHour?: string, repairPrice?: string , cunit?: string , cmethod?: string , mileage?: string , cmemo?: string }) {
	    return super.post('/insertDraft', param)
	}

    /**
     * 修改维修单
     * @param paran 
     */
    update(paran: { id: number, cclass: string,csbhp: string, ctype: string, ccontent: string, repairDate?: string, repairHour?: string, repairPrice?: string , cunit?: string , cmethod?: string , mileage?: string , cmemo?: string }) {
        return super.post('/update', paran)
    }
	
	updateDraft(paran: { id: number, cclass: string,csbhp: string, ctype: string, ccontent: string, repairDate?: string, repairHour?: string, repairPrice?: string , cunit?: string , cmethod?: string , mileage?: string , cmemo?: string }) {
	    return super.post('/updateDraft', paran)
	}

    /**
     * 维修单校核意见
     * @param param 
     */
    updateJhyj(param: { id: number, result: string }) {
        if (param.result.trim() == '') return super.error('请输入校核意见')
        return super.post('/updateJhyj', param, true)
    }
	
	/**
	 * 维修单校核
	 * @param param 
	 */
	updateJh(param: { id: number, result: string }) {
	    if (param.result.trim() == '') return super.error('请输入校核结果')
	    return super.post('/updateJh', param, true)
	}

    /**
     * 维修单审核意见
     * @param param 
     */
    updateShyj(param: { id: number, result: string }) {
        if (param.result.trim() == '') return super.error('请输入审核意见')
        return super.post('/updateShyj', param, true)
    }

    /**
     * 维修单审核
     * @param param 
     */
    updateSh(param: { id: number, result: string }) {
        if (param.result.trim() == '') return super.error('请输入审核结果')
        return super.post('/updateSh', param, true)
    }

    /**
     * 校核撤回
     * @param id 
     */
    updateJhCancel(id: number) {
        return super.post('/updateJhCancel', { id })
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

export default new RepairApi