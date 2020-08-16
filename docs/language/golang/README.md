---
title: Golang
date: 2020-8-10
categories:
 - 编程语言
tags:
 - Golang
---


::: tip
本文记录学习Golang的内容
:::

<!-- more -->
## Golang发展历史

1. 诞生历史

   1. 诞生于2006年1月2日下午15点4分5秒

   2. 2009年正式发布开源

   3. 2012年第一个正式版本Go 1.0发布

   4. 2017年8月24号，Go 1.9正式发布

      > 大幅提升了GC时间

2. 发展情况

   从95名上升到15名

## 开发环境搭建

1. Go安装
   1. 进入官网 http://golang.org/dl/
   2. 选择对应版本并安装

## Go常用命令

* `go run <file>`
  * 快速执行go文件，类似执行脚本
* `go build <file>`
  * 编译程序，生成二进制可执行文件
* `go install`
  * 安装可执行文件到bin目录
* `go test`
  * 执行单元测试或压力测试
* `go env`
  * 显示go相关的环境变量
* `go fmt`
  * 格式化源代码

## Go语言特性

1. 垃圾回收

   1. 内存自动回收，不需要开发人员管理内存
   2. 开发人员专注业务实现，降低心智负担
   3. 只需要new分配内存，不需要释放

2. 天然并发

   1. 从语言层面支持并发，

      ```go
      func cal(){
      //大量计算
      }
      
      func main(){
      	go cal()//创建新线程，不阻塞后续代码执行
      }
      ```

      

   2. Goroutine,轻量级线程，可以创建成千上万个goroute

   3. channel

      1. 管道，类似unix/linux中的pipe
      2. 多个goroute之间通过channel进行通信
      3. 支持任何类型

   4. 多返回值

      1. 一个函数返回多个值

   5. 编译型语言

      1. 性能只比C语言差10%
      2. 开发效率与python、PHP相当



## 字符串类型

* 字符串占位符 %s,万能占位符 %v

1. 字符串常用操作

   1. 长度

      `len(str)`

   2. 拼接

      ` +` ` fmt.Sprintf`

   3. 分割

      `strings.Split()`

   4. 包含

      ` strings.Contains()`

   5. 前缀或后缀判断

      `strings.HasPrefix,strings.HasSuffix`

   6. 子串出现的位置

      `strings.Index().strings.LastIndex()`

   7. 合并

      `strings.Join(a[]string,sep string)`



## 字符串原理

1. 字符串底层是一个byte数组，所以可以和[]byte类型互相转换
2. 字符串之中的字符是不能修改的，那如何修改
3. 字符串是由byte字节组成的，所以字符串的长度是byte字节的长度



## 时间和日期

1. time包
2. time.Time类型，用来表示时间
3. 获取当前时间 now:=time.Now()
4. Time.Now().Day(),Time.Now().Minute(),Time.Now().Month(),Time.Now().Year(),



## 内置函数

1. close：主要用来关闭channel
2. len：求长度，如string、array、slice、map、channel
3. new：分配内存，主要用来分配值类型，比如int、struct.返回指针
4. make：分配内存，主要用来分配引用类型，比如chan、map、slice
5. append：追加元素到array、slice中
6. panic和recover：做错误处理



## 闭包

一个函数和与其相关的引用环境组成的实体



```

```





## 反射

* 变量的内在机制
  * 类型信息，这部分是元信息，是预先定义好的
  * 值信息，是程序运行过程中动态改变的
* 反射与空接口
  * 空接口可以存储任何类型的变量
  * 给你一个空接口，怎么知道里面存储的是什么？
  * 在运行时动态的获取一个变量的类型信息和值信息，就叫反射
* 怎么分析
  * 内置包：reflect
  * 获取类型信息：reflect.TypeOf
  * 获取值信息：reflect.ValueOf



## 并发编程

1. 并发和并行
   1. 并发：同一时间段内执行多个操作
   2. 并行：同一时刻执行多个操作
2. goroutine初探
   1. 多线程
      1. 线程是由操作系统进行管理，处于内核态
      2. 线程之间进行切换，需要发生用户态到内核态的切换
      3. 系统中运行大量线程，系统会变的非常慢
      4. 用户态的线程，支持大量线程创建，也叫协程或goroutine
3. 多核控制
   1. 通过runtime包进行多核设置
   2. GOMAXPROCS设置当前程序运行时占用的cpu核数
   3. NumCPU获取当前系统的cpu核数
4. goroutine原理浅析
   1. 一个操作系统线程对应用户态多个goroutine
   2. 同时使用多个操作系统线程
   3. 操作系统线程对goroutine是多对多关系
5. channel介绍
   1. 本质上是一个队列，是一个容器
   2. 定义的时候需要指定容器中元素的类型
   3. var <name> chan <type>
6. 队列出入
   1. var a chan int
   2. 入队操作，a<-100
   3. 出队操作，data:=<-a



## workerpool

1. workerpool的实现
   1. 生产者、消费者模型，简单有效
   2. 控制goroutine的数量，防止goroutine泄露和暴涨
   3. 基于goroutine和chan，构建workerpool非常简单





## select和线程安全

1. select语义介绍和使用
2. 线程安全介绍
3. 互斥锁介绍和实战
4. 读写锁介绍和实战
5. 原子操作介绍







## 指针

1. 指针类型的变量存储的是一个地址，又叫指针类型或引用类型







![image-20200803163555512](https://bbs-upload.marginnote.cn/original/2X/0/086627c8a321d7a51a84a05b8b6b0a1e3229dce8.png)