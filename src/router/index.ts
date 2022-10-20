import {createRouter,createWebHistory,NavigationGuardWithThis,RouteRecordRaw} from "vue-router"
import useUser from "@/store/user"


const  routes:RouteRecordRaw[] = [

    {
        path:"/login",
        component:()=>import("@/pages/login/index.vue")
    },
    {
        path:"/",
        component:()=>import("@/pages/main/index.vue"),
        redirect:"dashboard",
        children:[
            {
                path:"dashboard",
                component:()=>import("@/pages/main/dashboard/index.vue")
            },
            {
                path:"user",
                component:()=>import("@/pages/main/user/index.vue")
            },
            {
                path:"role",
                component:()=>import("@/pages/main/role/index.vue")
            },
        ]
    },
]

//路由白名单
const whiteList:string[] = [
    "/login"
]

const  router = createRouter({
    history:createWebHistory(),
    routes
})


router.beforeEach((to,from,next)=>{
    //只能在此声明，不能提到外面，提到 外面声明会报错，因为加载此脚本时，pinia还未初始化好，要等router,pinia
    //插件全部use后才能正常获取
    const userStore =useUser()
    if(whiteList.includes(to.path)){
        next()
        return
    }
    //检查是否已登录
    if(userStore.token){
        next()
        return
    }
    next({path:"/login"})
})

export  default  router