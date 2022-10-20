import {createRouter,createWebHistory,RouteRecordRaw} from "vue-router"


const  routes:RouteRecordRaw[] = [
    {
        path:"/",
        redirect:"/login"
    },
    {
        path:"/login",
        component:()=>import("@/pages/login/index.vue")
    }
]

const  router = createRouter({
    history:createWebHistory(),
    routes
})

export  default  router