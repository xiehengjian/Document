# DOSBox 常用指令

## 运行

### 汇编

```powershell
masm file.asm
```

### 链接

```shell
link file.obj
```

### 执行

```shell
file.exe
```

## 调试

### 进入调试

```shell
debug file.exe
```

### 查看寄存器

```shell
-r
```

### 反编译

```shell
-u
-u <行数>
```

### 单步执行

```shell
-t
```

### 直接执行

```shell
-p
```

### 执行完显示结果

```shell
-g
```



### 查看指定内存地址

```shell
-d 段地址:偏移地址
```

### 推出

```shell
-q
```

