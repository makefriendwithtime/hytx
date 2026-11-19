import { AppRouter } from './../enum/AppRouter';
import Utils from '@/utils'

export default class Base {
	// 请求域名
	protected Domain : string = import.meta.env.VITE_API_URL

	// 请求控制器
	protected Controller : string = ''

	// 成功状态码
	protected SuccessCode : number[] = [1, 103]

	private request(url : string, data ?: any, returnAll : boolean = false, method : 'GET' | 'POST' = 'GET', formData : boolean = false) : Promise<any> {
		return new Promise((resolve, reject) => {
			url.startsWith('/') ? url : '/' + url
			let jsessionid = uni.getStorageSync('SessionId')
			let reqUrl = jsessionid ? this.Domain + this.Controller + url + `?jsessionid=${jsessionid}` : this.Domain + this.Controller + url
			//console.log("reqUrl：" + reqUrl)
			//console.log("param：" + JSON.stringify(data))
			uni.request({
				method,
				url: reqUrl,
				data,
				header: formData ? { 'Content-Type': 'application/x-www-form-urlencoded' } : { 'Content-Type': 'application/json' },
				success: (res : any) => {
					// console.log(JSON.stringify(res));
					if (Number(res.data.result) === 700) {
						Utils.clearStorage()
						uni.showToast({
							title: '登录超时,请重新登录!',
							icon: 'none',
							duration: 1000
						})
						setTimeout(() => {
							uni.reLaunch({
								url: AppRouter.Login
							})
						}, 1000);
						return
					}
					if (Number(res.data.result) !== 1) {
						if (url === "/list") resolve(res.data)
						else {
							uni.showToast({
								title: res.data.msg,
								icon: 'none',
								duration: 1000
							})
							reject(res.data.msg);
							return
						}
					}
					if (returnAll) {
						resolve(res.data)
					} else {
						const response : any = res.data
						if (this.SuccessCode.includes(Number(response.result))) resolve(response.data)
						else reject(response.msg || '未知错误')
					}
				},
				fail: (e) => {
					reject('网络异常,请稍后重试')
				}
			})
		})
	}

	protected uploadFile(url : string, data ?: any, file ?: any) : Promise<any> {
		return new Promise((resolve, reject) => {
			url.startsWith('/') ? url : '/' + url
			let jsessionid = uni.getStorageSync('SessionId')
			let reqUrl = jsessionid ? this.Domain + this.Controller + url + `?jsessionid=${jsessionid}` : this.Domain + this.Controller + url
			uni.uploadFile({
				url: reqUrl,
				filePath: file.path,   // 本地路径
				name: 'file',          // 注意：这个要跟后端参数名对应
				formData: data,
				success: (res) => {
					resolve(JSON.parse(res.data));
				},
				fail: (err) => {
					reject('上传失败');
				}
			});
		})
	}

	protected error(msg : string) : Promise<never> {
		return Promise.reject(msg)
	}

	/**
	 * 
	 * @param url 请求方法
	 * @param data 请求参数
	 */
	protected get(url : string, data ?: any, returnAll : boolean = false) : Promise<any> {
		return this.request(url, data, returnAll)
	}

	/**
	 * 
	 * @param url 请求方法
	 * @param data 请求参数
	 * @param formData 是否FormData请求
	 */
	protected post(url : string, data ?: any, returnAll : boolean = false, formData : boolean = true) : Promise<any> {
		return this.request(url, data, returnAll, 'POST', formData)
	}
}