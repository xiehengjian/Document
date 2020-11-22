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

分析：

实现一个结构体，其中包含两个栈，一个是正常栈，另一个是保存最小值的栈。

出栈入栈时，正常栈均正常出入，我们重点关注最小栈。

入栈时，如果入栈的值比当前最小值更小，则将其入最小栈

出栈时，如果当前出栈的值是最小值，则最小栈也出栈。

需要注意的是，当入栈的值等于当前最小值时，也需要将其入栈。否则，假设栈内最小值为x有两个，但min栈中只有一个x，当出栈一个x时，最小栈的唯一的x被出栈，而此时最小值仍是x。

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

> 编写一个类,用两个栈实现队列,支持队列的基本操作(add、poll、peek)

[LeetCode](https://leetcode-cn.com/problems/yong-liang-ge-zhan-shi-xian-dui-lie-lcof/)

分析：

利用栈的两次逆序变顺序来实现队列。

构造一个出栈一个入栈，当压入队列的时候，就压入入栈。

当出队列时，就从出栈里弹出元素

需要注意的是，当出栈里没有元素时，就将入栈里所有元素都给压入出栈，当两栈均空时，则没有元素了。

```go
type CQueue struct {
    pushStack []int 
    popStack []int
}

func Constructor() CQueue {
    return CQueue{
        pushStack:make([]int,0),
        popStack:make([]int,0),
    }
}

func (this *CQueue) AppendTail(value int)  {
    this.pushStack=append(this.pushStack,value)
}
func (this *CQueue) DeleteHead() int {
    if len(this.popStack)==0{
        for len(this.pushStack)!=0{
            this.popStack=append(this.popStack,this.pushStack[len(this.pushStack)-1])
            this.pushStack=this.pushStack[:len(this.pushStack)-1]
        }  
    }
    if len(this.popStack)==0{
        return -1
    }
    res:=this.popStack[len(this.popStack)-1]
    this.popStack=this.popStack[:len(this.popStack)-1]
    return res
}
```



### 如何仅用递归函数和栈操作逆序一个栈

> 一个栈依次压入1、2、3、4、5,那么从栈顶到栈底分别为5、4、3、2、1。将这个栈转置后,从栈顶到栈底为1、2、3、4、5,也就是实现栈中元素的逆序,但是只能用递归函数来实现,不能用其他数据结构。

[nowcoder](https://www.nowcoder.com/questionTerminal/1de82c89cc0e43e9aa6ee8243f4dbefd)

```go
package main

import "fmt"

func main(){
	num:=0
	fmt.Scanln(&num)
	stack:=make([]int,num)

	for i:=0;i<num;i++{
		fmt.Scan(&stack[i])
	}
	reverse(&stack)
	for _,v:=range stack{
		fmt.Printf("%d ",v)
	}


}

func getAndRemoveLastElement(stack *[]int)int{
	result:=(*stack)[len(*stack)-1]
	*stack=(*stack)[:len(*stack)-1]
	if len(*stack)==0{
		return result
	}else{
		last:=getAndRemoveLastElement(stack)
		*stack=append(*stack,result)
		return last
	}
	return result
}

func reverse(stack *[]int){
	if len(*stack)==0{
		return
	}
	i:=getAndRemoveLastElement(stack)
	reverse(stack)
	*stack=append(*stack,i)
}
```

### 猫狗队列

[nowcoder](https://www.nowcoder.com/questionTerminal/8a7e04cff6a54b7095b94261d78108f5)

```go

```



### 用一个栈实现另一个栈的排序

[nowcoder](https://www.nowcoder.com/questionTerminal/ff8cba64e7894c5582deafa54cca8ff2)




### 用栈来求解汉诺塔问题
> 汉诺塔问题比较经典,这里修改一下游戏规则:现在限制不能从最左侧的塔直接移动到最右侧,也不能从最右侧直接移动到最左侧,而是必须经过中间。求当塔有N层的时候, 打印最优移动过程和最优移动总步数

[LeetCode](https://leetcode-cn.com/problems/hanota-lcci/)

### 生成窗口最大值数组

> 给定一个数组 `nums` 和滑动窗口的大小 `k`，请找出所有滑动窗口里的最大值。

例如：

```txt
输入: nums = [1,3,-1,-3,5,3,6,7], 和 k = 3
输出: [3,3,5,5,6,7] 
解释: 

  滑动窗口的位置                最大值
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
```

[LeetCode](https://leetcode-cn.com/problems/hua-dong-chuang-kou-de-zui-da-zhi-lcof/)



### 构造数组的 Max Tree

[nowcoder](https://www.nowcoder.com/questionTerminal/a502c7c3c65e41fdaf65eec9e0654dcb)

### 求最大子矩阵的大小

[nowcoder](https://www.nowcoder.com/questionTerminal/a5a0b05f0505406ca837a3a76a5419b3)



### 最大值減去最小值小于或等于num的子数组数量

[newcoder](https://www.nowcoder.com/questionTerminal/fe79f97c890c448ca8c5f7e0fb8aba9dß)

## 第二章 链表问题



## 第三章 二叉树问题

## 第四章 递归和动态规划

## 第五章 字符串问题

## 第六章 大数据和空间限制

## 第七章 位运算

## 第八章 数组和矩阵问题

## 第九章 其他题目



