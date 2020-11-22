# Golang环境配置

```shell
wget https://studygolang.com/dl/golang/go1.12.5.linux-amd64.tar.gz
tar -zxvf go1.12.5.linux-amd64.tar.gz
sudo mv go /usr/local/

vim .bashrc

export GOROOT=/usr/local/go              # 安装目录。
export GOPATH=$HOME/go     # 工作环境
export GOBIN=$GOPATH/bin           # 可执行文件存放
export PATH=$GOPATH:$GOBIN:$GOROOT/bin:$PATH       # 添加PATH路径

source .bashrc
```

