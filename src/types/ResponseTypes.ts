import { MenuAndRoute } from "./commonTypes";


export interface ILoginResult  {
    username:string,
    avatar:string,
    token:string,
    permissions:MenuAndRoute[]
}

