## 项目 介绍

> 后台管理系统的前端部分

### 使用技术

| 技术                        | 说明            | 官网                                                                               |
| --------------------------- | --------------- | ---------------------------------------------------------------------------------- |
| vite                        | 开发编译工具    | [https://cn.vitejs.dev/]()                                                            |
| vue3                        | 前端响应式框架  | [https://cn.vuejs.org/guide/essentials/application.html]()                            |
| typescript                  | js超集开发语言  | [https://www.tslang.cn/docs/home.html]()                                              |
| vue-router                  | vue路由插件     | [https://router.vuejs.org/zh/installation.html]()                                     |
| pinia                       | vue状态管理插件 | [https://pinia.web3doc.top/getting-started.html]()                                    |
| tailwindcss                 | css样式库       | [https://tailwindcss.com/docs/installation]()                                         |
| elementplus                 | vue3组件库      | [https://element-plus.gitee.io/en-US/guide/installation.html#using-package-manager]() |
| axios                       | ajax网络请求库  | [https://www.axios-http.cn/docs/intro]()                                              |
| qs                          | 请求参数处理库  | [https://www.npmjs.com/package/qs]()                                                  |
| pinia-plugin-persistedstate | pinia持久化插件 | [https://www.npmjs.com/package/pinia-plugin-persistedstate]()                         |

### package.json中script脚本说明

```json
 "scripts": {
    //启动vue的开发服务器
    "dev": "vite",
    //打包
    "build": "vue-tsc --noEmit && vite build",
    //打包预览
    "preview": "vite preview",
    // tailwindcss编译并监听文件变化，动态重新编译
    "tailwind":"npx tailwindcss -i ./src/tailwind/input.css -o ./src/assets/css/tailwind_output.css --watch"
  },
```
