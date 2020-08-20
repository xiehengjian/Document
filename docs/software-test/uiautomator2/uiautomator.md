---
title: uiautomator2
date: 2020-08-16
sidebar: 'auto'
categories:
 - 软件测试
tags:
 - uiautomator
 - python
publish: true
---



::: tip 
uiautomator2是python封装的用于安卓自动化测试的库，其中对于界面元素的定位尤为简洁 
:::

<!-- more -->

## 环境搭建

### 安装Python

### 安装Python 开发工具

### 安装 uiautomator2

```
pip3 install uiautomator2
```



### 安装weditor

```shell
pip3 install weditor
```

## 脚本编写

### 快速入门

#### 导入模块

```python
import uiautomator2 as u2
```

#### 连接设备

```python
# 通过usb链接
device = u2.connect('e7cddcd4')

# 通过wifi链接
device = u2.connect('http://192.168.1.10')

# 通过wifi地址链接
device = u2.connect_wifi('192.168.1.10')
```

#### 查看设备信息

```python
print(device.device_info)
```

### 设备

#### 获取设备信息

```python
# 设备信息
device.info

# 更详细的设备信息
device.device_info
```

#### 获取屏幕尺寸

```python
device.window_size()
```

#### 截屏

```python
# 参数
# 	filename:图片保存的路径
device.screenshot(filename)
```

#### 推送文件

```python
# 参数
# 	computer_dir:文件在电脑的路径
# 	mobile_dir:在手机存储的路径
device.push(computer_dir,mobile_dir)
```

#### 拉取文件

```python
# 参数
# 	computer_dir:文件在电脑的路径
# 	mobile_dir:在手机存储的路径
device.pull(mobile_dir,computer_dir)
```

### 按键

#### 亮屏

```python
device.screen_on()
```

#### 息屏

```python
device.screen_off()
```

#### home

```python
device.press("home")
```

#### 返回

```python
device.press("home")
```

#### 向左

```python
device.press("left")
```

#### 向右
```python
device.press("right")
```
#### 向上
```python
device.press("up")
```
#### 向下

```python
device.press("down")
```

#### 居中
```python
device.press("center")
```

#### 菜单
```python
device.press("menu")
```

#### 搜索
```python
device.press("search")
```

#### 确认
```python
device.press("enter")
```

#### 删除
```python
device.press("delete(or del)")
```

#### 最近
```python
device.press("recent(recent apps)")
```
#### 相机
```python
device.press("camera")
```
#### 电源
```python
device.press("power")
```

### App

#### 安装

```python
# 通过url安装
# 参数
# 	url:apk下载地址
device.app_install(url)
```

#### 启动

```python
# 通过app在桌面上显示的名称启动
# 参数：
# 	name:名称
device(text=name).click()

# 通过包名启动
# 参数：
# 	package:包名
device.app_start(package)
```

#### 获取包名

```python
# 获取当前窗口的app的信息
device.app_current()

# 获取当前运行的app列表
device.app_list_running()
```

```shell
# 通过adb命令
adb shell dumpsys activity | find "mfocusedActivity"

adb shell dumpsys activity top | findstr ACTIVITY
```

#### 关闭

```python
device.app_stop(package)
```

#### 清空

```python
device.app_clear(package)
```

#### 卸载

```python
# 通过包名卸载
# 	参数:
# 		package:包名
device.app_uninstall(package)
```



### 元素

#### 定位元素

##### 元素特征

###### text定位

```python
# 通过控件文本匹配
# 参数：
# 	text:控件文本
device(text=None)

# 通过控件文本包含
# 参数：
# 	textContains:控件文本包含内容
device(textContains=None)

# 通过控件文本正则匹配
# 参数：
# 	textMatches:控件文本匹配正则表达式
device(textMatches=None)

# 通过控件文本前缀匹配
# 参数：
# 	textStartWith:控件文本前缀
device(textStartWith=None)
```

###### class定位

```python
# 通过控件类别匹配
# 参数：
# 	className:控件文本
device(className=None)

# 通过控件类别正则匹配
# 参数：
# 	classNameMatches:控件类别匹配正则表达式
device(classNameMatches=None)
```

###### description定位

```python
# 通过控件描述匹配
# 参数：
# 	description:控件描述
device(description=None)

# 通过控件描述包含
# 参数：
# 	descriptionContains:控件描述包含内容
device(descriptionContains=None)

# 通过控件描述正则匹配
# 参数：
# 	descriptionMatches:控件描述匹配正则表达式
device(descriptionMatches=None)

# 通过控件描述前缀匹配
# 参数：
# 	descriptionStartWith:控件描述前缀
device(descriptionStartWith=None)
```

###### resourceId定位

```python
# 通过控件ID匹配
# 参数：
# 	resourceId:控件ID
device(resourceId=None)

# 通过控件ID正则匹配
# 参数：
# 	resourceIdMatches:控件ID匹配正则表达式
device(resourceIdMatches=None)
```

###### packageName定位

```python
# 通过控件包名匹配
# 参数：
# 	resourceId:控件ID
device(packageName=None)

# 通过控件包名正则匹配
# 参数：
# 	resourceIdMatches:控件ID匹配正则表达式
device(packageNameMatches=None)
```

###### 其他

* `checkable`   `checked`    `clickable`    `longClickable`
* `scrollable`  `enabled`  `focusable`  `selected`
* `index`   `instance`

##### 层级关系

###### 子元素

```python
# 定位到父元素后定位其子元素
# 参数：
# 	para:为元素特征参数
element.child(para)
```

###### 同级元素

```python
# 定位到元素后定位其同级元素
# 参数：
# 	para:为元素特征参数
element.sibling(para)
```

###### 父元素

```python

```

##### 页面位置

> 由于该方法需要读取并分析页面上的相对位置，故速度较慢

###### 上方

```python
# 定位到元素后定位其上方元素
# 参数：
# 	para:为元素特征参数
element.up(para)
```



###### 下方

```python
# 定位到元素后定位其下方元素
# 参数：
# 	para:为元素特征参数
element.down(para)
```



###### 左边

````python
# 定位到元素后定位其左边元素
# 参数：
# 	para:为元素特征参数
element.left(para)
````



###### 右边

```python
# 定位到元素后定位其右边元素
# 参数：
# 	para:为元素特征参数
element.right(para)
```

#### 元素操作

##### 点击

```python
# 元素点击
element.click()

# 全局点击
device.click(x,y)
```

##### 滑动

```python
# 元素滑动
element.swipe('down',steps=10)
# 全局滑动
device.swipe(self.fx.fy,tx,ty,druation=0.1,steps=None)
```

##### 输入

```python
element.send_keys()
```

##### 清空

```python
element.clear_text()
```

##### 截屏

```python
device.screenshot(filename)
```

##### 等待

```python
# 等待元素出现
element.wait()

# 等待元素消失
element.wait_gone()

# 等待元素是否存在
element.exist()
```

