# MySQL常用命令

## 连接数据库

```shell
$ mysql [-h<ip>] [-P<port>] -uroot -p
```

## 查看数据库信息

### 查看数据库列表

```mysql
> show databases;
```

### 使用某数据库

```mysql
> use <db_name>;
```



### 查看表列表

```mysql
> show tables;
```

### 查看数据库的创建SQL语句

```mysql
> show create database <db_name>
```

### 查看表的创建SQL语言

```mysql
> show create table <tb_name>;
```





## DDL

> 数据定义语言：创建、删除数据库和表等对象

### 创建

#### 创建数据库

```mysql
> create database <db_name>;
```



#### 创建表

```mysql
> create table <tb_name> (<field> <type> ...)
```

### 删除

#### 删除数据库

```mysql
> drop database <db_name>
```

#### 删除表

```mysql
> drop table <tb_name>;
```

### 修改

#### 修改表名

```mysql
> alter table <tb_name> rename to <new_tb_name>
```



#### 删除、添加、修改表字段

```mysql
> alter table <tb_name> drop <field>

> alter table <tb_name> add <field> <type>

> alter table <tb_name> modify <field> <new_type>
> alter table <tb_name> change <field> <new_field> <new_type>
```

#### 修改字段默认值

```mysql
> alter table <tb_name> alter <field> set default <value>
```

## DCL

> 数据控制语言：确认、取消对数据库中数据的更改

### 确认SQL语句执行

```mysql
> commit;
```

### 撤销SQL语句执行

```mysql
> rollback;
```



## DML

> 数据操纵语言：查询、变更表中记录

==该部分主要为SQL语句，故不详细记录，在SQL语句相关文档中专门叙述==

### 查询

```mysql
select <field> ... from <tb_name>
```

### 插入

``` mysql
insert into <tb_name>(<field>...) values(<value>...) 
```

### 更新

``` mysql
update <tb_name> set <field>=<value> where <field>=<value>
```

### 删除

```mysql
delete from <tb_name> where <field>=<value>
```













































