## 为什么做爬虫项目

* 有一定复杂性
* 可以灵活调整项目的复杂性
* 平衡语言/爬虫之间的比重



## 网络爬虫分类

* 通用爬虫，如baidu，google
* 聚焦爬虫，从互联网获取结构化数据

## Go语言的爬虫库/框架

* `henrylee2cn/pholcus`
* `gocrawl`
* `colly`
* `hu17889/go_spider`



## 单任务版爬虫

* 获取并打印所有城市第一页用户的详细信息





## 文字编码

安装`text`

```
go get -g -v golang.org/x/text
```

```

```



### CSS选择器

> goquery

安装`goquery`

```shell
go get github.com/PuerkitoBio/goquery
```



### xpath

### 正则表达式



















Golang中各种http的发送方式

## 使用`http.Newrequest`

```go
package main

import (
	"fmt"
	"io"
	"net/http"
	"os"
)

func main() {
  //生成client 参数为默认,http.client结构体
	client := &http.Client{}
	
 //生成要访问的url，字符串
	url := "http://www.baidu.com"
	    
	//生成一个http.request，
	reqest, err := http.NewRequest("GET", url, nil)
	
	if err != nil {
		panic(err)
	}
	
	//执行生成的http.request
	response, _ := client.Do(reqest)
   
   //将结果定位到标准输出 也可以直接打印出来 或者定位到其他地方进行相应的处理
	stdout := os.Stdout
	_, err = io.Copy(stdout, response.Body)
   
   //返回的状态码
	status := response.StatusCode

	fmt.Println(status)

}
```



## 使用`client.get/post`

```go
func httpGet() {
    resp, err := http.Get("http://www.baidu.com")
    if err != nil {
        // handle error
    }
 
    defer resp.Body.Close()
    body, err := ioutil.ReadAll(resp.Body)
    if err != nil {
        // handle error
    }
 
    fmt.Println(string(body))
}
```



## 使用`http.Get/Post`

```go
func httpGet() {
  	//执行一个http请求
    resp, err := http.Get("http://www.baidu.com")
    if err != nil {
        // handle error
    }
 
    defer resp.Body.Close()
    body, err := ioutil.ReadAll(resp.Body)
    if err != nil {
        // handle error
    }
 
    fmt.Println(string(body))
}
```















































