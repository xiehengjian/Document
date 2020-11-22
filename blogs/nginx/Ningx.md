## 介绍

### 引言

> 为什么学习Nginx
>
> 问题1：客户端到底要将请求发送非哪台服务器
>
> 问题2：如果所有客户端的请求都发送给了服务器1
>
> 问题3：客户端发送的请求可能是申请动态资源的，也有申请静态资源的

![image-20200903093835559](http://img.hjxie.icu/image-20200903093835559.png)

在搭建集群后，使用Nginx做反向代理服务器

![image-20200903094000426](http://img.hjxie.icu/image-20200903094000426.png)

### 介绍

> Nginx是俄罗斯人研发的，应对Rambler网站的高并发，于2004年发布第一个版本

特点：

* 稳定性极强，7*24小时不间断运行
* 提供了非常丰富的配置实例
* 占用内存小，并发能力强

## 安装

### 安装

```yml
version: '3.1'
services:
  nginx:
    restart: always
    image: daocloud.io/library/nginx:latest
    container_name: nginx
    ports:
        - 80:80
```

### 配置文件

```json
user  nginx;
worker_processes  1; //跟CPU核数相关，数值越大，并发能力越强

error_log  /var/log/nginx/error.log warn; //错误日志存放位置
pid        /var/run/nginx.pid;

// 以上统称为全局块
events {
    worker_connections  1024;//设置最大并发数，数值越大，并发能力越强
}

//以上为events块
http {
    include       /etc/nginx/mime.types;  //引入mime.types中存放的媒体类型
    default_type  application/octet-stream;

    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';

    access_log  /var/log/nginx/access.log  main;

    sendfile        on;
    #tcp_nopush     on;

    keepalive_timeout  65;

    #gzip  on;

    include /etc/nginx/conf.d/*.conf; //引入conf.d目录下以.conf结尾的配置文件
}

//以上是http块
```

```json
server {
    listen       80;  //Nginx监听的端口号
    listen  [::]:80;
    server_name  localhost; //Nginx接收请求的IP或域名

    location / { //请求响应
        root   /usr/share/nginx/html;
        index  index.html index.htm;
    }

    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   /usr/share/nginx/html;
    }


}
```

### 修改docker-compose

```yml
version: '3.1'
services:
  nginx:
    restart: always
    image: daocloud.io/library/nginx:latest
    container_name: nginx
    ports:
        - 80:80
		volumes:
			- /opt/docker_nginx/conf.d/:/etc/nginx/conf.d
```



## 反向代理

### 正向代理

* 正向代理服务由客户端设立
* 客户端了解代理服务器和目标服务器都是谁
* 帮助咱们实现突破访问权限，提高访问速度，对目标服务器隐藏客户端的IP地址

![image-20200903102333770](http://img.hjxie.icu/image-20200903102333770.png)

### 反向代理

* 反向代理是配置在服务端的
* 客户端不知道访问的是哪一台服务器
* 达到负载均衡，并且可以隐藏服务器真正的ip地址

![image-20200903102956406](http://img.hjxie.icu/image-20200903102956406.png)

### Nignx实现反向代理

```json
server{
    listen 80;
    server_name localhost;

    #基于反向代理访问到服务器
    location / {
        proxy_pass http://www.baidu.com/;
    }
    
}
```

### location匹配

```json
location =  // 精准匹配


location /    // 匹配所有以/开头的

location ^~ 
location ~ 
location ~*
```



## 负载均衡

> Nginx为我们默认提供了三种负载均衡的策略

### 轮询

> 将客户端发起的请求，平均分配给每一台服务器

### 权重

> 将客户端的请求，根据服务器的权重值的不同，分配不同的数量

### ip_hash

> 基于发起请求的客户端的IP地址不同，他始终会将请求发送到指定的服务器上





## 动静分离

## 集群