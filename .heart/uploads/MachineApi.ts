import { MachineListResponse } from './../interface/Machine';
import Base from "./Base";

/**
 * 挖掘机、装载机管理
 */
class MachineApi extends Base {
    protected Controller = 'mach'

    /**
     * 列表
     * @param param 
     */
    list(param: {
        pageNo: number,
        pageSize: number,
        id?: number,
        startDate?: string,
        endDate?: string,
        uids?: number[] | string,
        jxxh?: string[] | string,
        jxbh?: string[] | string,
        ccontent?: string[] | string,
        num?: string,
        shifts?: string,
        ctype?: '挖掘机' | '装载机'
    }): Promise<MachineListResponse> {
        if (param.uids && param.uids instanceof Array) param.uids = param.uids.join(',')
        if (param.jxxh && param.jxxh instanceof Array) param.jxxh = param.jxxh.join(',')
        if (param.jxbh && param.jxbh instanceof Array) param.jxbh = param.jxbh.join(',')
        if (param.ccontent && param.ccontent instanceof Array) param.ccontent = param.ccontent.join(',')
        return super.get('/list', param)
    }

    /**
     * 添加
     * @param param 
     */
    private insert(param: {
        startDate: string,
        endDate: string,
        jxsjqs: string,
        jxsjzs: string,
        jxxh: string,
        jxbh: string,
        ccontent: string,
        ctype: string,
        shifts?: string,
        oil?: string,
        oilDate?: string,
        oilNum?: number,
        remark?: string
    }, url: string) {
        // if (param.startDate.trim() == '') return super.error('请选择上岗时间')
        // if (param.endDate.trim() == '') return super.error('请选择下岗时间')
        // if (param.jxsjqs.trim() == '') return super.error('请输入机械时间起数')
        // if (param.jxsjzs.trim() == '') return super.error('请输入机械时间止数')
        // if (param.jxxh.trim() == '') return super.error('请选择机械型号')
        // if (param.jxbh.trim() == '') return super.error('请选择机械编号')
        // if (param.ccontent.trim() == '') return super.error('请输入工作内容')
        // if (param.ctype.trim() == '') return super.error('请选择机械类型')
        // if (Number(param.jxsjzs) - Number(param.jxsjqs) > 24) {
        //     return super.error('止数与起数的差必须小于24')
        // }
        return super.post(url, param)
    }

    insertWj(param: any) {
        return this.insert(param, '/insertWj')
    }

    insertZz(paran: any) {
        return this.insert(paran, '/insertZz')
    }

    /**
     * 修改
     * @param param 
     */
    update(param: {
        id: number,
        startDate?: string,
        endDate?: string,
        jxsjqs?: string,
        jxsjzs?: string,
        jxxh?: string,
        jxbh?: string,
        ccontent?: 1 | 2 | 3 | 4,
        ctype?: '挖掘机' | '装载机',
        shifts?: string,
        oil?: string,
        oilDate?: string,
        oilNum?: number,
        remark?: string
    }) {
        return super.post('/update', param)
    }

    /**
     * 维修单填写
     * @param param 
     */
    repair(param: { id: number, repairHour: number | string, repairPrice: number | string, repairDesc: string, repairDate: string }) {
        // if (param.id < 0) return super.error('请传入正确ID')
        // if (!param.repairHour || param.repairHour < 0) return super.error('请输入正确的报修时长')
        // if (!param.repairPrice || param.repairPrice < 0) return super.error('请输入正确的维修费用')
        // if (param.repairDesc.trim() == '') return super.error('请输入维修项目')
        // if (param.repairDate.trim() == '') return super.error('请选择维修时间')
        return super.post('/repair', param)
    }

    /**
     * 班组长校核
     * @param param 
     */
    bzCheck(param: { id: number, result: string }) {
        if (param.id == 0) return super.error('请传入正确ID')
        if (param.result.trim() == '') return super.error('请输入校核结果')
        return super.post('/bzCheck', param, true)
    }

    /**
     * 机械管理员审核
     * @param param 
     */
    adminCheck(param: { id: number, result: string }) {
        if (param.id == 0) return super.error('请传入正确ID')
        if (param.result.trim() == '') return super.error('请输入审核结果')
        return super.post('/adminCheck', param, true)
    }

    /**
     * 校核撤回
     * @param id 
     */
    updateJhCancel(id: number) {
        return super.post('/updateJhCancel', { id })
    }

    /**
     * 审核撤回
     * @param id 
     */
    updateShCancel(id: number) {
        return super.post('/updateShCancel', { id })
    }

    /**
     * 删除
     * @param id 
     */
    delete(id: number) {
        return super.post('/delete', { id })
    }
}

export default new MachineApi