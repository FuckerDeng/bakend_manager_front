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



</script>
<template>
    <div>

    </div>
</template>
<style scoped lang='scss'>

</style>