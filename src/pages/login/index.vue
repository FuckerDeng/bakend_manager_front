<script setup lang='ts'>
import { ref, reactive, onMounted } from 'vue'
import useUser from "@/store/user"
import { login } from "@/api/loginApi"
import { useRouter } from "vue-router"
import { FormInstance, FormRules } from 'element-plus';

const router = useRouter()
const userStore = useUser()
let btnDisable = ref(false)//防抖标志
let formData = reactive({
    username: "",
    password: ""
})


let loginSubmit = async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    await formEl.validate((valid, fields) => {
        if (valid) {
            btnDisable.value = true;
            login(formData).then((data) => {

                btnDisable.value = false;
                //TODO 测试用
                data.code = 200
                ElMessage.success("登录成功！")
                if (data.code == 200) {
                    //TODO 登录成功，记录数据，动态添加路由，跳转页面
                    userStore.token = "test"
                    router.push({ path: "/" })
                    return
                }
                //登录失败给提示
            }).catch((error) => {
                btnDisable.value = true
                ElMessage.error(error.data.msg)
            })
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
        {required: true,message: '请输入密码',trigger: 'blur'},
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