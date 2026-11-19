import Base from "./Base";

/**
 * 附件管理
 */
class AttachApi extends Base {
    protected Controller = 'attach'
	
	/**
	 * 查询附件
	 * @param param 
	 */
	queryByEntity(param: { transportId: number, uptype?: string }){
	    return super.get('/queryByEntity', param)
	}

    /**
     * 上传附件
     * @param param 
     * @param file 
     */
    upload(param:{ transportId: number, uptype: string }, file?:any){
        return super.uploadFile('/upload', param, file)
    }

    /**
     * 删除附件
     * @param param 
     */
    delete(param: { id: number }) {
        return super.post('/delete', param)
    }
	
	/**
	 * 解析附件
	 * @param param 
	 */
	ocrTicket(param: { id: number }) {
	    return super.post('/ocrTicket', param)
	}
	
	/**
	 * 解析附件
	 * @param param 
	 */
	ocrTicketFile(param: { uptype: string }, file?:any) {
	    return super.uploadFile('/ocrTicketFile', param, file)
	}
	
}

export default new AttachApi