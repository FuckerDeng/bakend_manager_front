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

### 细节说明

```
1.tsconfig.json中此字段中的"src/**/*.d.ts"改成"**/*.d.ts"，否则在动态引入elementplus后，使用组件时编译器会报红线，说找不到声明
	"include": ["src/**/*.ts", "**/*.d.ts", "src/**/*.tsx", "src/**/*.vue"]

2.在使用vscode的volar插件，则在 tsconfig.json 中通过 compilerOptions.type 指定全局组件类型。
// tsconfig.json
{
  "compilerOptions": {
    // ...
    "types": ["element-plus/global"]
  }
}
3.按不同生产环境配置不同环境变量，可以看vite文档的环境变量章节
  > 根目录下根据环境创建 .env、.env.development、.production文件，公共变量放.env文件，变量以 VITE_ 开头
  > 如果要类型提示，则需要在src目录下新建env.d.ts文件，加入如下内容
//env.d.ts
/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_API_BASE_URL: string,
    readonly VITE_TIMEOUT: number,
  
    // 更多环境变量...
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }

4.在vite配置文件中设置alias别名后，还需要在tsconfig.json中配置path变量，让编译器识别
//vite.config.ts
  resolve: {
    alias:[
      {
        find:"@",
        replacement: path.resolve(__dirname,"./src/")
      }
    ]
  }
//tsconfig.json
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    },
  },

```
