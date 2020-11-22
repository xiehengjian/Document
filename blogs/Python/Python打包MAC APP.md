# Python打包MAC APP

## 环境准备

安装py2app

```sh
$ pip3 install py2app
```

## 开始打包

生成setup

```shell
$ py2applet --make-setup main.py icon.icns
```

创建app

```shell
python3 setup.py py2app -A
```

