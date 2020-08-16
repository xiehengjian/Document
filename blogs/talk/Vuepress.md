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

