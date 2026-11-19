import Base from "./Base";
import { FleetCarListResponse, FleetCarAddObject } from '@/interface/FleetCar';

/**
 * 车辆分配管理
 */
class FleetCarApi extends Base {
    protected Controller = 'fleetcar'

    list(param: { 
		pageNo: number, 
		pageSize: number, 
		fleetId?: number, 
		fleetName?: string, 
		groupId?: number, 
		groupName?: string, 
		clhp?: string }): Promise<FleetCarListResponse> {
        if (param.pageNo <= 0 || param.pageSize <= 0) return super.error('传入正确页码或数量')
        return super.get('/list', param)
    }

    /**
     * 分配车辆
     * @param param 
     */
    insert(param: { 
		fleetId: number, 
		groupId: number, 
		clhp: string }): Promise<FleetCarAddObject> {
        if (param.fleetId <= 0) return super.error('车队不能为空')
		if (param.groupId <= 0) return super.error('车队小组不能为空')
		if (param.clhp.trim() == '') return super.error('车辆号牌不能为空')
        return super.post('/insert', param)
    }
	
	/**
	 * 批量分配车辆
	 * @param param 
	 */
	insertBatch(param: { 
		groupId: number, 
		clhps: string }): Promise<FleetCarAddObject[]> {
		if (param.groupId <= 0) return super.error('车队小组不能为空')
		if (param.clhps.trim() == '') return super.error('车辆号牌不能为空')
	    return super.post('/insertBatch', param)
	}
	
    /**
     * 移除车辆
     * @param param 
     */
    delete(param: { groupId: number, clhp: string }) {
		if (param.groupId <= 0) return super.error('车队小组不能为空')
		if (param.clhp.trim() == '') return super.error('车辆号牌不能为空')
        return super.post('/delete', param)
    }
}

export default new FleetCarApi