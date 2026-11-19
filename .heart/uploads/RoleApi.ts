import { RoleMenuListObject } from '@/interface/Role';
import Base from "./Base";
import { RoleListResponse, QueryUserObject } from '@/interface/Role';

/**
 * 角色管理
 */
class RoleApi extends Base {
    protected Controller = 'role'

    /**
     * 查询角色列表页
     * @param param 
     */
    list(param: { pageNo: number, pageSize: number, roleName?: string }): Promise<RoleListResponse> {
        if (param.pageNo <= 0 || param.pageSize <= 0) return super.error('传入正确页码或数量')
        return super.get('/list', param)
    }

    /**
     * 根据角色主键查询角色功能权限
     * @param roleId 
     */
    queryFunByRoleId(roleId: number): Promise<RoleMenuListObject[]> {
        return super.get('/queryFunByRoleId', { roleId })
    }

    /**
     * 根据主键查询信息
     * @param id 
     */
    queryById(id: number): Promise<{ description: string, id: number, isSystem: boolean, roleName: string }> {
        return super.get('/queryById', { id })
    }

    /**
     * 查询所有用户及当前角色绑定用户主键
     */
    queryUser(roleId: number): Promise<QueryUserObject> {
        return super.get('/queryUser', { roleId })
    }

    /**
     * 添加角色
     * @param param 
     */
    insert(param: { roleName: string, description?: string }) {
        if (param.roleName.trim() == '') return super.error('请输入角色名')
        return super.post('/insert', param)
    }

    /**
     * 修改角色
     * @param param 
     */
    update(param: { id: number, roleName: string, description?: string }) {
        return super.post('/update', param)
    }

    /**
     * 用户关联角色
     * @param userId 
     * @param roleId 
     */
    userLinkRole(param: { userId: number[], roleId: number }) {
        if (param.userId.length === 0) return super.error('请选择需要查询的用户')
        return super.post('/userLinkRole', { userId: param.userId.join(','), roleId: param.roleId })
    }

    /**
     * 功能权限关联角色
     * @param param 
     */
    menuLinkRoleFun(param: { menuId: number[], roleId: number }) {
        if (param.menuId.length === 0) return super.error('请选择关联的权限')
        return super.post('/menuLinkRoleFun', { menuId: param.menuId.join(','), roleId: param.roleId }, true)
    }

    /**
     * 页面权限关联角色
     * @param param 
     */
    menuLinkRolePage(param: { menuId: number[], roleId: number }) {
        if (param.menuId.length === 0) return super.error('请选择关联的权限')
        return super.post('/menuLinkRolePage', { menuId: param.menuId.join(','), roleId: param.roleId })
    }

    /**
     * 删除角色
     * @param id 
     */
    delete(id: number) {
        return super.post('/delete', { id })
    }
}

export default new RoleApi