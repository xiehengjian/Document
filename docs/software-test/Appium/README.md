# Appium

## 环境搭建

### 安装appium

下载地址：https://github.com/appium/appium-desktop/releases/tag/v1.18.0-1

### 安装Python客户端库

`pip3 install appium-python-client`

### 安装JDK

下载地址：https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html

### 安装Android SDK

下载地址：https://developer.android.com/studio

### 启动appium

![image-20200815173702983](https://bbs-upload.marginnote.cn/original/2X/3/31b613e0373b892a7a77a383e1bf26e1b870affb.png)

### 配置路径

点击appium下方的`Edit Configurations`

![image-20200815173816004](https://bbs-upload.marginnote.cn/original/2X/0/015903a43c1f83be0155dbf068d10dc1990d5ac3.png)

在弹出的窗口中分别填入`JDK`与`Android SDK`的安装路径

点击`Save and Restart`

### 开启服务

在主页面点击`Start Server v1.18.0`即可启动服务，接下来您可以开始编写您的测试脚本

## 常用ADB命令

### 获取设备列表

`adb devices -l`

### 获取包名

* 设备打开需要获取的页面
* 终端执行`adb shell dumpsys window | grep mCurrentFocus`



## UIAutomatorViewer

> UIAutomatorViewer是用来扫描和分析Android应用程序的UI控件的工具

### 使用步骤

1. 进入SDK目录
   * mac在tool/bin目录下，打开`uiaotomatorviewer`
   * windows在tools目录下，打开`uiautomatorviewer.bat`
2. 电脑连接真机或打开模拟器
3. 启动待测试app
4. 点击`uiautomatorviewer`的左上角`Device Screenshot`
5. 点击希望查看的控件
6. 查看右下角`Node Detail`相关信息

## 脚本编写

### webdriver

#### 引入模块

```python
from appium import webdriver
```



#### 配置参数

```python
caps={
	"platformName":"Android", # 平台类型：IOS/Android
    "platformVersion":"10", #平台版本
    "deviceName":"MI_8_SE", #设备名称
    "appPackage":"lee.vioson.marginnote",  #package
    "appActivity":"lee.vioson.marginnote.features.main.MainActivity" #Activity
}
```

#### 启动driver

```python
driver = webdriver.Remote('http://localhost:4723/wd/hub',caps)
```

#### App

##### 启动其他App

```python
# 脚本内启动其他app
# 参数
# 	appPackage：要打开的程序包名
# 	appActivity：要打开的程序的界面名
driver.start_activity(appPackage,appActivity)
```



##### 获取App的信息

```python
#获取包名
driver.current_package
#获取界面名
driver.current_activity
```

##### 关闭App和驱动对象

```python
# 关闭App
driver.close_app()
# 关闭driver
driver.quit()
```

##### 安装与卸载

```python
# 安装app
# 参数
# 	app_path:apk路径
diver.install_app(app_path)

# 卸载app
# 参数
# 	app_id:应用程序包名,即package名
driver.remove_app(app_id)

# 判断是否安装
# 参数
# 	app_id
dirver.is_app_install(app_id)
```

##### 挂后台

```python
# app放置到后台一定时间后再回到前台，模拟热启动
# 参数
# 	seconds：后台停留时间
driver.background_app(seconds)
```



#### 元素

##### 定位元素

```python
# 通过id定位
# 参数：
# 	id_value:元素的resource-id属性值
driver.find_element_by_id(id_value)
driver.find_elements_by_id(id_value)

# 通过class_name定位
# 参数：
# 	class_value:元素的class属性值
driver.find_element_by_id(class_value)
driver.find_elements_by_id(class_value)

# 通过xpath定位
# 参数：
# 	xpath_value:元素的xpath表达式
driver.find_element_by_id(xpath_value)
driver.find_elements_by_id(xpath_value)
```



##### 元素等待

可能由于一些原因，我们想找的元素没有立刻出现，此时直接定位可能会报错，比如以下原因

* 由于网络速度原因
* 服务器处理请求原因
* 电脑配置原因

webdriver定位页面元素时如果未找到，会在指定时间内一直等待

###### 隐式等待

> 等待元素加载指定时长，超出时长抛出`NoSuchElementException`异常

```python
from selenium.webdriver.support.wait import webDriverWait

# --------
# 启动参数
# --------


# 参数
#	 timeout:超时时长，秒
driver.implicitly_wait(timeout)
search_button = driver.find_element_by_xpath(...)
search_button.click()
```



###### 显式等待

> 针对所有定位元素的超时时长设为不同的值

```python
from selenium.webdriver.support.wait import webDriverWait

# --------
# 启动参数
# --------


# 创建webDriverWait对象
wait = WebDriverWait(driver,5,poll_frequency=1)#总超时为5秒，每一秒尝试一次
# 获取元素并设置超时时间和频率
search_button = wait.until(lambda x:x.find_element_by_xpath(...))
search_button.click()
```

##### 元素操作

###### 点击

```python
element.click()
```

###### 输入

```python
# 参数
# 	value:输入的内容
element.send_keys(value)
```

###### 清空

```python
element.clear()
```

###### 获取文本

```python
element.text
```

###### 获取元素位置

```python
element.location
```

###### 获取元素大小

```python
element.size
```

#### 屏幕事件

##### 滑动

###### swipe滑动

> 从一个坐标位置滑动到另一个坐标位置，只能是两点之间的滑动

```python
# 参数
# 	start_x:起点x轴坐标
# 	start_y:起点y轴坐标
# 	end_x:终点x轴坐标
# 	end_y:终点y轴坐标
# 	duration:滑动这个操作持续的时间长度，毫秒
driver.swipe(start_x,strat_y,end_x,end_y,duration=None)
```

###### scroll滑动

> 从一个元素滑动到另一个元素，直到页面自动停止

```python
# 参数
# 	origin_el:滑动的开始元素
# 	destination_el:滑动的结束元素
driver.scroll(origin_el,destination_el)
```

##### 拖拽

> 从一个元素滑动到另一个元素，第二个元素代替第一个元素原本屏幕上的位置

```python
# 参数
# 	origin_el:滑动的开始元素
# 	destination_el:滑动的结束元素
driver.drag_and_drop(origin_el,destination_el)
```

#### 手机操作

##### 获取分辨率

> 可能会需要根据当前设备分辨率来计算一些点击或滑动的坐标

```python
driver.get_window_size()
```

##### 截图

```python
# 参数
# 	filename:指定路径下，指定格式的图片
driver.get_screenshot_as_file(filename)
```

##### 获取网络

```python
driver.network_connection
```

##### 设置网络

```python
# 参数
# 	connectionType:网络类型
driver.set_network_connection(connectionType)
```



##### 模拟按键

> 模拟返回键、Home键等

```python
# 参数
# 	keycode:关键代码
# 	metastate:关键代码元信息
driver.press_keycode(keycode,metastate=None)
driver.keyevent()
```

##### 操作通知栏

```python
# 打开通知栏
driver.open_notifications()
```



### TouchAction

#### 引入模块

```python
from appium.webdriver.common.touch_action import TouchAction
```



#### 轻敲

> 模拟手指对某个元素或坐标按下并快速抬起

```python
# 参数
# 	element:元素
# 	x:x坐标
# 	y:y坐标
TouchAction(driver).tap(element=None,x=None,y=None).perform()
```

#### 按下

> 模拟手指一直按下

```python
# 参数
# 	el:元素
# 	x:x坐标
# 	y:y坐标
TouchAction(driver).press(el=None,x=None,y=None).perform()
```



#### 抬起

> 模拟手指抬起

```python
# 参数
# 	el:元素
# 	x:x坐标
# 	y:y坐标
TouchAction(driver).release().perform()
```

#### 等待

> 模拟手指等待，如按下后等待5秒后抬起

```python
# 参数
# 	ms:暂停的毫秒
TouchAction(driver).wait(ms=0).perform()
```

#### 长按

> 模拟手指长按

```python
# 参数
# 	el:元素
# 	x:x坐标
# 	y:y坐标
# 	duration:长按时间，毫秒
TouchAction(driver).long_press(el=None,x=None,y=None,duration=1000).perform()
```

#### 移动

> 模拟手指移动操作

```python
# 参数
# 	el:元素
# 	x:x坐标
# 	y:y坐标
TouchAction(driver).move_to(el=None,x=None,y=None).perform()
```



## Appium原理

### 启动过程

> appium的启动实际上是在本机使用了4723端口开启了一个服务

1. 我们写的python代码会访问本机的appium服务器，并获取driver对象
2. appium会将我们的driver对象调用的方法转换成post请求，提交给appium服务器
3. appium通过接收到的post请求发送给手机，再由手机进行执行

