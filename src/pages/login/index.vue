<script setup lang='ts'>
import { ref, reactive, onMounted } from 'vue'
import useUser from "@/store/user"
import { login } from "@/api/loginApi"
import { RouteRecordRaw, useRouter } from "vue-router"
import { FormInstance, FormRules } from 'element-plus';
import mockMenus from "@/mock/sidemenus.json"
import useMenus from "@/store/sidemenu"
import useTabs from "@/store/tabs"


// console.log(allComponents);


const menuStore = useMenus()
const router = useRouter()
const userStore = useUser()
const tabsStore = useTabs()
let btnDisable = ref(false)//防抖标志
let formData = reactive({
    username: "",
    password: ""
})

let reSetMenus = () => {
    //添加 首页菜单
    menuStore.menus = []
    menuStore.menus.push(menuStore.dashboard)
    menuStore.menus = menuStore.menus.concat(mockMenus)//此菜单应该为API结果
    console.log("新菜单：",menuStore.menus);
    
}
let reSetTabs = () => {
    //添加 首页菜单
    tabsStore.tabs=[]
    tabsStore.tabs.push(tabsStore.defaultData.tab)
    tabsStore.activeTab = tabsStore.defaultData.activeTab
    
}

let loginSubmit = async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    await formEl.validate((valid, fields) => {
        if (valid) {
            btnDisable.value = true;

            //TODO 登录成功，记录用户数据，初始化菜单，跳转页面，菜单和路由使用 同一个 数据对象，格式见mock/sidemenus.json
            userStore.token = "test"
            //TODO 登录后重置菜单列表，
            reSetMenus()
            //登录后重置tab页数据
            reSetTabs()
            router.push({ path: "/" })
            //TODO api链接
            // login(formData).then((res) => {

            //     btnDisable.value = false;
            //     //TODO 测试用
            //     res.code = 200
            //     ElMessage.success("登录成功！")
            //     if (res.code == 200) {
            //         //TODO 登录成功，记录用户数据，初始化菜单，动态添加路由，跳转页面，菜单和路由使用 同一个 数据对象，格式见mock/sidemenus.json
            //         userStore.token = "test"
            //         //TODO 登录后重置菜单列表，
            //         reSetMenus()
            //         //重置路由
            //         reSetRoutes( res.data.permissions)
            //         //动态添加路由
            //         router.push({ path: "/" })
            //         return
            //     }
            //     //登录失败给提示
            // }).catch((error) => {
            //     btnDisable.value = true
            //     ElMessage.error(error.data)
            // })
        } else {
            console.log('error submit!', fields)
        }
    })


}
//表单验证
const ruleFormRef = ref<FormInstance>()
const rules = reactive<FormRules>({
    username: [
        { required: true, message: '请输入用户名', trigger: 'blur' },
    ],
    password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
    ]
})

</script>
<template>
    <div class="lg">
        <div
            class="fixed left-1/4 top-1/3 w-80 h-64 p-5 shadow-md rounded-lg opacity-90 bg-yellow-50 flex flex-col justify-around">
            <div class="text-2xl flex justify-center tracking-widest">登录</div>
            <el-form :model="formData" :rules="rules" ref="ruleFormRef">
                <el-form-item prop="username">
                    <el-input v-model="formData.username" placeholder="用户名" />
                </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password" v-model="formData.password" placeholder="密码" />
                </el-form-item>
                <el-form-item>
                    <el-button :disabled="btnDisable" class="w-full" type="primary" @click="loginSubmit(ruleFormRef)">进入
                    </el-button>
                </el-form-item>
            </el-form>
        </div>

    </div>
</template>
<style scoped>
.lg {
    width: 100%;
    height: 100%;
    background: url("@/assets/images/lg_bg.webp") no-repeat;
    background-size: 100% 100%;
    background-attachment: fixed;
}
</style>