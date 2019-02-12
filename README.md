## mui-vue-app
基于mui+vue的H5 APP项目,用webpack打包成多页面，多页面便于mui的解决思路是：将需要滚动的区域通过单独的webview实现，完全使用原生滚动。也就是说，将页面分为主页面和子页面两部分，主页面只有头部和尾部，而需要滚动的区域放置到子页面中，并在mui.init()方法中加载

app打包技术是用[HBuilder IDE](http://www.dcloud.io/index.html)工具一键打包成APP，也可以借助eclipse本地打包（本地打包是有添加Android sdk包的需求，这里没有介绍，只是简单构建使用，本地打包工程文件如需可以索取）。这些都是[dcloud](http://www.dcloud.io/index.html)提供一整套技术解决方案。

**说明:** 

> 1. 前端UI的主要用vue-material，部分使用mui框架
> 
> 2. app打包技术使用HBuilder IDE工具
> 


## 安装
- 下载[HBuilder IDE](http://www.dcloud.io/index.html)开发工具，其实HBuilder是dcloud 把eclipse的改造成一个专门应用于app打包、多种语言支持：php、jsp、ruby、python、nodejs等web语言，less、coffee等编译型语言均支持的开发工具

- app打包完全是基于manifest.json配置文件，它主要是用来配置app的基本信息（版本号、appid等）、图标(app的应用图标)、sdk配置、模块权限配置、页面引用关系、代码视图，具体参看dcloud提供的[文档](http://ask.dcloud.net.cn/docs/#//ask.dcloud.net.cn/article/94)。


## 项目目录说明


```
### 多页面的目录结构如下：
vue-mui-app                                 # 工程名
|   |--- dist                               # 打包后生成的目录文件
|   |--- node_modules                       # 所有的依赖包
|   |--- src                                # 项目的文件包
|   |    |--- pages                         # 存放所有页面的文件
|   |    |    |--- page1
|   |    |    |    |--- index.html          # 第一个页面的html文件
|   |    |    |    |--- index.styl          # 第一个页面的css文件
|   |    |    |    |--- index.js            # 第一个页面的js文件
|   |    |    |--- page2
|   |    |    |    |--- index.html          # 第二个页面的html文件
|   |    |    |    |--- index.styl          # 第二个页面的css文件
|   |    |    |    |--- index.js            # 第二个页面的js文件
|   |    |--- libs                          # 没有npm的直接引用的插件
|   |--- build
|   |    |--- webpack.base.js               # webpack 基本配置文件
|   |    |--- webpack.dev.js                # 开发文件
|   |    |--- webpack.build.js              # 打包线上文件
|   |--- .gitignore
|   |--- README.md
|   |--- manifest.json                      # 打包app的配置文件
|   |--- package.json                       # 配置项目相关信息，通过执行 npm init 命令创建
```


## 运行程序


启动发布代码

```
//初始化

npm install

//开发

npm run dev

//发布

npm run prod

```

