import Base from "./Base";
import { CarNumberListResponse, CarNumberListObject } from '@/interface/CarNumber';
import { FleetCarAddObject } from '@/interface/FleetCar';


/**
 * 我的车辆管理
 */
class CarNumberApi extends Base {
    protected Controller = 'carnumber'

    list(param: { pageNo: number, pageSize: number, uid?: number }): Promise<CarNumberListResponse> {
        if (param.pageNo <= 0 || param.pageSize <= 0) return super.error('传入正确页码或数量')
        return super.get('/list', param)
    }

    /**
     * 添加车辆号牌
     * @param param 
     */
    insert(param: { uid: number, clxh?: string, clhp: string }): Promise<CarNumberListObject> {
        if (!param.uid || param.uid <= 0) return super.error('用户ID不正确')
        if (param.clhp.trim() == '') return super.error('车辆号牌不能为空')
        return super.post('/insert', param)
    }
	
	/**
	 * 批量添加车辆号牌
	 * @param param 
	 */
	insertBatch(param: { uid?: number, clhps: string }): Promise<CarNumberListObject[]> {
	    if (param.clhps.trim() == '') return super.error('车辆号牌不能为空')
	    return super.post('/insertBatch', param)
	}
	
	/**
	 * 变更车队
	 * @param param 
	 */
	update(param: { clhp: string, groupId: number, fleetId: number }): Promise<FleetCarAddObject> {
		if (param.clhp.trim() == '') return super.error('车辆号牌不能为空')
		if (!param.fleetId || param.fleetId <= 0) return super.error('小组ID不正确')
		if (!param.groupId || param.groupId <= 0) return super.error('车队ID不正确')
	    return super.post('/update', param)
	}

    /**
     * 删除车辆号牌
     * @param param 
     */
    delete(param: { id: number }) {
        return super.post('/delete', param)
    }
}

export default new CarNumberApi