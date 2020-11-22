---
title: Docker常用命令
date: 2020-08-21
sidebar: 'auto'
categories:
 - 工具
tags:
 - Docker
publish: true
---

::: tip 
Docker想关常用命令及参数
:::

<!-- more -->

## 帮助命令

```shell
$ docker version #显示Docker的版本信息
$ docker info #显示Docker的系统信息，包括镜像和容器的数量
$ docker <command> --help #查看相关命令的帮助说明
```



## 镜像命令

### 查看本地所有镜像

```shell
$ docker images [OPTIONS] [REPOSITORY[:TAG]]

#输出内容
REPOSITORY   #镜像的仓库源       
TAG          #镜像的标签       
IMAGE ID     #镜像的ID      
CREATED      #镜像的创建时间       
SIZE         #镜像的大小

#参数
-a, --all             #显示所有镜像（默认情况下隐藏中间镜像）    
    --digests             #显示摘要
-f, --filter filter   #根据提供的条件过滤输出
    --format string       #使用Go模板漂亮地打印图像
    --no-trunc            #不截断输出
-q, --quiet           #只显示镜像ID
```

### 搜索镜像

```shell
$ docker search [OPTIONS] TERM

# 输出内容
NAME             #镜像名           
DESCRIPTION      #镜像描述                  
STARS            #start数
OFFICIAL         #是否官方
AUTOMATED        #是否自动

# 参数
-f, --filter filter   #根据提供的条件过滤输出
    --format string       #使用Go模板漂亮地打印图像
    --limit int           #最大搜索结果数（默认为25）
    --no-trunc            #不截断输出
```

### 拉取镜像

```shell
$ docker pull [OPTIONS] NAME[:TAG|@DIGEST]

# 参数
-a, --all-tags                #下载存储库中的所有标记图像
    --disable-content-trust   #跳过镜像验证（默认为true）
    --platform string         #如果服务器支持多平台，则设置平台
-q, --quiet                   #抑制详细输出
```

### 删除镜像

```shell
$ docker rmi [OPTIONS] IMAGE [IMAGE...]

# 参数
-f, --force      #强制删除镜像
		--no-prune   #不要删除未标记的父项
```

## 容器命令

### 创建并启动

```shell
$ docker run [OPTIONS] IMAGE [COMMAND] [ARG...]

# 参数
--name=string  #指定容器名
-d             #后台方式运行
-it            #使用交互方式运行，进入容器查看内容
-p             #指定容器的端口
-P             #随机指定端口
```

### 查看运行的容器

```shell
$ docker ps [OPTIONS]

# 参数
  -a, --all             #显示所有容器（默认显示仅运行）
  -f, --filter filter   #根据提供的条件过滤输出
      --format string   #使用Go模板的漂亮打印容器
  -n, --last int        #显示n个上次创建的容器（包括所有状态）（默认值-1）
  -l, --latest          #显示最新创建的容器（包括所有状态）
      --no-trunc        #不截断输出
  -q, --quiet           #仅显示数字标识
  -s, --size            #显示总文件大小
```

### 退出容器

```shell
exit  #退出并停止
Ctrl + P + Q #退出不停止
```

### 删除容器

```shell
$ docker rm [OPTIONS] CONTAINER [CONTAINER...]

# 参数
  -f, --force     #强制移除正在运行的容器（使用SIGKILL）
  -l, --link      #删除指定的链接
  -v, --volumes   #删除与容器关联的匿名卷
```

### 启动容器

```shell
$ docker start [OPTIONS] CONTAINER [CONTAINER...]

# 参数
  -a, --attach                  #附加STDOUT/STDERR和转发信号
      --checkpoint string       #从此检查点还原
      --checkpoint-dir string   #使用自定义检查点存储目录
      --detach-keys string      #重写用于分离容器的键序列
  -i, --interactive             #附上集装箱标准
```

### 重启容器

```shell
$ docker restart [OPTIONS] CONTAINER [CONTAINER...]

# 参数
 -t, --time int   #在终止容器之前等待停止的秒数（默认值为10）
```

### 停止容器

```shell
$ docker stop [OPTIONS] CONTAINER [CONTAINER...]

# 参数
 -t, --time int   #在终止容器之前等待停止的秒数（默认值为10）
```

### 杀死容器

```shell
$  docker kill [OPTIONS] CONTAINER [CONTAINER...]

# 参数
-s, --signal string   #发送到容器的信号（默认为“KILL”）
```

### 进入容器

```shell
$ docker exec [OPTIONS] CONTAINER COMMAND [ARG...]

# 参数
  -d, --detach               #分离模式：在后台运行命令
      --detach-keys string   #重写用于分离容器的键序列
  -e, --env list             #设置环境变量
  -i, --interactive          #即使未连接STDIN也应保持打开状态
      --privileged           #为命令授予扩展权限
  -t, --tty                  #分配一个伪TTY
  -u, --user string          #用户名或UID（格式：<name | UID>[：<group | gid>]）
  -w, --workdir string       #容器内的工作目录
  
  
 $ docker attach [OPTIONS] CONTAINER
 
 # 参数
 --detach-keys string  #重写用于分离容器的键序列 
 --no-stdin             #不要连接标准输入
 --sig-proxy            #将所有接收到的信号代理到进程（默认为true）
```



### 文件传输

```shell
$ docker cp [OPTIONS] CONTAINER:SRC_PATH DEST_PATH|-
$ docker cp [OPTIONS] SRC_PATH|- CONTAINER:DEST_PATH

# 参数
 -a, --archive       #存档模式（复制所有uid/gid信息）
 -L, --follow-link   #始终遵循SRC_路径中的符号链接p'y
```



