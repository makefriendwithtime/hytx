import Base from "./Base";
import { CarListResponse, CarAddObject } from '@/interface/Car';

/**
 * 车辆管理
 */
class CarApi extends Base {
    protected Controller = 'car'

    list(param: { pageNo: number, pageSize: number, keyword?: string, clhp?: string, clxh?: string, deviceId?: string }): Promise<CarListResponse> {
        if (param.pageNo <= 0 || param.pageSize <= 0) return super.error('传入正确页码或数量')
        return super.get('/list', param)
    }

    /**
     * 添加车辆
     * @param param 
     */
    insert(param: { clhp: string, clxh?: string, deviceId: string, memo: string}): Promise<CarAddObject> {
        if (param.clhp.trim() == '') return super.error('车辆号牌不能为空')
        return super.post('/insert', param)
    }
	
	/**
	 * 修改车辆
	 * @param param 
	 */
	update(param: { clhp: string, clxh?: string, deviceId: string, memo: string}): Promise<CarAddObject> {
	    if (param.clhp.trim() == '') return super.error('车辆号牌不能为空')
	    return super.post('/update', param)
	}

    /**
     * 删除车辆
     * @param param 
     */
    delete(param: { clhp: string }) {
        return super.post('/delete', param)
    }
}

export default new CarApi