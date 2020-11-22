# MySQL安装指南

## 安装服务端

```shell
$ sudo apt-get install mysql-server
```

## 安装客户端

```shell
$ sudo apt-get install mysql-client
```

## 启动mysql

```shell
$ service mysql start
```

## 进入mysql

```shell
mysql -uroot -p<password>
#初次登录没有密码，可忽略

```

## 初始化密码

```mysql
use mysql;

update mysql.user set authentication_string=password('root') where user='root' and Host='localhost'

update user set plugin="mysql_native_password"

flush privileges

quit;
```

## 重启mysql

```shell
$ sudo service mysql restart
```





# MySQL卸载指南

## 查看依赖项

```shell
$ dpkg --list|grep mysql
```



## 卸载

```shell
$ sudo apt remove mysql-common

$ sudo apt autoremove --purge mysql-server
```

## 清楚残留数据

```shell
$ dpkg -l|grep ^rc|awk '{print$2}'|sudo xargs dpkg -P
```



## 遇到的问题

Could not read response to hello message from hook [ ! -f /usr/bin/snap ]

```shell
sudo rm -rf /etc/apt/apt.conf.d/20snapd.conf
```

