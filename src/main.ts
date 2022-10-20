import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import  "./assets/css/tailwind_output.css"
import piniaPluginPersistedstate  from "pinia-plugin-persistedstate"

//pinia持久化
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)


const app  =  createApp(App)
app.use(router)
app.use(pinia)

app.mount('#app')
