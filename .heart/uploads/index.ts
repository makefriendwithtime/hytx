import moment from 'moment'

export default class Utils {
    /**
     * 时间格式化
     * @param time 
     * @param format 
     */
    static dateFormat(time: string | number, format = 'YYYY-MM-DD HH:mm:ss') {
		if(time === null || time === undefined || time === "") return ""
        return moment(time).format(format)
    }
    /**
     * 清除缓存
     */
    static clearStorage() {
        uni.removeStorageSync('UserInfo')
        uni.removeStorageSync('SessionId')
        uni.removeStorageSync('FunMenu')
        uni.removeStorageSync('RememberMe')
    }
}