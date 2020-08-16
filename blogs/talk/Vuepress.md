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

