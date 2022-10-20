<script setup lang='ts'>
import { ref, reactive, onMounted } from 'vue'
import useUser from "@/store/user"
import {login} from "@/api/loginApi"

const userStore = useUser()

onMounted(()=>{
    userStore.token = "123"
})
let lgoinTest = ()=>{
    console.log("api测试");

    login({})
}
</script>
<template>
    登录组件{{userStore.token}} <hr>
    <button @click.prevent="lgoinTest" >api测试</button>
</template>
<style scoped lang='scss'>

</style>