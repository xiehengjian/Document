# Appium打包镜像使用指南

## 环境准备

### 安装Parallels

[破解版](https://www.macwk.com/soft/parallels-desktop)

### 下载镜像

链接: https://pan.baidu.com/s/1sG1zQHxBaQ0pXBWju6GY6A  密码: ovjo

镜像是分卷压缩的，下载后需要解压

### 导入镜像

* 启动Parallels，在Dock栏右击选中控制中心

  ![image-20200926232109889](http://img.hjxie.icu/image-20200926232109889.png)



* 点击右上角的`+`新建虚拟机![image-20200926232214021](/Users/creative/Library/Application%20Support/typora-user-images/image-20200926232214021.png)

* 选中`打开……`，然后打开之前下载的镜像即可

  ![image-20200926232331089](http://img.hjxie.icu/image-20200926232331089.png)

## 开始测试

### 连接真机

* 使用USB连接电脑，此时若弹出选择连接到本机还是虚拟机的选项，请选择连接到虚拟机。

* 若未弹出，则进入虚拟机，点击上方菜单的USB图标，将真机连接

  ![image-20200926232833763](http://img.hjxie.icu/image-20200926232833763.png)

* 此时真机弹出是否信任电脑，点击信任

* 虚拟机Finder出现iPad，即连接成功

  ![image-20200926233015244](http://img.hjxie.icu/image-20200926233015244.png)

* 点击框中区域，则会出现udid，邮件拷贝udid，此值后面需要使用

  ![image-20200926233127796](http://img.hjxie.icu/image-20200926233127796.png)

### 获取虚拟机IP

* 点击网络图标，在弹出菜单中点击IP地址，自动拷贝，后面需要使用

  ![image-20200926233317885](http://img.hjxie.icu/image-20200926233317885.png)

### 安装Python客户端

```shell
$ pip3 install appium-python-client
```

### 脚本实例

```python
from appium import webdriver


caps={
   'bundleId': 'QReader.MarginStudy.team',
    'platformName': 'iOS',
    'platformVersion': '14.0',# 更改为自己的版本
    'deviceName': 'ipad',
    "automationName": "XCUITest",
    "udid": "a9012b2307f82d07af99ad6c91774e18c52e5acd"#更改为自己的UDID
}


driver = webdriver.Remote('http://ip:4723/wd/hub',caps)
#ip替换成自己的IP



driver.activate_app('QReader.MarginStudy.team')
```

