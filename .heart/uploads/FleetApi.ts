import Base from "./Base";
import { FleetListResponse, FleetAddObject } from '@/interface/Fleet';

/**
 * 车队管理
 */
class FleetApi extends Base {
    protected Controller = 'fleet'

    list(param: { 
		pageNo: number, 
		pageSize: number, 
		fleetName?: string,
		fleetType?: string}): Promise<FleetListResponse> {
        if (param.pageNo <= 0 || param.pageSize <= 0) return super.error('传入正确页码或数量')
        return super.get('/list', param)
    }

    /**
     * 添加车队
     * @param param 
     */
    insert(param: { fleetName: string, fleetType: string, memo: string }): Promise<FleetAddObject> {
        if (param.fleetName.trim() == '') return super.error('车队名称不能为空')
        return super.post('/insert', param)
    }

	/**
	 * 修改车队
	 * @param param 
	 */
	update(param: { 
		id: number, 
		fleetName: string, 
		fleetType: string,
		memo: string }): Promise<FleetAddObject> {
		if (param.fleetName.trim() == '') return super.error('车队名称不能为空')
	    return super.post('/update', param)
	}
	
    /**
     * 删除车队
     * @param param 
     */
    delete(param: { id: number }) {
        return super.post('/delete', param)
    }
}

export default new FleetApi