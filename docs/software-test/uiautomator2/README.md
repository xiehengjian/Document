# uiautomator2

## 环境搭建

### 安装Python

### 安装Python 开发工具

### 安装 uiautomator2

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

