# Python异步编程

## 异步编程

### 事件循环

```python
# 伪代码

任务列表=[任务一，任务二，……]

while True:
	可执行的任务列表，已完成的任务列表=去任务列表中检查所有的任务。
  for 就绪任务 in 可执行的任务列表:
    执行已就绪的任务
  for 已完成的任务 in 已完成的任务列表:
    在任务列表中移除已完成的任务
    
    如果任务列表为空，则终止循环
```

### 快速上手

协程函数，定义函数时候`async def 函数名`

协程对象，执行协程函数()得到的协程对象

```python
async def fun():
  pass

result=func()
```

注意:执行协程函数创建协程对象，函数内部代码不会执行

```python
async def fun():
  pass

result=func()

#旧版写法
loop=asyncio.get_event_loop()
loop.run_until_complete(result)

#python3.7之后
asyncio.run(result) 
```

### await

```python
import asyncio

async def others():
  print("start")
  await asyncio.sleep(2)
  print("end")
  return "返回值"


async def func():
  print(执行协程函数内部代码)
  response=await others()
  
  print("IO请求结束")
  
asyncio.run(func())
```

