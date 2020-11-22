# Mysql远程连接

## 确认监听

```shell
$ netstat -tulpen
```

确认mysql是否监听了所有地址和3306端口

若只监听localhost，则前往配置文件找到以下内容并更改

```cnf
bind-address = 127.0.0.1

改为
bind-address = 0.0.0.0
```

安全组放行3306

## 授权访问

```
mysql>GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY 'root' WITH GRANT OPTION; 
mysql>FLUSH PRIVILEGES; 
```

## 重启数据库

```shell
$ service mysql restart
```

