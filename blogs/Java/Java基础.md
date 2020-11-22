# Java基础

## 注释、标识符、关键字

#### 注释

##### 单行注释

```java
//单行注释
```



##### 多行注释

```java
/*
多行注释
*/
```



##### 文档注释

```java
/**
* 文档注释
*/
```

#### 标识符

标识符是允许作为变量（函数、类等）名称的有效字符串。

#### 关键字

关键字是有特殊含义的符号，也叫做“保留字”

## 数据类型

### 基本类型

#### 数值类型

> JDK7新特性，数字之间可用下划线分割

```java
int num = 1000_000_000;
```



##### 整数类型

###### byte类型

> 占1个字节，8位二进制，-128~127
```java
public class demo{
    public static void main(String[] args) {
        byte num = 10;
        System.out.print(num);
    }
}
```


###### short类型

> 占2个字节，16位二进制，-32768~32767
```java
public class demo{
    public static void main(String[] args) {
        short num = 10;
        System.out.print(num);
    }
}
```
###### int类型

> 占4个字节，32位二进制，-2147483648~2147483647



```java
public class demo{
    public static void main(String[] args) {
        int num = 10;
        System.out.print(num);
    }
}
```



###### long类型

> 占8个字节，64位二进制，-9223372036854775808~9223372036854775807
```java
public class demo{
    public static void main(String[] args) {
        long num = 10L;//Long类型要在数字后面加L
        System.out.print(num);
    }
}
```


###### 进制

```java
public class demo{
    public static void main(String[] args) {
      int a = 10;   //十进制
      int b = 010;  //八进制
      int c = 0x10; //十六进制
    }
}
```



##### 浮点类型

###### float类型

> 占4个字节
```java
public class demo{
    public static void main(String[] args) {
        float num = 10.1F;//float类型要在数字后面加F
        System.out.print(num);
    }
}
```
###### double类型

> 占8个字节
```java
public class demo{
    public static void main(String[] args) {
        double num = 10.1;
        System.out.print(num);
    }
}
```
##### 字符类型

###### char类型

> 占2个字节
```java
public class demo{
    public static void main(String[] args) {
        char name = '好';//单引号、单字符
        System.out.print(name);
    }
}
```
#### 布尔类型

> True or false
```java
public class demo{
    public static void main(String[] args) {
        boolean flag = true;
        System.out.print(flag);
    }
}
```
### 引用类型

#### 类

#### 接口

#### 数组

## 类型转换

### 隐式类型转换

Byte,short,char->int->long->float->double

按照优先级自动进行转换

### 强制类型转换

```java
type new=(type) old
```

### 注意

1. 不能对布尔值进行转换
2. 不能把对象类型转换为不想干的类型
3. 高容量->低容量，强制转换
4. 转换可能会造成内存溢出

## 包机制

为了更好的组织类，Java提供了包机制，用于区别类名的命名空间

包语句的语法格式为：

```java
package pkg1[. pkg2[. pkg3...]];
```

==一般使用公司域名倒置作为包名==

为了能够使用某一个包的成员，我们需要在Java程序中明确导入该包。

```java
import package1[.package2...].(classname|*)
```



