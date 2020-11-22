---
title: 程序员算法面试指南
date: 2020-11-22
sidebar: 'auto'
categories:
 - 算法
tags:
 - 算法
publish: true
---

::: tip 
左程云老师所主著《程序员算法面试指南》的Golang实现
:::

## 第一章 栈和队列

### 设计一个由getMin功能的栈

> 实现一个特殊的栈,在实现栈的基本功能的基础上,再实现返回栈中最小元素的操作。

[LeetCode](https://leetcode-cn.com/problems/min-stack/)

```go
type MinStack struct {
    stack []int
    min []int

}
/** initialize your data structure here. */
func Constructor() MinStack {
    return MinStack{
        stack:make([]int,0),
        min:make([]int,0),
    }
}


func (this *MinStack) Push(x int)  {
    min:=this.GetMin()
    if x<=min{
        this.min=append(this.min,x)
    }
    this.stack=append(this.stack,x)
}


func (this *MinStack) Pop()  {
    if len(this.stack)==0{
        return 
    }
    if this.GetMin() == this.Top(){
        this.min=this.min[:len(this.min)-1]
    }
    this.stack=this.stack[:len(this.stack)-1]
}


func (this *MinStack) Top() int {
    if len(this.stack)==0{
        return 0
    }
    return this.stack[len(this.stack)-1]

}


func (this *MinStack) GetMin() int {
    if len(this.min)==0{
        return 1<<31
    }
    return this.min[len(this.min)-1]
}
```



### 由两个栈组成的队列

### 如何仅用递归函数和栈操作逆序一个栈

### 猫狗队列

### 用一个栈实现另一个栈的排序

### 用栈来求解汉诺塔问题

### 生成窗口最大值数组

### 构造数组的 Max Tree

### 求最大子矩阵的大小

### 最大值減去最小值小于或等于num的子数组数量



## 第二章 链表问题



## 第三章 二叉树问题

## 第四章 递归和动态规划

## 第五章 字符串问题

## 第六章 大数据和空间限制

## 第七章 位运算

## 第八章 数组和矩阵问题

## 第九章 其他题目



