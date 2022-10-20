
interface ResponseErrorHandlers{
    [key:number]:(error: any,data:any)=>void
}
//返回状态码定义
enum ErrorCode  {
    RequestError=400,//'错误请求'
    NoAuth=401,//'未授权，请重新登录'
    Forbidon=403,//'拒绝访问'
    NotFound=404,//'请求资源未找到'
    RequestMethodForbidon=405,//'请求方法未允许'
    Timeout=408,//'请求超时'
    ServerError=502,//'网络出错'
    ServerCantUse=503,//'服务不可用'
    NetworkTimeout=504,//'网络超时'
    VersionError=505,//'http版本不支持该请求'
    ConnectError=505,//`连接错误${error.response.status}`
}

const errorHandlers:ResponseErrorHandlers= {}

errorHandlers[ErrorCode.NotFound] = (error,data)=>{
    data.msg = `连接错误${error.response.status}`
}


export default errorHandlers