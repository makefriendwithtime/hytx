import Base from "./Base";
import { GroupListResponse, GroupAddObject } from '@/interface/Group';

/**
 * 车队小组管理
 */
class GroupApi extends Base {
    protected Controller = 'group'

    list(param: { 
		pageNo: number, 
		pageSize: number, 
		fleetId?: number, 
		clxh?: string,
		fleetName?: string, 
		groupName?: string }): Promise<GroupListResponse> {
        if (param.pageNo <= 0 || param.pageSize <= 0) return super.error('传入正确页码或数量')
        return super.get('/list', param)
    }

    /**
     * 添加车队小组
     * @param param 
     */
    insert(param: { 
		fleetId: number, 
		clxh?: string,
		groupName: string, 
		memo: string }): Promise<GroupAddObject> {
        if (param.fleetId <= 0) return super.error('车队不能为空')
		if (param.groupName.trim() == '') return super.error('车队小组名称不能为空')
        return super.post('/insert', param)
    }

	/**
	 * 修改车队小组
	 * @param param 
	 */
	update(param: { 
		id: number, 
		fleetId: number, 
		clxh?: string,
		groupName: string, 
		memo: string }): Promise<GroupAddObject> {
		if (param.fleetId <= 0) return super.error('车队不能为空')
		if (param.groupName.trim() == '') return super.error('车队小组名称不能为空')
	    return super.post('/update', param)
	}
	
    /**
     * 删除车队小组
     * @param param 
     */
    delete(param: { id: number }) {
        return super.post('/delete', param)
    }
}

export default new GroupApi