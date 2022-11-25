import { createRouter, createWebHistory, NavigationGuardWithThis, RouteRecordRaw } from "vue-router"
import useUser from "@/store/user"
import useMenus from "@/store/sidemenu"
import { MenuAndRoute } from "@/types/commonTypes"
const allComponents = import.meta.glob("@/pages/main/**/*.vue")

const routes: RouteRecordRaw[] = [
    {
        path: "/error",
        component: () => import("@/pages/error/index.vue")
    },
    {
        path: "/login",
        component: () => import("@/pages/login/index.vue")
    },

    {
        path: "/",
        name: "main",
        component: () => import("@/pages/main/index.vue"),
        redirect: "dashboard",
        children: [
            {
                path: "/dashboard",
                component: () => import("@/pages/main/dashboard/index.vue")
            },
        ]
    },
]

//路由白名单
const whiteList: string[] = [
    "/login"
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

//路由是否已经初始化过了
let init = 0

let addRoute = (item: MenuAndRoute) => {
    if (!item.component) {//无组件
        //无子路由
        if (!item.children) return
        if (item.children.length == 0) return
        //进入子路由
        for (let i = 0; i < item.children.length; i++) {
            addRoute(item.children[i])
        }
        return
    }
    let newRoute: RouteRecordRaw = {} as RouteRecordRaw
    if (typeof item.component === "string") {
        console.log(item.component);
        let location = item.component
        if (location.startsWith("/")) {
            location = location.substring(1, item.component.length)
        }
        newRoute.component = allComponents[`/src/pages/main/${location}`]
    } else {
        newRoute.component = item.component

    }
    newRoute.path = item.path.startsWith("/") ? item.path : "/" + item.path
    let { meta } = item
    newRoute.meta = meta
    router.addRoute("main", newRoute)

}
let reSetRoutes = (data: MenuAndRoute[]) => {
    let routes = router.getRoutes()
    console.log("routes:", routes);
    for (let i = 0; i < data.length; i++) {
        addRoute(data[i])
    }
    console.log("routes2:", routes);
}

router.beforeEach((to, from, next) => {
    //只能在此声明，不能提到外面，提到 外面声明会报错，因为加载此脚本时，pinia还未初始化好，要等router,pinia
    //插件全部use后才能正常获取
    const userStore = useUser()
    if (whiteList.includes(to.path)) {
        next()
        return
    }
    //检查是否已登录
    if (!userStore.token) {
        next({ path: "/login" })
        return
    }
    let addDynamicRoute = false;
    if (init == 0) {//每次都检查路由是否动态添加过，刷新后init会变成0，则会重新动态添加
        let menuStore = useMenus()
        let menus = menuStore.menus
        for (let i = 0; i < menus.length; i++) {
            addRoute(menus[i])
        }
        addDynamicRoute = true
        init = 1
    }
    if (addDynamicRoute) {
        let nowRoutes = router.getRoutes()
        let findRoute = nowRoutes.filter((route) => route.path === to.fullPath)
        if (findRoute) {
            next({...to,replace:true})
            return
        }
        next("/error")
        return
    }
    let matched = to.matched
    if (matched && matched.length > 0) {
        next()
        return
    }
    next("/error")
})

export default router