import Base from "./Base";
import { DictListResponse, DictAddObject } from '@/interface/Dict';

/**
 * 数据字典管理
 */
class DictApi extends Base {
    protected Controller = 'dict'

    list(param: { 
		pageNo: number, 
		pageSize: number, 
		keyword?: string, 
		cident?: string, 
		cclass?: string,
		cvalue?: string}): Promise<DictListResponse> {
        if (param.pageNo <= 0 || param.pageSize <= 0) return super.error('传入正确页码或数量')
        return super.get('/list', param)
    }

    /**
     * 根据标识查询数据字典
     * @param cident
     */
    queryByTransport(cident: string) {
        if (cident.length === 0) return super.error('请选择需要查询的字典')
        return super.get('/queryByTransport', { cident: cident })
    }

    /**
     * 添加数据字典
     * @param param 
     */
    insert(param: { 
		cident: string, 
		cvalue: string, 
		remark?: string, 
		cclass?: string,
		jsdw?: string,
		cpgg?: string,
		clxh?: string,
		bflag: boolean}): Promise<DictAddObject> {
        if (param.cident.trim() === '') return super.error('请输入类型')
        if (param.cvalue.trim() == '') return super.error('请输入名称')
        return super.post('/insert', param)
    }
	
	/**
	 * 修改数据字典
	 * @param param 
	 */
	update(param: { 
		cident: string,
		cvalue: string, 
		ovalue?: string, 
		remark?: string, 
		cclass?: string,
		jsdw?: string,
		cpgg?: string,
		clxh?: string,
		bflag: boolean}): Promise<DictAddObject> {
	    if (param.cident.trim() === '') return super.error('请输入类型')
	    if (param.cvalue.trim() == '') return super.error('请输入名称')
	    return super.post('/update', param)
	}

    /**
     * 删除数据字典
     * @param param 
     */
    delete(param: { cident: string, cvalue?: string }) {
        return super.post('/delete', param)
    }
}

export default new DictApi