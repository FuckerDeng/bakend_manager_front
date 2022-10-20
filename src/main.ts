import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'

import  "./assets/css/tailwind_output.css"
import piniaPluginPersistedstate  from "pinia-plugin-persistedstate"


//pinia持久化
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)


const app  =  createApp(App)
app.use(pinia)
app.use(router)


app.mount('#app')
