import Base from "./Base";
import { LogListResponse } from '@/interface/Log';

/**
 * 系统日志管理
 */
class LogApi extends Base {
    protected Controller = 'log'

    /**
     * 查询列表
     * @param param 
     */
    list(param: { pageNo: number, pageSize: number, keyword?: string, userName?: string, description?: string }): Promise<LogListResponse> {
        if (param.pageNo <= 0 || param.pageSize <= 0) return super.error('传入正确页码或数量')
        return super.get('/list', param)
    }

    /**
     * 删除
     * @param id 
     */
    delete(id: number) {
        return super.post('/delete', { id })
    }

    /**
     * 批量删除
     * @param ids 
     */
    deleteBatch(ids: number[]) {
        if (ids.length === 0) return super.error('请选择需要删除的日志')
        return super.post('/deleteBatch', { ids: ids.join(',') })
    }
}

export default new LogApi