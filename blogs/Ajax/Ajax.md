---
title: Docker常用命令
date: 2020-08-28
sidebar: 'auto'
categories:
 - 工具
tags:
 - Docker
publish: true
---
## Ajax实现步骤

1. 创建Ajax对象

   ```js
   var xhr = new XMLHttpRequest();
   ```

2. 告诉Ajax请求地址及方式

   ```js
   xhr.open('get','http://www/example.com');
   ```

3. 发起请求

   ```js
   xhr.send();
   ```

4. 获得响应

   ```js
   xhr.onload = function () {
     console.log(xhr.responseText);
   }
   ```

## 服务器响应的数据格式

在真实的项目中，服务器端大多数情况下会以JSON对象作为响应数据的格式，当客户端拿到响应数据时，要将JSON数据和HTML字符串进行拼接，然后将拼接的结果展示在页面中



在http请求与响应的过程中，无论是请求参数还是响应内容，如果是对象类型，最终都会被转为对象字符串

```js
JSON.parse() //将json字符串转换为json对象
```

## POST请求

```js
xhr.setRequestHeader('Content-Type','Application/json')
xhr.open('post','http://www.example.com')
xhr.send('name=zhangsan&age=20')
```

## 请求参数的格式

1. application/x-www-form-urlencoded

   ```js
   name=zhangsan&age=20
   ```

2. Application/json

   ```js
   {name:'zhangsan'，age:'20'}
   ```

   ```js
   xhr.send(JSON.stringify())
   ```

   

## 获取服务端响应

* onreadystatechange事件

  当Ajax状态码发生变化时将自动触发该事件



## Ajax错误处理

1. 网络通畅，服务器端能接收到请求，服务端返回的结果不是预期结果

   可以通过`xhr.status`判断状态码来处理

2. 网络畅通，服务器端没有接收到请求，返回404

   检查请求地址是否错误

3. 网络畅通，服务器端能收到请求，返回500

   找后端解决

4. 网络中断，无法发送请求

   会触发xhr对象下面的`onerror`事件，在onerror事件处理函数中对错误进行处理