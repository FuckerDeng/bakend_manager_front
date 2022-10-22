<script setup lang='ts'>
import { ref, reactive } from 'vue'
import { MenuAndRoute } from '@/types/commonTypes'
const { menus } = defineProps<{
    menus: MenuAndRoute[]
}>()
</script>
<template>
    <template v-for="menu in menus" :key="menu.path">
        <el-sub-menu :index="menu.path" v-if="menu.children && menu.children.length>0">
            <template #title>
                <el-icon>
                    <component :is="menu.meta.icon" />
                </el-icon>
                <span>{{menu.meta.title}}</span>
            </template>
            <SubMenu :menus="menu.children"></SubMenu>
        </el-sub-menu>
        <el-menu-item :index="menu.path" v-else>
            <el-icon>
                <component :is="menu.meta.icon" />
            </el-icon>
            <span>{{menu.meta.title}}</span>
        </el-menu-item>
    </template>

</template>
<style scoped lang='scss'>

</style>