import Base from "./Base";
import { LoginResponse, UserListResponse } from '@/interface/User';

/**
 * 用户管理
 */
class UserApi extends Base {
    protected Controller = 'user'

    /**
     * 用户登录
     * @param param 
     */
    login(param: { logName: string, logPsw: string, rememberMe?: boolean }): Promise<LoginResponse> {
        if ('' === param.logName.trim()) return super.error('请输入账号')
        if ('' === param.logPsw.trim()) return super.error('请输入密码')
        return super.post('/login', param)
    }

    /**
     * 获取用户列表页
     * @param param 
     */
    list(param: { pageNo: number, pageSize: number, keyword?: string, sex?: number, isStart?: 1 | 0, isVerify?: 1 | 0, roleId?: number }): Promise<UserListResponse> {
        if (param.pageNo <= 0 || param.pageSize <= 0) return super.error('传入正确页码或数量')
        return super.get('/list', param)
    }

    /**
     * 根据主键查询信息
     * @param id 
     */
    queryById(id: number) {
        return super.get('/queryById', { id })
    }

    /**
     * 根据角色主键查询用户信息
     * @param roleId 
     */
    queryUserByRoleId(roleId: number) {
        return super.get('/queryUserByRoleId', { roleId })
    }

    /**
     * 创建用户
     * @param param 
     */
    insert(param: { logName: string, logPsw: string, userName: string, isStart?: 1 | 0, }) {
        if ('' === param.logName.trim()) return super.error('请输入账号')
        if ('' === param.logPsw.trim()) return super.error('请输入密码')
        if ('' === param.userName.trim()) return super.error('请输入用户名称')
        return super.post('/insert', param)
    }
	
	/**
	 * 注册用户
	 * @param param 
	 */
	userReg(param: { logName: string, userName: string, logPsw: string, confirmPsw: string, isStart?: 1 | 0, }) {
	    if ('' === param.logName.trim()) return super.error('请输入手机号')
	    if ('' === param.userName.trim()) return super.error('请输入用户名称')
	    if ('' === param.logPsw.trim()) return super.error('请输入密码')
	    if ('' === param.confirmPsw.trim()) return super.error('请输入确认密码')
	    if (param.logPsw.trim() !== param.confirmPsw.trim()) return super.error('密码不一致')
	    return super.post('/userReg', param)
	}

	/**
     * 注册用户审核
     * @param param 
     */
    userVerify(param: { uid: number, roleId: number }) {
		if (!param.uid || param.uid < 0) return super.error('请传入正确的用户ID')
		if (!param.roleId || param.roleId < 0) return super.error('请传入正确的角色ID')
        return super.post('/userVerify', param)
    }
	
    /**
     * 修改密码
     * @param param 
     */
    updatePsw(param: { oldPsw: string, newPsw: string }) {
        if ('' === param.oldPsw.trim()) return super.error('请输入旧密码')
        if ('' === param.newPsw.trim()) return super.error('请输入新密码')
        return super.post('/updatePsw', param)
    }

    /**
     * 修改用户信息
     * @param param 
     */
    update(param: { id: number, userName?: string, isStart?: 1 | 0 }) {
        if (!param.id || param.id < 0) return super.error('请传入正确ID')
        if (param.userName && param.userName.trim() == '') return super.error('请输入用户名称')
        return super.post('/update', param)
    }

    /**
     * 删除用户
     * @param id 
     */
    delete(id: number) {
        return super.post('/delete', { id })
    }

    /**
     * 批量删除用户
     * @param ids 
     */
    deleteBatch(ids: number[]) {
        if (ids.length === 0) return super.error('请选择需要删除的用户')
        return super.post('/deleteBatch', { ids: ids.join(',') })
    }
	
	/**
	 * 更新版本
	 * @param version 
	 */
	updateVersion(version: string) {
	    return super.post('/updateVersion', { version })
	}
	
	/**
	 * 检查版本
	 */
	checkUpdate() {
	    return super.post('/checkUpdate',{})
	}
	
	/**
	 * 绑定app消息推送设备ID
	 * @param clientId 
	 */
	updateClientId(clientId: string) {
	    return super.post('/updateClientId', { clientId })
	}
	
	/**
	 * 解绑app消息推送设备ID
	 */
	removeClientId(uid: number) {
	    return super.post('/removeClientId',{ uid })
	}
	
	/**
	 * 绑定app设备ID
	 * @param deviceId 
	 */
	updateDeviceId(deviceId: string) {
	    return super.post('/updateDeviceId', { deviceId })
	}
	
	/**
	 * 解绑app设备ID
	 */
	removeDeviceId(uid: number) {
	    return super.post('/removeDeviceId',{ uid })
	}

    /**
     * 用户登出
     */
    logout() {
        return super.get('/logout')
    }
}

export default new UserApi