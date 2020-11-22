> 写出下面代码输出内容。

```golang
package main

import (
    "fmt"
)

func main() {
    defer_call()
}

func defer_call() {
    defer func() { fmt.Println("打印前") }()
    defer func() { fmt.Println("打印中") }()
    defer func() { fmt.Println("打印后") }()

    panic("触发异常")
}
```

解析：

defer是函数结束前执行，并且是先进后出的顺序。

而panic需要等defer结束后才会向上传递。当出现panic时，表示函数要终止了，此时defer执行，执行完毕后执行panic

故输出为

```txt
打印后
打印中
打印前
panic: 触发异常
```



> 以下代码有什么问题，说明原因

```go
type student struct {
    Name string
    Age  int
}

func pase_student() {
    m := make(map[string]*student)
    stus := []student{
        {Name: "zhou", Age: 24},
        {Name: "li", Age: 23},
        {Name: "wang", Age: 22},
    }
    for _, stu := range stus {
        m[stu.Name] = &stu
    }

}
```

分析：

range这样遍历的元素是值的拷贝，修改是不会影响原数据的



> 下面的代码会输出什么。说明原因

```go
func main() {
    runtime.GOMAXPROCS(1)
    wg := sync.WaitGroup{}
    wg.Add(20)
    for i := 0; i < 10; i++ {
        go func() {
            fmt.Println("A: ", i)
            wg.Done()
        }()
    }
    for i := 0; i < 10; i++ {
        go func(i int) {
            fmt.Println("B: ", i)
            wg.Done()
        }(i)
    }
    wg.Wait()
}
```

分析：

由于goroutine的运行顺序是无法决定的，因此无法确定具体的输出内容。

但是A后输出一定为10,因为其中的i是外部for的变量，地址不变化，遍历完成后i为10，循环结束后协程才启动

B后则从0到9，因为其i为函数参数，与外部的for中的i是两个变量



> 下面的代码会输出什么

```go
type People struct{}

func (p *People) ShowA() {
    fmt.Println("showA")
    p.ShowB()
}
func (p *People) ShowB() {
    fmt.Println("showB")
}

type Teacher struct {
    People
}

func (t *Teacher) ShowB() {
    fmt.Println("teacher showB")
}

func main() {
    t := Teacher{}
    t.ShowA()
}
```

分析：

这是Golang的组合模式，可以实现OOP的继承。 被组合的类型People所包含的方法虽然升级成了外部类型Teacher这个组合类型的方法（一定要是匿名字段），但它们的方法(ShowA())调用时接受者并没有发生变化。 此时People类型并不知道自己会被什么类型组合，当然也就无法调用方法时去使用未知的组合者Teacher类型的功能。

```txt
showA
showB
```



> 下面代码会触发异常吗？请详细说明**

```go
func main() {
    runtime.GOMAXPROCS(1)
    int_chan := make(chan int, 1)
    string_chan := make(chan string, 1)
    int_chan <- 1
    string_chan <- "hello"
    select {
    case value := <-int_chan:
        fmt.Println(value)
    case value := <-string_chan:
        panic(value)
    }
}
```

分析：

select会随机选择一个可用通道做收发操作。 所以代码是有可能触发异常，也有可能不会。 单个chan如果无缓冲时，将会阻塞。但结合 select可以在多个chan间等待执行。有三点原则：

- select 中只要有一个case能return，则立刻执行。
- 当如果同一时间有多个case均能return则伪随机方式抽取任意一个执行。
- 如果没有一个case能return则可以执行”default”块。

> 下面代码输出什么

```go
func calc(index string, a, b int) int {
    ret := a + b
    fmt.Println(index, a, b, ret)
    return ret
}

func main() {
    a := 1
    b := 2
    defer calc("1", a, calc("10", a, b))
    a = 0
    defer calc("2", a, calc("20", a, b))
    b = 1
}
```

分析：

defer是最后执行，但是defer中的参数使用了函数是立即执行的，所以index为10和20则顺序正常执行，最后执行defer

```txt
10 1 2 3
20 0 2 2
2 0 2 2
1 1 3 4
```

> 请写出以下输入内容

```go
func main() {
    s := make([]int, 5)
    s = append(s, 1, 2, 3)
    fmt.Println(s)
}
```

分析：

make初始化是有默认值的

```txt
[0 0 0 0 0 1 2 3]
```

> 下面的代码有什么问题

```go
type UserAges struct {
	ages map[string]int
	sync.Mutex
}

func (ua *UserAges) Add(name string, age int) {
	ua.Lock()
	defer ua.Unlock()
	ua.ages[name] = age
}

func (ua *UserAges) Get(name string) int {
	if age, ok := ua.ages[name]; ok {
		return age
	}
	return -1
}
```





