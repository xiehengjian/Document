# 基于Ngrok内网穿透

> https://ld246.com/article/1582460612314

## 配置服务器与域名

1. 将`ngrok.hjxie.icu`与`*.ngrok.hjxie.icu`解析指向服务器IP

## 构建容器

### 拉取镜像

```shell
$ docker pull hteen/ngrok
```



### 初始化镜像

```shell
$ docker run --rm -it -e DOMAIN="ngrok.hjxie.icu" -v /data/ngrok:/myfiles hteen/ngrok /bin/sh /build.sh
```

### 运行服务端

```shell
$ docker run -idt --name ngrok-server \
-v /data/ngrok:/myfiles \
-p 8882:80 \
-p 4432:443 \
-p 4443:4443 \
-e DOMAIN='ngrok.hjxie.icu' hteen/ngrok /bin/sh /server.sh
```

## 配置Nginx

将配置文件修改为

```conf

```

重启Nginx

## 配置客户端

将`/data/ngrok/bin`中的客户端下载到本地，在同级目录下新建`ngrok.cfg`配置文件

写入如下内容

```conf
server_addr: "ngrok.hjxie.icu:4443"
trust_host_root_certs: false
```



执行

```shell
$ ./ngrok -config ./ngrok.cfg -subdomain ngrok 127.0.0.1:8088
```









































































