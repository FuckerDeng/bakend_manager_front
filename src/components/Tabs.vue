<script setup lang='ts'>
import { TabPaneName, TabsPaneContext } from 'element-plus';
import { ref, reactive, watch } from 'vue'
import useTabs from "@/store/tabs"
import { storeToRefs } from 'pinia';
import {useRouter,useRoute} from "vue-router"

const tabsStore = useTabs()

const{activeTab,tabs}  = storeToRefs(tabsStore)
const router = useRouter()
const route  = useRoute()


const setActiveTab = (name?:string)=>{
    if(name){
        activeTab.value = name
        return
    }
    activeTab.value = route.fullPath
}

const addNewTabData = ()=>{
    let {path} = route
    let {title} = route.meta 
    let result =  tabs.value.find((item)=>item.name===path)
    if(result) return
    tabs.value.push({
        name:path,
        title:title as string
    })
}

watch(()=>route.fullPath,(val,oldVal)=>{
    // console.log(val,oldVal);
    setActiveTab();
    addNewTabData();
})

const  tabRemove  = (name: TabPaneName)=>{

    let found = tabs.value.find((item)=>item.name===name)
    if(!found)  return
    console.log("remove item:",found);
    if(found.name==="/dashboard"){
        ElMessage.warning("首页标签不能删除！")
        return
    }
    let index = tabs.value.indexOf(found)
    if(found.name!==activeTab.value){//删除的不是激活的标签
        tabs.value.splice(index, 1)
        return
    }
    //删除的是激活的标签，如果后面还有标签，就激活后面的，后面没有了就激活前面的
    let newActiveTab= tabs.value[index+1]?tabs.value[index+1]:tabs.value[index-1]
    tabs.value.splice(index, 1)
    setActiveTab(newActiveTab.name)
    router.push(newActiveTab.name)
}

const tabClick = (pane: TabsPaneContext)=>{
    if(route.fullPath!==pane.paneName){
        router.push(pane.paneName as string)
    }

}


</script>
<template>
    <el-tabs v-model="activeTab" @tab-remove="tabRemove" @tab-click="tabClick" type="card" closable  class="mx-3 mt-3">
        <el-tab-pane v-for="item in tabs" :key="item.name" :label="item.title" :name="item.name">
        </el-tab-pane>
    </el-tabs>
</template>
<style scoped>

:deep(.el-tabs__header){
    margin-bottom: 0;
    height: 30px;
}
:deep(.el-tabs__item){
    height: 30px;
    line-height: 30px!important;
    pad: 0 5px;
}
</style>