import { MenuAndRoute } from "./commonTypes";


export interface ILoginResult  {
    username:string,
    avatar:string,
    token:string,
    permissions:MenuAndRoute[]
}

export interface IpageResult<T>{
    current:number,
    pages:number,
    records:T[],
    size:number,
    total:number
}

export interface IUser{
    uid:number;
    accountName:string;
    userName:string;
    password:string;
    pwdSalt:string;
    lastLoginIp:string;
    lastLoginTime:string;
    status:number;
    delete:number;
    orgId:number;
    posId:number;
}
