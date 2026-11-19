import Base from "./Base";

class StatisticsApi extends Base {
    protected Controller = 'statistics'

    /**
     * 统计每日新增与总数
     */
    statisticsDay(param: any = {}) {
        return super.get('/statisticsDay', param)
    }

    /**
     * 统计机械数量信息
     * @param param 
     */
    statisticsMachine(param: any = {}) {
        return super.get('/statisticsMachine', param)
    }

    /**
     * 统计外运车辆数量信息
     * @param param 
     */
    statisticsTransport(param: any = {}) {
        return super.get('/statisticsTransport', param)
    }
	
	/**
	 * 外运车辆明细输出
	 * @param param 
	 */
	detailsTransport(param: any = {}) {
	    return super.get('/detailsTransport', param)
	}

    /**
     * 统计各维修类型费用信息
     * @param param 
     */
    statisticsRepair(param: any = {}) {
        return super.get('/statisticsRepair', param)
    }
	
	/**
	 * 维修明细输出
	 * @param param
	 */
	detailsRepair(param: any = {}) {
	    return super.get('/detailsRepair', param)
	}

    /**
     * 统计装载机数量信息
     * @param param 
     */
    statisticsZz(param: any = {}) {
        return super.get('/statisticsZz', param)
    }

    /**
     * 统计挖掘机数量信息
     * @param param 
     */
    statisticsWj(param: any = {}) {
        return super.get('/statisticsWj', param)
    }
}

export default new StatisticsApi