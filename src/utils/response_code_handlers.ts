import useUser from "@/store/user"
import {AxiosResponse} from "axios"

const userStore = useUser()

interface ResponseCodeHandlers{
    [key:number]:(res: AxiosResponse)=>void
}
//返回状态码定义
enum ResponseCode  {
    Success=200,
    NoAuth=600
}

const codeHandlers:ResponseCodeHandlers= {}

//未认证
codeHandlers[ResponseCode.NoAuth] = (res)=>{
        //清空sessionStorage数据
        userStore.token = ""
        //跳到登录
        window.location.href = "/login";
    return res
}

//成功
codeHandlers[ResponseCode.Success] = (res)=>{
    return res;
}



export default codeHandlers

