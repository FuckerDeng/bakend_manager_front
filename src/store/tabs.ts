import { defineStore } from 'pinia'



const useTabs = defineStore('tabs', {
    state: () => {
        return {
            // 所有这些属性都将自动推断其类型
            activeTab:"/dashboard",
            tabs:[{
                name:"/dashboard",
                title:"首页"
            }]
        }
    },
    actions: {

    },
    getters: {

    },
    persist:true
})

export default useTabs