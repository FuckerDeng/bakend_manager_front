import { defineStore } from 'pinia'
import { MenuAndRoute } from '@/types/commonTypes'



const useMenus = defineStore('sidemenu', {
    state: () => {
        return {
            defaultActive:"/dashboard",
            dashboard:{
                path:"/dashboard",
                "meta": {
                    "title": "首页",
                    "icon": "HomeFilled"
                },
                component:()=>import("@/pages/main/dashboard/index.vue")
            },
            // 所有这些属性都将自动推断其类型
            menus:[] as MenuAndRoute[]
        }
    },
    actions: {

    },
    getters: {
        
    },
    persist:true
})

export default useMenus