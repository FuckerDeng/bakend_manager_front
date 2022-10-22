<script setup lang='ts'>
import { ref, reactive, watch } from 'vue'
import SubMenu from './SubMenu.vue';
import useMenus from "@/store/sidemenu"
import {useRoute} from "vue-router"

const menuStore = useMenus()
const route = useRoute()

watch(()=>route.fullPath,()=>{
    menuStore.defaultActive = route.fullPath
})

</script>
<template>
    <div class="logo h-14 w-full flex px-2 h-full ">
        <img class="logoImg" src="@/assets/vue.svg" alt="">
        <span class="flex-1 h-full text-2xl font-extrabold flex justify-center items-center">后台管理系统</span>
    </div>
    <el-scrollbar height="h-full">
        <el-menu :default-active="menuStore.defaultActive"  router>
            <SubMenu :menus="menuStore.menus"></SubMenu>
        </el-menu>
    </el-scrollbar>

</template>
<style scoped >
.el-menu {
    border-right: none;
}
</style>