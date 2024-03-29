# vue-mobile-project

> 这是一个基于vue框架搭建的移动端项目
主要技术栈： vue2 + vue-cli2 + vue全家桶 + vux 等

## 安装流程

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


## 项目结构

``` 
|-- vue-mobile-web
    |-- .babelrc
    |-- .editorconfig
    |-- .gitignore
    |-- .postcssrc.js
    |-- index.html
    |-- package.json
    |-- README.md
    |-- sprite_handlebars_template.handlebars
    |-- build
    |   |-- build.js
    |   |-- check-versions.js
    |   |-- utils.js
    |   |-- vue-loader.conf.js
    |   |-- webpack.base.conf.js
    |   |-- webpack.dev.conf.js
    |   |-- webpack.prod.conf.js
    |-- config
    |   |-- dev.env.js
    |   |-- index.js
    |   |-- prod.env.js
    |-- mock
    |   |-- article.js
    |   |-- index.js
    |   |-- ...
    |-- src
    |   |-- App.vue
    |   |-- main.js
    |   |-- assets
    |   |   |-- icons
    |   |   |   |-- index.js
    |   |   |   |-- svgo.yml
    |   |   |   |-- svg
    |   |   |-- images
    |   |   |-- style
    |   |       |-- reset.scss
    |   |       |-- sprite.png
    |   |       |-- sprite.scss
    |   |       |-- mixin
    |   |           |-- common.scss
    |   |           |-- mixin.scss
    |   |           |-- variable.scss
    |   |-- common
    |   |   |-- bus.js
    |   |   |-- open-window.js
    |   |   |-- ...
    |   |-- components
    |   |   |-- SvgIcon
    |   |       |-- index.vue
    |   |-- config
    |   |   |-- baseConfig.js
    |   |   |-- wxSdkConfig.js
    |   |   |-- ...
    |   |-- directive
    |   |   |-- sticky.js
    |   |   |-- el-drag-dialog
    |   |   |   |-- drag.js
    |   |   |   |-- index.js
    |   |   |-- el-table
    |   |   |   |-- adaptive.js
    |   |   |   |-- index.js
    |   |   |-- ...
    |   |-- filters
    |   |   |-- index.js
    |   |-- layout
    |   |   |-- index.vue
    |   |-- router
    |   |   |-- index.js
    |   |-- service
    |   |   |-- api.js
    |   |   |-- request.js
    |   |   |-- service.js
    |   |-- store
    |   |   |-- getters.js
    |   |   |-- index.js
    |   |   |-- modules
    |   |       |-- app.js
    |   |       |-- tagsView.js
    |   |       |-- user.js
    |   |-- utils
    |   |   |-- auth.js
    |   |   |-- get-page-title.js
    |   |   |-- imgs-map.js
    |   |   |-- index.js
    |   |   |-- terminal-type.js
    |   |   |-- validate.js
    |   |   |-- ...
    |   |-- views
    |       |-- index.vue
    |       |-- error
    |       |   |-- index.vue
    |       |-- icons
    |           |-- index.vue
    |           |-- svg-icons.js
    |       |-- ...
    |-- static
        |-- images
        |-- js
            |-- baidutongji.js
            |-- flexible.min.js
            |-- jquery.lazyload.min.js
        |-- css


```

## 项目自动化流程说明

具体使用方法，查询demo文件（路由：/demo）

1、以750px设计稿为基准，通过 flexible.js 结合 postcss-px2rem加载器实现移动端自适应，
   css中直接使用px单位，rem 由配置的加载器计算输出

2、支持svg、小图片等自动编译热更新，/static/images中的图片映射到自定义全局对象staticImgs中，便于统一管理和使用

3、支持css3样式自动加前缀，全局静态样式表的引入

4、配置了FastClick 和 vue-touch 两种移动端触屏事件，支持 click、tap、swiperight、swipetop等触发事件，规避了移动端延迟300ms的问题

5、vuex 结合 vuex-persistedstate 实现自动化备份存储数据到本地缓存，规避页面刷新时vuex中数据为空的问题

6、使用sdn的方式引入vue\axios\vuex\vue-router等文件，减小vendor的打包体积，优化首页性能

7、路由按需加载，提高首页渲染速度

8、按需加载 vux 的 ui 组件，减少代码冗余

9、引入polyfill文件，动态处理es6兼容性

10、动态骨架屏 （配置中，有待完善）

...
