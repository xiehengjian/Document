---
title: Docker安装指南
date: 2020-08-21
sidebar: 'auto'
categories:
 - 工具
tags:
 - Docker
publish: true
---

::: tip 
介绍在Ubuntu、CentOS以及macOS上的Docker安装方法
:::

<!-- more -->

## Ubuntu

### 系统要求

Ubuntu操作系统对Docker的支持十分成熟，可以支持包括x86_64、armhf、s390x(IBMZ)、ppc64le等系统架构，只要是64位即可。

Docker目前支持的最低Ubuntu版本为14.04LTS，但实际上从稳定性上考虑，推荐使用16.04LTS或18.04LTS，并且系统内核越新越好，以支持Docker最新的特性。

用户可以通过如下命令检查自己的内核版本详细信息

```shell
$ uname -a
```

或者

```shell
$ cat /proc/version
```

如果使用Ubuntu16.04版本，为了让Docker使用aufs存储，推荐安装如下两个软件包

```shell
$ sudo apt-get update
$ sudo apt-get install -y \
		linux-image-extra-$(uname -r) \
		linux-image-extra-virtual
```



### 添加软件源

首先需要安装`apt-transport-https`等软件包支持https协议的源

```shell
$ sudo apt-get update
$ sudo apt-get install \
		apt-transport-https \
		ca-certificates \
		curl \
		software-properties-common
```

添加源的gpg秘钥

```shell
$ curl -fsSl https://download.docker.com/linux/ubuntu/gpg |sudo apt-key add - OK
```

确认导入指纹为`9DC8 5822 9FC7 DD38 854A E2D8 8D81 803C OEBF CD88`的GPG公钥

```shell
$ sudo apt-key fingerprint 0EBFCD88
pub	4096R/0EBFCD88 2017-02-22
		Key fingerprint = 9DC8 5822 9FC7 DD38 854A E2D8 8D81 803C OEBF CD88
uid                Docker Release (CE deb) <docker@docker.com>
sub 4096R/F273FCD8 2017-02-22
```

获取当前操作系统的代号

```shell
$ lab_release -cs
```

一般而言，Ubuntu 16.04 LTS代号为xenial，Ubuntu 18.04 LTS 代号为bionic

添加Docker稳定版本的官方软件源，非bionic版本的系统请注意修改为自己对应的代号

```shell
$ sudo add-apt-repository \
		"deb [arch=amd64] https://download.docker.com/linux/ubuntu \
		bionic \
		stable"
```

添加成功后，再次更新apt软件包缓存

```shell
$ sudo apt-get update
```

### 安装Docker

在成功添加源之后，就可以安装最新版本的Docker了，软件包名称为docker-ce，代表是社区版本

```shell
$ sudo apt-get install -y docker-ce
```

如果系统内存在较旧版本的Docker,会提示是否先删除，选择==是==即可。

###  <a name="anchor">脚本安装</a>

除了基于手动添加软件源的方式之外，也可以提供官方提供的脚本来自动化安装Docker:

```shell
$ sudo curl -sSL https://get.docker.com/ | sh
```

安装成功后，会自动启动Docker服务。

用户也可以指定安装软件源中其他版本的Docker

```shell
$ sudo apt-cache madison docker-ce

$ sudo apt-get install docker-ce=17.11.0~0~ubuntu
```



## CentOS

### 系统要求

Docker目前支持CentOS 7 及其以后的版本。系统要求与Ubuntu情况类似，64位操作系统，内核版本至少为3.10.

### 添加软件源

首先为了方便添加软件源，以及支持`devicemapper`存储类型，安装如下软件包

```shell
$ sudo yum update
$ sudo yum install -y yum-utils \
		device-mapper-persistent-data \
		lvm2
```

添加Docker稳定版本的yum软件源

```shell
$ sudo yum-config-manage \
		--add-repo \
		https://download.docker.com/linux/centos/docker-ce.repo
```

### 安装Docker

更新yum软件源缓存，并安装Docker

```shell
$ sudo yum update
$ sudo yum install -y docker-ce
```

最后，确认Docker服务启动正常

```shell
$ sudo systemctl start docker
```



### [脚本安装](#anchor)

> 支持Ubuntu、Debian、Oracleserver、Fedora、Centos、OpenSuse、Gentoo等常见发行版

## macOS

Docker官方非常重视其在Mac环境下的易用性。由于大量开发者使用Mac环境进行开发,而 Docker是一个完整的容器化应用的开发环境,所以 Docker官方提供了简单易用的[Docker for Mac](https:/docs.docke.com/docker-for-mac/)工具。Docker for Mac其实是一个完整的 Docker CE工具。下面我们一步步讲解如何正确安装 Docker for Mac。

### 选择版本

目前用户可以选择稳定版( Stable)或测试版(Beta),这两个版本都可以通过配置 Docker Daemon来开启一些实验特性。配置时,只要启动 Docker daemon时带上-- experimenta1 参数即可。或者通过修改/etc/ docker/ daemon.json配置文件中的 experimental字段,如下所示:

```json
{
  "experimental":true
}
```

也可以使用如下指令直接确认实验特性是否开启:

```shell
$ docker version -f '{{.Server.Experimental}}'
```

### 安装须知

Docker for Mac与 Docker Machine的关系是互不影响。用户可以从本地 default machine 拷贝容器和镜像至 Docker for Mac的 Hyperkit VM中。 [Hyperkit](https://github.com/moby/hyperkit)是 Docker开源的支持OSX 的轻量级虚拟化工具包。它基于 Macosx10.10之后引入的 Hypervisor框架。 Hyperkit应用可以利用硬件虚拟化运行VM,但无须特殊权限或者复杂的管理工具栈。

当用户运行 Docker for Mac时,本机或远程均无须运行 Docker Machine。用户使用的是一套新的原生虚拟化系统,不再需要 Virtualbox。如果希望了解更多两者对比情况,参见https://docs.dockercom/docker-for-mac/docker-toolbox 

Docker for Mac支持 macos El Capitan10.11及其后续版本。最小要求是 macos Yosemite 10.10.3,同时 Docker并不保证可以完全支持10.10.X, Docker for Mac从版本1.13开始,不再支持10.10版本的 macos。

### 安装Docker

首先,选择需要的版本并下载。双击打开 Docker.dmg 文件,将 Docker.app拖至应用程序(或 Applications)文件夹即可。
Docker应用启动后,在任务栏会多出一个小图标,如图2-3所示。
用户可以通过这个图标打开 Docker应用,并进行配置。

安装成功后,可以确认运行的 Docker版本信息。如果用户环境已安装过 Docker环境,则可能存在老版 docker-py,为了防止冲突,需要重新安装

```shell
$ sudo pip uninstall docker-py 
$ sudo pip uninstall docker 
$ sudo pip install docker
```

此时运行指令已不会提示冲突:

```shell
$ docker-compose--version
```

用户还可以执行 docker version获取更全面的版本信息:

```shell
$ docker version
```





