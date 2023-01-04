<script setup lang='ts'>
import { ref, reactive } from 'vue'
let activeTable = ref("user")
let nowTabName = ref("first")

let clickRow = (row: any) => {
    console.log("表被点击");

}

let tableData = [
    {
        name: "测试"
    }
]
</script>
<template>
    <div class="outer">
        <div class="left">
            <ul>
                <li class="row active" @click="clickRow">
                    <svg t="1669351350451" viewBox="0 0 1142 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                        p-id="3554" width="20" height="20">
                        <path
                            d="M1102.769231 39.384615v945.23077H39.384615V39.384615h1063.384616m0-39.384615H39.384615a39.384615 39.384615 0 0 0-39.384615 39.384615v945.23077a39.384615 39.384615 0 0 0 39.384615 39.384615h1063.384616a39.384615 39.384615 0 0 0 39.384615-39.384615V39.384615a39.384615 39.384615 0 0 0-39.384615-39.384615z"
                            fill="#4D4D4D" p-id="3555"></path>
                        <path
                            d="M39.384615 393.846154h1063.384616v39.384615H39.384615zM39.384615 590.769231h1063.384616v39.384615H39.384615zM39.384615 787.692308h1063.384616v39.384615H39.384615zM39.384615 196.923077h1063.384616v39.384615H39.384615z"
                            fill="#B3B3B3" p-id="3556"></path>
                        <path
                            d="M315.076923 196.923077v787.692308H275.692308V196.923077zM590.769231 196.923077v787.692308h-39.384616V196.923077zM866.461538 196.923077v787.692308h-39.384615V196.923077z"
                            fill="#B3B3B3" p-id="3557"></path>
                        <path d="M39.384615 39.384615h1063.384616v157.538462H39.384615z" fill="#05AFC8" p-id="3558">
                        </path>
                    </svg>
                    <span style="margin-left: 5px;">user</span>
                </li>
                <li class="row" @click="clickRow">
                    <el-button>新增</el-button>
                </li>
            </ul>
        </div>
        <div class="right">
            <el-tabs v-model="nowTabName">
                <el-tab-pane label="基础信息" name="first">
                    <ul>
                        <li>表名</li>
                        <li>表备注</li>
                    </ul>
                </el-tab-pane>
                <el-tab-pane label="字段信息" name="second">
                    <ul>
                        <li>表格展示</li>
                        <li>
                            展示内容：字段序号，数据库字段列名，字段中文名（用于前端展示用，可以更改），mysql类型，增删改查是否显示此字段（勾选框，增加/修改表单是否需要用户输入，查询表格是否显示此列），
                            查询比较的方式，等于，LIKE，不等于，大于等于，小于等于，between,>，小于等，新增/修改时是否必填，前端展示的类型(文本框，文本域，下拉框，单选，复选，日期，图片上传，文件上传，富文本控件)
                        </li>
                        <li></li>
                    </ul>
                    <el-table :data="tableData" border style="width: 100%">
                        <el-table-column  label="name"  />
                    </el-table>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>
<style scoped >
.outer {
    display: flex;
}

.left {
    width: 200px;
    margin-right: 20px;
    border-right: 1px solid gray;

}

.right {
    flex: 1;

}

.row {
    display: flex;
    align-items: center;
}

li {
    cursor: pointer;
}

.active {
    background-color: #a0cfff;
}
</style>