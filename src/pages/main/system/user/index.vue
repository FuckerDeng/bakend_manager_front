<script setup lang='ts'>
import { page } from '@/api/userApi';
import { ref, reactive, onMounted, nextTick } from 'vue'
import { IUser } from "@/types/ResponseTypes";
import { Delete, Plus } from '@element-plus/icons-vue'

let tableData = ref<IUser[]>([])
let columns = ref<string[]>([])
onMounted(() => {
    let params = {
        page: 1,
        size: 20
    }
    let data = {

    }

    page(params, data).then((data => {
        tableData.value = data.data.records
        if (data.data.records.length == 0) return
        let first = data.data.records[0]
        columns.value = Object.keys(first)
        console.log("cols:", columns.value)
    }))


})

let editData = (row: IUser) => {

}

let selectedRows = ref<IUser[]>([])
let handleSelectionChange = (val: IUser[]) => {
    selectedRows.value = val
}

//dialog
let dialogVisible = ref(false)

let addDataDialog = () => {
    dialogVisible.value = true
}

interface D {
    [key: string]: any
}

let formData = reactive<D>({})
</script>
<template>
    <el-button-group class="ml-4">
        <el-button type="primary" size="small" :icon="Plus" @click="addDataDialog"></el-button>
        <el-button type="danger" :disabled="selectedRows.length == 0" size="small" :icon="Delete">批量删除</el-button>
    </el-button-group>
    <div class="dataArea">
        <div v-if="!tableData || tableData.length == 0">
            暂无数据
        </div>
        <el-table v-else border :data="tableData" style="width: 100%" table-layout="auto"
            @selection-change="handleSelectionChange">
            <el-table-column type="selection" width="55" />
            <el-table-column v-for="col in columns" :key="col" :prop="col" :label="col" />
            <el-table-column fixed="right" label="操作" width="120">
                <template #default="scope">
                    <el-button link type="primary" size="small" @click="editData(scope.row)">编辑</el-button>
                    <el-button link type="danger" size="small">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="page">
            <el-pagination small background layout="prev, pager, next" :total="50" />
        </div>

    </div>

    <el-dialog v-model="dialogVisible" title="新增" width="30%" draggable>
        <el-form :model="formData" label-width="120px" label-position="top" size="small">
            <el-form-item :label="key" v-for="key in columns" :key="key">
                <el-input v-model="formData[key]" />
            </el-form-item>
        </el-form>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="dialogVisible = false">取消</el-button>
                <el-button type="primary" @click="dialogVisible = false">
                    提交
                </el-button>
            </span>
        </template>
    </el-dialog>
</template>
<style scoped>
.page {
    display: flex;
    justify-content: center;
    margin-top: 20px;
}

</style>