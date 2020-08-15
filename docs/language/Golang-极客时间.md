# 开篇



ps:学习编程时应该跟着敲代码，不要光看，一个是练习熟练度，一个是打字也快啊不是。、

主要是方便后期看，因为代码看描述的不清楚的，看代码才清楚

## Golang的由来

### 软件开发的挑战

	* 多核硬件架构
	* 超大规模分布式计算集群
	* web模式导致的前所未有的开发规模和更新速度



 特性

* 简单，C语言有37个关键字，Go有25个
* 并发编程
* 内存管理
* 垃圾回收
* 编译类型静态类型语言，高效
* 简洁清晰的依赖管理、独特的接口类型设计





### 应用程序入口

1. 必须是main包 `package main`
2. 必须是main方法 `func mian()`
3. 文件名不需要是`main.go`
4. main方法是没有参数的，可以通过`os.Args`获取命令行参数
5. main方法是没有返回值的，不能return，可以通过`os.Exit()`来退出程序



### 编写测试程序

1. 源码文件以`_text`结尾：`xxx_test.go`
2. 测试方法以`Test`开头：`func TextXXX(t *testing.T){...}`



### 变量赋值

与其他主要编程语言的差异

* 赋值可以进行自动类型推断
* 在一个赋值语句中可以对多个变量进行同时赋值
* 可以用`a,b=b,a`来交换变量的值



快速设置连续值

```go
const(
  Monday = iota + 1
  Tuesday
  Wednesday
  Thursday

)

const(
  Open = 1 << iota
  Close
  Pending
)
```



### 类型转换

1. Go语言不允许隐式类型转换
2. 别名和原有类型也不能进行隐式类型转换

### 类型的预定义值

1. `math.MaxInt64`

2. `math.MaxFloat64`

3. `Math.MaxUint32`

   

   

   

### 指针类型

与其他主要编程语言的差异

1. 不支持指针运算
2. string是值类型，其默认的初始化值为空字符串，而不是nil

### 运算符

1. Go语言没有前置的++和--

### Map

* 当访问的Key不存在时，仍会返回零值，不能通过返回nil来判断元素是否存在



### Map与工厂模式

* Map的value可以是一个方法
* 与Go的Dock type接口方式一起，可以方便的实现单一方法对象的工厂模式



### 实现Set

Go的内置集合中没有Set实现，可以map[type]bool

1. 元素的唯一性
2. 基本操作
   1. 添加元素
   2. 判断元素是否存在
   3. 删除元素
   4. 元数个数



### 字符串

与其他主要编程语言的差异

1. string是数据类型，不是指针或引用类型
2. string是只读的byte slice，len函数可以返回它包含的byte数
3. string的byte数组可以存放任何数据



### Unicode和UTF8

1. Unicode是一种字符集
2. UTF8是unicode的存储实现（转换为字节序列的规则）



### 常用字符串函数

1. strings

2. strcov

### 函数：一等公民

与其他编程语言的差异

1. 可以有多个返回值
2. 所有的参数都是值传递，slice，map,channel有传引用的错觉
3. 函数可以作为变量的值
4. 函数可以作为参数和返回值





### 可变参数

1. 参数列表为 `<name> ...<type>`
2. 函数接收到的是一个数组，通过遍历可以获取参数



### 延迟运行

* 即defer函数，栈模式执行



## Go的面向对象编程

### 数据的封装

* 结构体

### 行为的定义

```go
func (e <strcutname>) {...}
func (e *<structname>) {...}

//第一种定义方式在实例调用对应方法后，实例的成员会进行值复制，
//为了避免内存的拷贝，我们使用第二种定义方式
```

### 接口

* 定义

  ```go
  type Programmer interface{
  	WriteHelloWorld() Code
  }
  ```

* 实现

  ```go
  type GoProgrammer struct{
  }
  
  func (p *GoProgrammer) WriteHelloWorld() Code{
  	return "fmt.Println(\"Hello World!\")"
  }
  ```

与其他语言的差异

* 接口为非入侵性，实现不依赖于接口定义
* 所以接口的定义可以包含在接口使用者包内



### 错误处理

与其他语言的差异

* 没有异常机制
* error类型实现了error接口
* 可以通过errors.New来快速创建错误实例







