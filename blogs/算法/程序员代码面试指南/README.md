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

```go
func hanota(A []int, B []int, C []int) []int {
	full:=len(A)
	step:=[2]int{0,0}
	for len(C)!=full{
		if (step[0]!=2||step[1]!=1)&&len(A)!=0&&(len(B)==0||A[len(A)-1]<B[len(B)-1]){
			step=[2]int{1,2}
			B=append(B,A[len(A)-1])
			A=A[:len(A)-1]
		}else if (step[0]!=1||step[1]!=2)&&len(B)!=0&&(len(A)==0||B[len(B)-1]<A[len(A)-1]){
			step=[2]int{2,1}
			A=append(A,B[len(B)-1])
			B=B[:len(B)-1]
		}else if( step[0]!=3||step[1]!=2)&&len(B)!=0&&(len(C)==0||B[len(B)-1]<C[len(C)-1]){
			step=[2]int{2,3}
			C=append(C,B[len(B)-1])
			B=B[:len(B)-1]
		}else if (step[0]!=2||step[1]!=3)&&len(C)!=0&&(len(B)==0||C[len(C)-1]<B[len(B)-1]){
			step=[2]int{3,2}
			B=append(B,C[len(C)-1])
			C=C[:len(C)-1]
		}
	}
	return C

}
```



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

```go
func maxSlidingWindow(nums []int, k int) []int {
    if(len(nums)==0 || k<1 ||len(nums)<k){
        return make([]int,0)
    }
    qmax:=make([]int,0)//创建队列
    res:=make([]int,len(nums)-k+1)//保存结果
    index:=0
    for i:=0;i<len(nums);i++{//遍历数组
        for len(qmax)!=0 && nums[qmax[len(qmax)-1]]<=nums[i]{//出现了更大的值，
            qmax=qmax[:len(qmax)-1]//就将小值弹出
        }
        qmax=append(qmax,i)
        if qmax[0]==i-k{//最大值过期
            qmax=qmax[1:]
        }
        if i>=k-1{//遍历到窗口
            
            res[index]=nums[qmax[0]]
            index++
        }
    }
    return res

}
```



### 构造数组的 Max Tree

