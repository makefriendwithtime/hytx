import Base from "./Base";
import { DispatchOrderListResponse, DispatchOrderAddObject } from '@/interface/DispatchOrder';

/**
 * 派工单管理
 */
class DispatchOrderApi extends Base {
    protected Controller = 'dispatchorder'

    list(param: { 
		pageNo: number, 
		pageSize: number, 
		id?: number,
		uid?: number,
		startDate?: string,
		endDate?: string,
		saleType?: string,
		chcj?: string, 
		shdw?: string,
		fleetName?: string, 
		groupName?: string, 
		ggxh?: string}): Promise<DispatchOrderListResponse> {
        if (param.pageNo <= 0 || param.pageSize <= 0) return super.error('传入正确页码或数量')
        return super.get('/list', param)
    }

    /**
     * 添加派工单
     * @param param 
     */
    insert(param: { 
		saleType: string,
		chcj: string, 
		shdw: string, 
		fleetId: number, 
		groupId: number , 
		ggxh: string , 
		amount: number , 
		memo: string }): Promise<DispatchOrderAddObject> {
        return super.post('/insert', param)
    }
	
	/**
	 * 修改派工单
	 * @param param 
	 */
	update(param: { 
		id: number,
		saleType: string,
		chcj: string, 
		shdw: string,  
		fleetId: number, 
		groupId: number , 
		ggxh: string , 
		amount: number , 
		memo: string }): Promise<DispatchOrderAddObject> {
	    return super.post('/update', param)
	}

    /**
     * 删除派工单
     * @param param 
     */
    delete(param: { id: number }) {
        return super.post('/delete', param)
    }
}

export default new DispatchOrderApi