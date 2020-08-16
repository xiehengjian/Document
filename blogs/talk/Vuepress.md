---
title: Vuepress使用指南(reco)
date: 2020-08-16
sidebar: 'auto'
categories:
 - 工具
tags:
 - vue
publish: true
---



## 环境搭建

### 安装node

> [node官网](https://nodejs.org/zh-cn/)

安装官网提示下载安装包安装即可

安装完成后打开命令行工具，输入`node -v`，若返回版本信息则安装成功。

### 安装npm

```shell
npm install
```

### 创建博客工程

```shell
# 安装脚手架工具
npm install @vuepress-reco/theme-cli -g

# 创建项目
theme-cli init my-blog  #my-blog可替换成自己需要的项目名称
```

上述命令执行后，在命令行窗口会进行一系列的信息配置

```shell
? What's the title of your project?  #键入您的项目标题

? What's the description of your project? #键入您的项目描述

? What's the author's name? #键入作者姓名

? What style do you want your home page to be?(Select afternoon-grocery, if you 
want to download reco_luan's '午后南杂') (Use arrow keys)
❯ blog   # 此处通过方向键选择您首页风格，这里我们选择blog
  doc 
  afternoon-grocery 
```

接下来进入您的工程目录，启动您的项目吧

```shell
# 接入项目目录
cd my-blog  #my-blog替换为之前您填入的项目名称

# 安装npm
npm install

# 运行测试环境
npm run dev
```

访问命令行输出的ip地址，一般为`http://localhost:8080`,即可访问您的博客了！

![image-20200816143942667](https://bbs-upload.marginnote.cn/original/2X/6/6d7702cdd01116cdadfbffdf52bcae76590ceb8b.png)

### 博客配置

#### 工程结构

```shell
├─ node_modules #存放着项目所需的依赖，我们不需要关心
├─ docs  #该目录下存放您编写的文档
│  └─ theme-reco
│     ├─ api.md
│     ├─ plugin.md
│     ├─ theme.md
│     └─ README.md
├─ blogs #该目录下存放您编写的博客文章
│     ├─ category1
│     │  ├─ 2018
│     │  │  └─ 121501.md
│     │  └─ 2019
│     │     └─ 092101.md
│     ├─ category2
│     │  ├─ 2016
│     │  │  └─ 121501.md
│     │  └─ 2017
│     │     └─ 092101.md
│     └─ other
│        └─ guide.md
├─ .vuepress # 该目录下存放项目配置文件与静态资源
│ 	├─ config.js #该文件用于配置项目
│   └─ public # 该目录下存放网页中所需的静态资源
│     ├─ hero.png # 首页大图
│     ├─ logo.png # 站点logo
│     ├─ favicon.ico #站点图标
│     └─ avatar.png #头像
├─ package.json #依赖管理文件
└─ README.md #这里存放着博客首页的内容
```

#### 配置启动页

> 启动页展示的内容为博客标题与描述，即您在创建工程时输入的内容

您可以在`.vuepress/config.js`下找到如下内容，通过修改对应的字符来改变您的启动页

```js
// .vuepress/config.js
module.exports = {
  "title": "test", 
  "description": "test",
  }
```

#### 配置首页

> 首页即为启动页之后的主页面

首页的内容由项目根目录下的`README.md` 配置生成，您可以通过更改其中的配置项来变更您的首页

```yaml
---
home: true  #指定该文件为您的首页，改为false则不作为首页
heroText: vuepress-theme-reco  #首页居中显示的文本
tagline: A simple and beautiful vuepress blog theme. # 首页显示的标语
# heroImage: /hero.png  #首页显示的主图，默认被注释，取消注释可显示图片
# heroImageStyle: {  # 首页主图的样式控制，默认被注释
#   maxWidth: '600px',
#   width: '100%',
#   display: block,
#   margin: '9rem auto 2rem',
#   background: '#fff',
#   borderRadius: '1rem',
# }
bgImageStyle: { #背景图片样式
  height: '450px'
}

# 以下内容基本上不生效，可以不用关心
isShowTitleInHome: false 
actionText: Guide
actionLink: /views/other/guide
features:
- title: Yesterday
  details: 开发一款看着开心、写着顺手的 vuepress 博客主题
- title: Today
  details: 希望帮助更多的人花更多的时间在内容创作上，而不是博客搭建上
- title: Tomorrow
  details: 希望更多的爱好者能够参与进来，帮助这个主题更好的成长
---
```

> Tip:代码中所引用的图片，均以`.vuepress/public` 为根目录

到此为主，您会注意到首页内容远不止这些，例如个人资料卡、文章列表，这些如何更改呢？

* 文章列表是根据您的文章自动生成的，一旦您发布的文章中的含有`Front Matter`，系统会自动将其收集至首页，默认按时间顺序展示

* 个人资料卡的头像和昵称由`.vuepress/config.js`进行配置，您可以找到如下内容，并进行修改配置。`Category`和`Tag`项则跟您的文章中标注的分类和标签自动生成

  ```js
      "author": "me", //昵称
      "authorAvatar": "/avatar.png", //头像
  ```

  

* `Friend Link` 则是您可以自由更改的，它的配置在`.vuepress/config.js`中，您可以找到如下内容，并对应进行修改配置，如果可以的话，您可以尝试将本站点添加为友链~

  ```js
      "friendLink": [
        {//每一个{}中为一个友链
          "title": "午后南杂", //友联标题
          "desc": "Enjoy when you can, and endure when you must.", //友链描述
          "email": "1156743527@qq.com",  //友链邮箱
          "link": "https://www.recoluan.com" //友链地址
        },
        {
          "title": "vuepress-theme-reco",
          "desc": "A simple and beautiful vuepress Blog & Doc theme.",
          "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
          "link": "https://vuepress-theme-reco.recoluan.com"
        }
      ],
  ```

  #### 配置底部

  

  

  