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
-a, --all             #显示所有镜像（默认情况下隐藏临时镜像）    
    --digests             #显示镜像的数字摘要值，默认为否
-f, --filter filter   #根据提供的条件过滤输出
    --format string       #使用Go模板漂亮地打印图像
    --no-trunc            #不截断输出
-q, --quiet           #只显示镜像ID
```

### 添加标签

```shell
$ docker tag SOURCE_IMAGE[:TAG] TARGET_IMAGE[:TAG]

# 相当于类似链接的作用
```

### 查看镜像信息

```shell
$ docker inspect [OPTIONS] NAME|ID [NAME|ID...]

#参数
-f, --format string   #指定输入格式
-s, --size            #展示整个文件大小
    --type string     #输出JSON
```

### 查看镜像历史

```shell
$ docker history [OPTIONS] IMAGE

# 参数
    --format string   Pretty-print images using a Go template
-H, --human           Print sizes and dates in human readable format (default true)
    --no-trunc        Don't truncate output
-q, --quiet           Only show numeric IDs
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
-a, --all-tags                #是否获取仓库中的所有镜像，默认为否
    --disable-content-trust   #取消镜像的内容校验，默认为真
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

### 清理镜像

```shell
$ docker image prune
# 参数
-a,-all                  #删除所有无用镜像，不只是临时镜像
-filter filter           #只清理符合给定过滤器的镜像
-f,-force                #强制删除镜像

```

### 创建镜像

#### 基于已有容器创建

```shell
$ docker commit [OPTIONS] CONTAINER [REPOSITORY[:TAG]]
# 参数
  -a, --author string    #作者信息
  -c, --change list      #提交的时候执行Dockerfile指令
  -m, --message string   #提交消息
  -p, --pause            #提交时暂停容器运行
```

#### 基于本地模板导入

```shell
$ docker import [OPTIONS] file|URL|- [REPOSITORY[:TAG]]
#Options:
  -c, --change list       Apply Dockerfile instruction to the created image
  -m, --message string    Set commit message for imported image
      --platform string   Set platform if server is multi-platform capable
```

#### 基于Dockerfile创建

```shell
$ docker build [OPTIONS] PATH | URL | -
# 参数过多
```

### 保存镜像

```shell
$ docker save [OPTIONS] IMAGE [IMAGE...]
#参数
 -o, --output string   Write to a file, instead of STDOUT
```

### 载入镜像

```shell
$ docker load [OPTIONS]
#参数
  -i, --input string   Read from tar archive file, instead of STDIN
  -q, --quiet          Suppress the load output
```

### 上传镜像

```shell
$ docker push [OPTIONS] NAME[:TAG]

#参数
 --disable-content-trust   Skip image signing (default true)
```



## 容器命令

### 创建容器

```shell
$ docker create [OPTIONS] IMAGE [COMMAND] [ARG...]
```



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

### 暂停容器

```shell
$ docker pause
```

### 恢复容器

```shell
$ docker unpause
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

### 导出容器

```shell
$ docker export
```

### 导入容器

```shell
$ docker import
```

## 数据管理

### 创建数据卷

```shell
$ docker volume create -d local test
```

### 绑定数据卷

```shell
$ docker run -mount
```

### 数据卷容器



