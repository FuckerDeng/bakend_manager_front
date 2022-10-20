import request from "@/utils/request";
import { ILoginResult } from "@/types/ResponseTypes";

const apiUrls = {
    login:"/login"
}

export const  login = async (data:any)=>{
    return await request.post<ILoginResult>(apiUrls.login,data)
}