[nowcoder](https://www.nowcoder.com/questionTerminal/a502c7c3c65e41fdaf65eec9e0654dcb)

### 求最大子矩阵的大小

[nowcoder](https://www.nowcoder.com/questionTerminal/a5a0b05f0505406ca837a3a76a5419b3)



### 最大值減去最小值小于或等于num的子数组数量

[newcoder](https://www.nowcoder.com/questionTerminal/fe79f97c890c448ca8c5f7e0fb8aba9dß)

## 第二章 链表问题

### 打印两个有序链表的公共部分

> 给定两个有序链表的头指针 head I和head2,打印两个链表的公共部分。

### 在单链表和双链表中删除倒数第K个节点

> 分别实现两个函数,一个可以删除单链表中倒数第K个节点,另一个可以删除双链表中倒数第K个节点。

### 删除链表的中间节点和a/b处的节点

### 反转单向和双向链表

### 反转部分单向链表

### 环形单链表的约瑟夫问题

### 判断一个链表是否为回文结构

### 将单向链表按某值划分成左边小、中间相等、右边大的形式

### 复制含有随机指针节点的链表

### 两个单链表生成相加链表

### 两个单链表相交的一系列问题

### 将单链表的每K个节点之间逆序

### 删除无序单链表中值重复出现的节点

### 在单链表中删除指定值的节点

### 将搜索二叉树转換成双向链表

### 单链表的选择排序

### 一种怪异的节点删除方式

### 向有序的环形单链表中插入新节点

### 合并两个有序的单链表

### 按照左右半区的方式重新组合单链表



## 第三章 二叉树问题

### 分别用递归和非递归方式实现二叉树先序、中序和后序遍历

### 打印二叉树的边界节点

### 如何较为直观地打印二叉树

### 二叉树的序列化和反序列化

### 遍历二叉树的神级方法

### 在二叉树中找到累加和为指定值的最长路径长度

### 找到二叉树中的最大搜索二叉子树

### 找到二又树中符合搜索二叉树条件的最大拓扑结构

### 二叉树的按层打印与 Zigzag打印

### 调整搜索二叉树中两个错误的节点

### 判断t1树是否包含t2树全部的拓扑结构

### 判断t1树中是否有与2树拓扑结构完全相同的子树

### 判断二叉树是否为平衡二叉树

### 根据后序数组重建搜索二叉树

### 判断一棵二叉树是否为搜索二叉树和完全二叉树

### 通过有序数组生成平衡搜索二叉树

### 在二叉树中找到一个节点的后继节点

### 在二又树中找到两个节点的最近公共祖先

### Tarjan算法与并查集解决二叉树节点间最近公共祖先的批量查询问题

### 二叉树节点间的最大距离问题

### 先序、中序和后序数组两两结合重构二叉树

### 通过先序和中序数组生成后序数组

### 统计和生成所有不同的二叉树

### 统计完全二叉树的节点数



## 第四章 递归和动态规划

### 斐波那契系列问题的递归和动态规划

### 矩阵的最小路径和

### 换钱的最少货币数

### 换钱的方法数

### 最长递增子序列

### 汉诺塔问题

### 最长公共子序列问题

### 最长公共子串问题

### 最小编辑代价

### 字符串的交错组成

### 龙与地下城游戏问题

### 数字字符串转换为字母组合的种数

### 表达式得到期望结果的组成种数

### 排成一条线的纸牌博弈问题

### 跳跃游戏

### 数组中的最长连续序列

### N皇后问题

## 第五章 字符串问题

### 判断两个字符串是否互为变形词

### 字符串中数字子串的求和

### 去掉字符串中连续出现k个0的子串

### 判断两个字符串是否互为旋转词

### 将整数字符串转成整数值

### 替换字符串中连续出现的指定字符串

### 字符串的统计字符串

### 判断字符数组中是否所有的字符都只出现过一次

### 在有序但含有空的数组中查找字符串

### 字符串的调整与替换

### 翻转字符串

### 数组中两个字符串的最小距离

### 添加最小字符使字符串整体都是回文字符串

### 括号字符串的有效性和最长有效长度

### 公式字符串求值

### 0左边必有1的二进制字符串数量

### 拼接所有字符串产生字典顺序最小的大写字符串

### 找到字符串的最长无重复字符子串

### 找到被指的新类型字符

### 最小包含子串的长度

### 回文最少分割树

### 字符串匹配问题

### 字典树（前缀树）的实现

## 第六章 大数据和空间限制

### 认识布隆过滤器

### 只用2GB内存在20亿个整数中找到出现次数最多的数

### 40亿个非负整数中找到没出现的数

### 找到100亿个URL中重复的URL以及搜索词汇的top K问题

### 40亿个非负整数中找到出现两次的数和所有数的中位数

### 一致性哈希算法的基本原理

## 第七章 位运算

### 不用额外变量交换两个整数的值

### 不用任何比较判断找出两个数中较大的数

### 只用位运算不用算术运算实现整数的加减乘除运算

### 整数的二进制表达式中有多少个1

### 在其他数都出现偶数次的数组中找到出现奇数次的数

### 在其他数都出现K次的数组中找到只出现一次的数

## 第八章 数组和矩阵问题

### 转圈打印矩阵

### 将正方形矩阵顺时针转动90°

### “之”字形打印矩阵

### 找到无序数组中最小的K个数

### 需要排序的最短子数组长度

### 在数组中找到出现次数大于N/K的数

### 在行列都排好序的矩阵中找数

### 最长的可整合子数组的长度

### 不重复打印排序数组中相加和为给定值的所有二元组和三元组

### 未排序正数数组中累加和为给定值的最长子数组长度

### 未排序数组中累加和为给定值的最长子数组系列问题

### 未排序数组中累加和小于或等于给定值的最长子数组长度

### 计算数组的最小和

### 自然数数组的排序

### 奇数下标都是奇数或者偶数下标都是偶数

### 子数组的最大累加和问题

### 子矩阵的最大累加和问题

### 在数组中找到一个局部最小的位置

### 数组中子数组的最大累乘积

### 打印N个数组整体最大的Top K

### 边界都是1的最大正方形大小

### 不包含本位置值的累乘数组

### 数组的partition调整

### 求最短通路值

### 数组中未出现的最小正整数

### 数组排序之后的相邻数的最大差值

## 第九章 其他题目

### 从5随机到7随机及其扩展

### 一行代码求两个数的最大公约数

### 有关阶乘的两个问题

### 判断一个点是否在矩形内部

### 判断一个点是否在三角形内部

### 折纸问题

### 蓄水池算法

### 设计有setAll功能的哈希表

### 最大的leftMax与rightMax之差的绝对值

### 设计可以变更的缓存结构

### 设计RandomPool结构

### 调整[0,x)区间上的数出现的概率

### 路径数组变为统计数组

### 正数数组的最小不可组成和

### 一种字符串和数字的对应关系

### 1到n中1出现的次数

### 从N个数中等概率打印M个数

### 判断一个数是否是回文数

### 在有序旋转数组中找到最小值

### 在有序旋转数组中找到一个数

### 数字的英文表达和中文表达

### 分糖果问题

### 一种消息接收并打印的结构设计

### 设计一个没有扩容负担的堆结构

### 随时找到数据流的中位数

### 在两个长度相等的排序数组中找到上中位

### 在两个排序数组中找到第K小的数

### 两个有序数组间相加和的TOP K问题

### 出现次数的TOP K问题

### Manacher算法

### KMP算法

### 丢棋子问题

### 画匠问题

### 邮局选址问题





