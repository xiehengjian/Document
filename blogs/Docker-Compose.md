# Docker-Compose

> 之前运行一个镜像，需要添加的大量参数
>
> 可以通过Docker-Compose编写这些参数，可以批量的管理容器
>
> 只需要通过一个docker-compose.yml文件去维护即可

## 环境准备

### 下载

https://github.com/docker/compose/releases

## 管理容器

### yml文件

> yml文件以key: value方式来指定配置信息
>
> 多个配置信息以换行+缩进的方式来区分

```yml
version: '3.1'
service: 
  mysql: #服务的名称
    restart: always #只要docker启动，这个容器就一起启动
    image: daocloud.io/library/mysql:5.7.4 #指定镜像路径
    container_name: mysql #指定容器名称
    ports: 
      - 3306:3306
      - 7000:7000 #指定端口号的映射
    environment:
    	MYSQL_ROOT_PASSWORD: root #指定MySQL的 root用户密码
    	TZ: Asia/Shanghai #指定时区
    voulmes:
    	- /opt/docker_mysql/data:/var/lib/mysql
    	
  tomcat: #继续写即可
  	...
```

### docker-compose命令

> 在使用docker-compose命令时，默认执行当前目录下的yml文件

#### 启动容器

```shell
docker-compose up -d
```

