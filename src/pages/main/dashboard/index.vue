<script setup lang='ts'>
import { ref, reactive } from 'vue'
import { Search } from '@element-plus/icons-vue'
let activeName = ref("")
const adviceText = ref('')
</script>
<template>
    <div>
        <div class="flex">
            <div class="flex-1 flex flex-col p-2 gap-y-2">
                <div class="text-2xl">通用后台管理系统介绍</div>
                <p class="text-sm indent-5">
                    坚持费曼学习法，自己的知识要一定讲给别人，作为前后端分离全部开发，需要了解前后端的不同生态和编码方式，为了能尽快掌握，参考了开源的项目，自己从零开始写，直到项目完成。此项目用于web网站的后台管理，可以做自己的扩展。目前只支持PC，移动端和APP都还未适配，当然这是一个目标，后续会继续开发
                </p>
                <p class="font-black">当前版本：v1.0.0</p>
                <div class="flex gap-3">
                    <a href="#" class="">
                        <svg t="1666496382741" class="sourceWeb  w-7 h-7 hover:shadow-md rounded-full"
                            viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1811"
                            width="200" height="200">
                            <path
                                d="M512 1024C229.222 1024 0 794.778 0 512S229.222 0 512 0s512 229.222 512 512-229.222 512-512 512z m259.149-568.883h-290.74a25.293 25.293 0 0 0-25.292 25.293l-0.026 63.206c0 13.952 11.315 25.293 25.267 25.293h177.024c13.978 0 25.293 11.315 25.293 25.267v12.646a75.853 75.853 0 0 1-75.853 75.853h-240.23a25.293 25.293 0 0 1-25.267-25.293V417.203a75.853 75.853 0 0 1 75.827-75.853h353.946a25.293 25.293 0 0 0 25.267-25.292l0.077-63.207a25.293 25.293 0 0 0-25.268-25.293H417.152a189.62 189.62 0 0 0-189.62 189.645V771.15c0 13.977 11.316 25.293 25.294 25.293h372.94a170.65 170.65 0 0 0 170.65-170.65V480.384a25.293 25.293 0 0 0-25.293-25.267z"
                                fill="#C71D23" p-id="1812"></path>
                        </svg>
                    </a>

                    <a href="#" class="sourceWeb">
                        <svg t="1666496627130" class="sourceWeb w-7 h-7 hover:shadow-md rounded-full"
                            viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2734"
                            width="200" height="200">
                            <path
                                d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9 23.5 23.2 38.1 55.4 38.1 91v112.5c0.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"
                                p-id="2735"></path>
                        </svg>
                    </a>
                </div>

            </div>
            <div class="flex-1 flex flex-col p-2 gap-y-2">
                <p class="text-2xl">使用技术</p>
                <div class="flex  gap-5">
                    <div class="flex  flex-col  gap-3 px-5">
                        <p>前端</p>
                        <div>
                            <p>vue3</p>
                            <p>typescript</p>
                            <p>vue-rouoter</p>
                            <p>axios</p>
                            <p>pinia</p>
                            <p>tailwindcss</p>
                            <p>...</p>
                        </div>
                    </div>
                    <div class="flex  flex-col  gap-3 px-5">
                        <p>后端</p>
                        <div>
                            <p>java</p>
                            <p>springboot</p>
                            <p>mybaitsplus</p>
                            <p>mysql</p>
                            <p>...</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
        <el-divider />
        <div class="flex gap-3">
            <div class="flex-1">
                <el-card>
                    <template #header>
                        <div>
                            <span>功能介绍</span>
                        </div>
                    </template>
                    <div class="detail">1.RBAC权限架构：用户，角色，权限，部门，职位</div>
                    <div class="detail">2.表单构建，拖拽表单组件到页面</div>
                    <div class="detail">3.代码生成：根据数据库表自动生成适配该项目的前段页面和后端代码</div>
                    <div class="detail">4.定时任务//TODO</div>
                    <div class="detail">4.druid数据监控//TODO</div>
                    <div class="detail">4.服务监控//TODO</div>
                    <div class="detail">5.日志管理（登录/操作日志）//TODO</div>
                    <div class="detail">6.远程终端链接//TODO</div>
                </el-card>
            </div>
            <div class="flex-1">
                <el-card>
                    <template #header>
                        <div>
                            <span>版本更新</span>
                        </div>
                    </template>
                    <el-collapse v-model="activeName">
                        <el-collapse-item title="v1.0.0 2022-10-23" name="1">
                            <p>1.数据逻辑删除不进行唯一验证</p>
                            <p>2.数据逻辑删除不进行唯一验证</p>
                            <p>3.数据逻辑删除不进行唯一验证</p>
                            <p>4.数据逻辑删除不进行唯一验证</p>
                            <p>5.数据逻辑删除不进行唯一验证</p>
                        </el-collapse-item>
                        <el-collapse-item title="v1.0.0 2022-10-23" name="2">
                            <p>1.数据逻辑删除不进行唯一验证</p>
                            <p>2.数据逻辑删除不进行唯一验证</p>
                            <p>3.数据逻辑删除不进行唯一验证</p>
                            <p>4.数据逻辑删除不进行唯一验证</p>
                            <p>5.数据逻辑删除不进行唯一验证</p>
                        </el-collapse-item>
                        <el-collapse-item title="v1.0.0 2022-10-23" name="3">
                            <p>1.数据逻辑删除不进行唯一验证</p>
                            <p>2.数据逻辑删除不进行唯一验证</p>
                            <p>3.数据逻辑删除不进行唯一验证</p>
                            <p>4.数据逻辑删除不进行唯一验证</p>
                            <p>5.数据逻辑删除不进行唯一验证</p>
                        </el-collapse-item>
                        <el-collapse-item title="v1.0.0 2022-10-23" name="4">
                            <p>1.数据逻辑删除不进行唯一验证</p>
                            <p>2.数据逻辑删除不进行唯一验证</p>
                            <p>3.数据逻辑删除不进行唯一验证</p>
                            <p>4.数据逻辑删除不进行唯一验证</p>
                            <p>5.数据逻辑删除不进行唯一验证</p>
                        </el-collapse-item>
                    </el-collapse>
                </el-card>
            </div>
            <div class="flex-1">
                <el-card>
                    <template #header>
                        <div>
                            <span>我有建议</span>
                        </div>
                    </template>
                    <el-alert title="一个IP每天只能提3条建议" type="info" :closable="false" />
                    <el-input class="mt-3" v-model="adviceText" :maxlength="500" :rows="2"
                        :autosize="{ minRows: 2, maxRows: 10 }" :minlength="5" type="textarea"
                        placeholder="最小5 最大500" />
                    <el-button type="primary" class="w-full mt-3">提交</el-button>
                </el-card>
            </div>
            <div class="flex-1">
                <el-card>
                    <template #header>
                        <div>
                            <span>打赏</span>
                        </div>
                    </template>
                    <div class="detail">1.RBAC权限架构：用户，角色，权限，部门，职位</div>
                    <div class="detail">2.表单构建，拖拽表单组件到页面</div>
                    <div class="detail">3.代码生成：根据数据库表自动生成适配该项目的前段页面和后端代码</div>
                    <div class="detail">4.定时任务//TODO</div>
                    <div class="detail">4.druid数据监控//TODO</div>
                    <div class="detail">4.服务监控//TODO</div>
                    <div class="detail">5.日志管理（登录/操作日志）//TODO</div>
                    <div class="detail">6.远程终端链接//TODO</div>
                </el-card>
            </div>
        </div>
    </div>
</template>
<style scoped>
.sourceWeb:hover {
    scale: 1.2;
}

.detail {
    font-size: 14px;
}
</style>