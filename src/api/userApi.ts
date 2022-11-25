import request from "@/utils/request";
import { IpageResult, IUser } from "@/types/ResponseTypes";

const apiUrls = {
    page:"user/page"
}

export const  page = async (params:any,data:any)=>{
    return await request.postRest<IpageResult<IUser>>(apiUrls.page,params,data)
}