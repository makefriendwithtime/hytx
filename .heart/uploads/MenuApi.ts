import Base from './Base';
import { MenuListResponse } from '@/interface/Menu';

/**
 * 权限管理
 */
class MenuApi extends Base {
    protected Controller = 'menu'

    /**
     * 查询权限列表
     * @param param 
     */
    list(param: { pageNo: number, pageSize: number, keyword?: string, menuName?: string, parentName?: string, type?: boolean, pid?: number }): Promise<MenuListResponse> {
        if (param.pageNo <= 0 || param.pageSize <= 0) return super.error('传入正确页码或数量')
        return super.get('/list', param)
    }

    /**
     * 根据类型查询相应权限和已有权限主键
     * @param param 
     */
    queryMenuAndPermission(param: { type: number, roleId: number }) {
        return super.get('/queryMenuAndPermission', param)
    }

    /**
     * 根据权限类型查询父级权限
     * @param type 
     */
    queryParentMenuByType(type: 0 | 1) {
        super.get('/queryParentMenuByType', { type })
    }

    /**
     * 添加权限
     * @param param 
     */
    insert(param: { menuName: string, menuUrl: string, type: 0 | 1, pid?: number, description?: string }) {
        if (param.menuName.trim() === '') return super.error('请输入权限名称')
        if (param.menuUrl.trim() === '') return super.error('请输入权限地址')
        return super.post('/insert', param)
    }

    /**
     * 修改权限
     * @param param 
     */
    update(param: { id: number, menuName?: string, menuUrl?: string, type?: 0 | 1, pid?: number, description?: string }) {
        return super.post('/update', param)
    }

    /**
     * 删除权限
     * @param id 
     */
    delete(id: number) {
        return super.post('/delete', { id })
    }

    /**
     * 批量删除权限
     * @param ids 
     */
    deleteBatch(ids: number[]) {
        return super.post('/deleteBatch', { ids: ids.join(',') })
    }
}

export default new MenuApi