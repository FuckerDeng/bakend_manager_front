import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios"
import { R } from "@/types/RequestTypes"
import qs from "qs"
import useUser from "@/store/user"
import codeHandlers from "./response_code_handlers"
import errorHandlers from "./response_error_handlers"


const userStore = useUser()

class Request {
    private static _instance: Request | null = null;
    private _axios: AxiosInstance | null;
    private constructor() {
        this._axios = axios.create({
            baseURL: import.meta.env.VITE_API_BASE_URL,
            timeout: import.meta.env.VITE_TIMEOUT
        })
        this.interceptors();
    }

    //axios拦截器
    private interceptors() {
        //请求发送之前拦截
        this._axios?.interceptors.request.use((config: AxiosRequestConfig) => {
            let token = userStore.token || '';
            // console.log("获取到token："+token);
            
            if (token) {
                //把token添加到请求头部
                config.headers = {
                    ...config.headers,
                    token: token
                };
            }
            //这里可以设置头部token携带到后端进行token的验证
            return config
        }, (error) => {
            // 错误抛到业务代码
            error.data = {}
            error.data.msg = '服务器异常，请联系管理员！'
            return error
        })

        /**
         * 请求返回之后拦截
         * res的类型是AxiosResponse<any>
         */
        this._axios?.interceptors.response.use((res: AxiosResponse) => {
            if (res && res.data) {
                this.handleResponseCode(res);
            }
            return res;
        }, (error) => { // 这里是遇到报错的回调
            error.data = {};
            this.handleError(error);
            // return Promise.reject(error)
            console.log("请求异常：",error.data)
            return error
        })
    }
    /**
     * 服务器返回异常，处理错误
     * @param error 
     */
    handleError(error: any) {
        if (!error || !error.response) {
            error.data.msg = "连接到服务器失败";
            return
        }
        if (errorHandlers[error.response.status]) {
            errorHandlers[error.response.status](error, error.data)
            return
        }
        error.data.msg = `连接错误${error.response.status}`
    }

    /**
     * 对服务器返回数据的状态码进行检查
     * @param res 
     * @returns 
     */
    handleResponseCode(res: AxiosResponse) {
        if (res.config.responseType === "arraybuffer") return
        if (codeHandlers[res.data.code]) {
            codeHandlers[res.data.code](res)
        }
        console.log('服务器返回未定义的响应码：' + res.data.code)
    }


    public static instance(): Request {
        if (Request._instance) {
            return Request._instance;
        }

        Request._instance = new Request();
        return Request._instance;
    }

    /**
     * 普通Get请求
     * @param url 
     * @param params 
     * @returns 
     */
    public get<T = any>(url: string, params?: any): Promise<R<T>> {
        return new Promise((resolve, reject) => {
            this._axios?.get<R<T>>(url, {
                params: params,
                paramsSerializer: {
                    encode: (params: any) => {
                        return qs.stringify(params, { arrayFormat: 'brackets' })
                    }
                },
            }).then((res) => {
                resolve(res.data)
            }).catch((error) => {
                reject(error)
            })
        })
    }

    /**
     * rest方式Get
     * @param url 
     * @param params 
     * @returns 
     */
    getRest<T = any>(url: string, params?: any): Promise<R<T>> {
        return new Promise((resolve, reject) => {
            let realParam = this.getRestParms(params);
            // if (url.endsWith("/")) {
            //     url = url.substring(0, url.length - 1);
            // }
            let realUrl = realParam ? `${url}/${realParam}` : url
            this._axios?.get<R<T>>(realUrl)
                .then((res) => {
                    resolve(res.data)
                }).catch((error) => {
                    reject(error)
                })
        })
    }

    /**
     * 将对象参数转换成 restApi的路径参数 eg:{a:1,b:2} => 1/2
     * @param params 
     * @returns 
     */
    getRestParms(params: any): string {
        let _params = "";
        if (Object.is(params, undefined || null)) {
            _params = ''
        } else {
            for (const key in params) {
                if (params.hasOwnProperty(key) && params[key]) {
                    _params += `${params[key]}/`
                }
            }
        }
        //去掉参数最后一位/
        if (_params) _params = _params.substring(0, _params.length - 1);
        return _params;
    }

    /**
     * 
     * @param url Content-Type 为json格式的post
     * @param params 
     * @returns 
     */
    post<T = any>(url: string, params: any): Promise<R<T>> {
        return new Promise((resolve, reject) => {
            this._axios?.post<R<T>>(url, params, {
                transformRequest: [(p) => {
                    return JSON.stringify(p)
                }],
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((res) => {
                resolve(res.data)
            }).catch((error) => {
                reject(error)
            })
        })
    }
    /**
     * Content-Type 为x-www-form-urlencoded格式的post
     * @param url 
     * @param params 
     * @returns 
     */
    formPost<T = any>(url: string, params: any): Promise<R<T>> {
        return new Promise((resolve, reject) => {
            this._axios?.post<R<T>>(url, params, {
                transformRequest: [(p) => {
                    return qs.stringify(p)
                }],
                headers: {
                    'Content-Type': 'application/x-www-from-urlencoded'
                }
            }).then((res) => {
                resolve(res.data)
            }).catch((error) => {
                reject(error)
            })
        })
    }
    /**
     * 请求二进制图片（后端以流的形式写入的数据）
     * @param url 
     * @returns 
     */
    getImage(url: string) {
        return this._axios?.get(url, {
            responseType: 'arraybuffer'
        }).then(res => {
            //后端返还的是二进制，因此要将二进制转成base64
            return 'data:image/png;base64,' + btoa(
                new Uint8Array(res.data as any).reduce((data, byte) => data + String.fromCharCode(byte), "")
            )
        })
    }
}
export default Request.instance()


//Content-Type之x-www-form-urlencoded和json 说明
/*
Content-Type http的实体首部字段，实体主体的媒体类型。字段值用type/subtype形式赋值。
基本格式为： Content-Type: text/html;charset=UTF-8

ajax的这两种编码

数据格式	                                    说明
application/x-www-form-urlencoded	浏览器的原生 form 表单，一般用于表单提交。接口工具调用接口，一般默认情况下也是这种格式的。
application/json	                接口实体需要是json格式


application/x-www-from-urlencoded:这是默认的编码格式,它是以传输键值对的形式传参的
例如:name=张三&age=18


最后分析一下两边代码的差异

x-www-form-urlencoded格式代码不需要写contentType,而json格式代码需要加上contentType: ‘application/json;charset=UTF-8’
x-www-form-urlencoded格式传输后端不需要添加@RequestBody注解,而json格式需要
x-www-form-urlencoded格式传输的时候data里的数据不要用''包裹,否则会得到null,而json使用data去传输的时候恰恰相反,需要使用''包裹

后端接收数据注意【针对springboot】：
     * 如果前端采用x-www-form-urlencoded格式数据，则需要用 @RequestBody + 字符串 来接受数据，然后手动解析
     * 如果采用json格式，则可以采用 @RequestBody + 自定义对象 来接受数据
     * 如果是url后拼查询参数的，可以用@RequestParam +自定义对象
     * 如果是restfulApi 的url中带参数，则使用@PathVariable +基本数据类型
*/