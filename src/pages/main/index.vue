<script setup lang='ts'>
import { ref, reactive, onMounted, onUnmounted } from 'vue'
import SideMenu from '@/components/SideMenu.vue';
import Head from '@/components/Head.vue';
import Tabs from '@/components/Tabs.vue';




</script>
<template>
  <div class="fixed main flex h-full inset-0 ">
    <div ref="side" class="w-56 border-r-2 h-full">
      <SideMenu></SideMenu>
    </div>

    <div class="right flex-1 w-full">

      <Head></Head>
      <Tabs></Tabs>
      <el-scrollbar class="content mx-3 mt-3  h-full overflow-y-auto">
        <RouterView></RouterView>
        <div class="bt"></div>
      </el-scrollbar>
    </div>
  </div>


</template>
<style >
.main {
  height: 100vh;
}

.logo {
  height: 43px;
  line-height: 43px !important;
}

.logoImg {
  width: 43px;
  height: 43px;
}
.bt{
  height: 1px;
  width: 100%;
}

.content {}
</style>