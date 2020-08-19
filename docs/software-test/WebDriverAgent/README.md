---
title: IOS真机调试(基于wda)
date: 2020-08-19
sidebar: 'auto'
categories:
 - 软件测试
tags:
 - iOS
 - wda

publish: true
---

::: tip 
WebDriverAgent目前是facebook所开源维护的用户ios真机调试的工具，本文对相关的配置部署进行介绍
:::

<!-- more -->

## 环境准备

### weditor

> [weditor](https://github.com/alibaba/web-editor)是阿里巴巴开源的一款UI视图元素分析的工具，支持Android与IOS

#### 安装

```shell
pip3 install weditor
```

### Xcode

> [Xcode](https://developer.apple.com/xcode/)是苹果推出的集成开发环境，对于调试ios设备，xcode是必选项

#### 安装

进入Xcode官网下载安装即可。

最好将xcode升级至最新版，我在初次尝试的时候就出现一直无法连接真机的问题，后更新至xcode12 beta解决问题

### IOS

需要您的ios版本处于9.3以上，若出现错误，可能是由于您的ios版本过低造成的。

但同时，如果您的ios版本太新，比如是刚发布的beta版本，则也有可能会出现问题

### WebDriverAgent

> [WebDriverAgent](https://github.com/openatx/facebook-wda)目前是ios真机调试的Python客户端库（非官方）

拉取代码

```shell
git clone https://github.com/appium/WebDriverAgent
```

初始化

```shell
./Scripts/bootstrap.sh
```

## 连接设备

### 启动项目

打开项目中生成的`WebDriverAgent.xcodeproj`

### 配置证书

因为安装到真机上都是需要证书签名的，开发者可以用自己的开发者证书，这里我使用了免费的个人证书。

![Snipaste_2020-08-19_15-38-57](/Users/creative/Documents/document/.vuepress/public/Snipaste_2020-08-19_15-38-57.png)

* 5中需要勾选开启
* 6中需要选择您的开发者证书
* 7中如果您使用了免费的个人证书，则需要修改使其不会重名即可



### 运行与测试

选择目标设备

![](/Users/creative/Documents/document/.vuepress/public/4291b5b01899d382fca6aecd1f4b7e63.png!large)

Scheme选择WebDriverAgentRunner

![](/Users/creative/Documents/document/.vuepress/public/f035bd53ae3922012b7d6378ecb95615.png!large)

最后运行 Product -> Test

一切正常的话，手机上会出现一个无图标的WebDriverAgent应用，启动之后，马上又返回到桌面。

## 启动weditor

终端执行

```shell
python3 -m weditor
```

接着会在浏览器中跳出一个窗口

在xcode控制台中可以看到当前设备的ip，将其填入weditor的ip框中，点击connect

连接成功。

