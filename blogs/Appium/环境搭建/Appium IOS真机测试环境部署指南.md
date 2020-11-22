# Appium IOS真机测试环境部署指南

## 基础环境

### 安装homebrew

```shell
$ /bin/zsh -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)"
```

### homebrew换源

```shell
$ cd "$(brew --repo)"
$ git remote set-url origin https://mirrors.ustc.edu.cn/brew.git
$ cd "$(brew --repo)/Library/Taps/homebrew/homebrew-core"
$ git remote set-url origin https://mirrors.ustc.edu.cn/homebrew-core.git
$ brew update
$ echo 'export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.ustc.edu.cn/homebrew-bottles' >> ~/.bash_profile
$ source ~/.bash_profile
```



### 安装node

```shell
$ brew install node
```

### 安装cnpm

```shell
$ npm install -g cnpm --registry=https://registry.npm.taobao.org
```



### 安装Xcode

[下载](https://developer.apple.com/xcode/)后安装即可

安装后打开Xcode，进入`Xcode->Preferences->Locations`

将`Command Line Tools:`选为Xcode 12.0

## 安装Appium

### 命令行版

> 这个为备用，经测试桌面版更为稳定，直接安装桌面版即可

#### 安装

```shell
$ npm install -g appium
```

#### 启动

```shell
$ appium
```

### 桌面版

[下载](https://github.com/appium/appium-desktop/releases)后直接安装即可

## appium-doctor

### 安装

```shell
$ cnpm install -g appium-doctor
```

### 检测依赖项

```shell
$ appium-doctor --android #检测android的依赖项
$ appium-doctor --ios     #检测ios的依赖项
```



### 安装缺少的依赖项

#### carthage

```shell
$ brew install carthage
```

#### opencv4nodejs

```shell
$ brew install cmake
$ brew install opencv
$ export OPENCV4NODEJS_DISABLE_AUTOBUILD=1
$ cnpm -g install opencv4nodejs
```

#### ffmpeg

```shell
$ brew install ffmpeg
```

#### mjpeg-consumer

```shell
$ cnpm i -g mjpeg-consumer
```

#### set-simulator-loction

```shell
$ brew install lyft/formulae/set-simulator-location
```

#### applesimutils

```shell
$ brew tap wix/brew
$ brew install applesimutils
```

#### idb

```shell
$ brew tap facebook/fb
$ brew install idb-companion
$ pip3 install fb-idb
```

#### ios-deploy

```shell
cnpm install -g ios-deploy
```



可以自行搜索 *Mac如何安装XXX*

**==一定要全部安装==**

## WebDriverAgent

### 编译

参见《IOS真机测试环境部署指南》，位于坚果云中。

### 迁移

找到Appium下的webdriveragent,将其替换为刚刚编译成功的webdriveragent

一般地，

命令行版本的路径为：`/usr/local/lib/node_modules/appium/node_modules/appium-webdriveragent`

桌面版的路径为：`/Applications/Appium.app/Contents/Resources/app/node_modules/appium/node_modules/appium-webdriveragent/`

## 编写脚本

### 安装python客户端

```shell
$ pip3 install appium-python-client
```

### 脚本实例

```python
from appium import webdriver


caps={
   'bundleId': 'QReader.MarginStudy.team',
    'platformName': 'iOS',
    'platformVersion': '14.0',
    'deviceName': 'ipad',
    "automationName": "XCUITest",
    "noReset": False,
    "udid": "a9012b2307f82d07af99ad6c91774e18c52e5acd"
}


driver = webdriver.Remote('http://localhost:4723/wd/hub',caps)



driver.is_app_install('QReader.MarginStudy.team')
```



## 可能遇到的问题

### 依赖项安装失败

> 可能情况较多，具体问题具体解决，成功解决后将相关参考资料加入进来

1. `opencv4nodejs`安装失败

   解决方案：没找到原因，就一直重装，突然发现装上了。

### WDA编译失败

1. 执行`./Scripts/bootstrap.sh`失败，

   可能是Carthage的问题，如果没安装则需要安装，

   ```shell
   $ brew install carthage
   ```

   

   若已安装则需要重装

   ```shell
   $ rm -rf /usr/local/Cellar/carthage
   $ rm -rf /usr/local/Homebrew/Library/Taps/homebrew/homebrew-core
   $ brew update
   $ brew install carthage
   ```

   

2. xcode编译失败

   1. 无法连接设备

      解决方案：

      1. 检查xcode版本，建议最新beta版，实测可用
      2. 检查iOS版本，建议13.5至14.0，14.0实测可用

   2. 无法启动wda

      解决方案：

      1. 要在ipad设置中信任开发者
   
3. `npm -g install opencv4nodejs`失败

   网络问题，解决方法是不断的重复执行这步，直到安装成功为止

### 脚本启动失败

1. `Could not load a driver for automationName 'XCUITest' and platformName 'iOS'. Please verify your Appium installation `

   解决方案：此问题是使用命令行版时出现，未找到原因，使用桌面版可解决

2. `
   Unable to launch WebDriverAgent because of xcodebuild failure: "Command 'Scripts/bootstrap.sh -d' exited with code 1".`

   解决方案：这个是appium自己编译wda时出错，一般将自行编译好的wda替换后不会有此问题，我遇到这个问题是因为相关资料比较旧，将wda放错了路径，官网最新版已经更改了路径，前文提供的为最新版。

### 找不到Appium包

解决方案：

```shell
$ git clone https://github.com/appium/python-client
$ cd python-client
$ python3 setup.py install
```





