import { defineStore } from 'pinia'

// useStore 可以是 useUser、useCart 之类的任何东西
// 第一个参数是应用程序中 store 的唯一 id
const useUser = defineStore('user', {
    state: () => {
        return {
            // 所有这些属性都将自动推断其类型
            token:""
        }
    },
    actions: {

    },
    getters: {

    },
    persist:true
})

export default useUser