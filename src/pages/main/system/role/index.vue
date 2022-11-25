<script setup lang='ts'>
import { ref, reactive, onMounted } from 'vue'

let isPlay = ref(false)
let isPause = ref(false)
let canvas = ref<HTMLCanvasElement>()
let ctx: CanvasRenderingContext2D | null;
let video: HTMLVideoElement;
let testVideo = ref<HTMLVideoElement>();
let updateFuncId = 0;
let videoSize: {
    width: number,
    height: number
}
let gap = 12
var asciiList = ['幂', '杨', '爱', '我', '　'];

const dynamicGetImg = (name: string) => {
    try {
        return new URL(`../../../../assets/images/${name}`, import.meta.url).href
    } catch (error) {
        console.log(error)
    }
}

</script>
<template>
    <div>

    </div>
</template>
<style scoped lang='scss'>

</style>