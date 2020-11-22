# Tensorflow-keras

## 理论部分

### Tensorflow-keras简介

#### keras是什么

* 基于Python的高级神经网络API
* 以Tensorflow、CNTK等后端才可以运行

#### Tensorflow-keras是什么

* Tensorflow对Keras API规范的实现
* 相对于以TensorFlow为后端的keras，Tensorflow-keras与Tensorflow结合更加紧密
* 实现在tf.keras空间下

#### tf.keras和keras联系

* 基于同一套API
  * keras程序可以通过改变导入方式轻松转换为tf.keras程序
  * 反之可能不成立，因为tf.keras有其他特性
* 相同的JSON和HDF5模型序列化格式和语义

#### tf.keras和keras区别

* tf.keras全面支持eager mode
  * 只是用keras.Sequential和keras.Model时没影响
  * 自定义model内部运算逻辑时会有影响
    * tf底层API可以使用keras的model.fit等抽象
    * 适合研究人员
* tf.keras支持基于tf.data的模型训练
* tf.keras支持TPU训练
* tf.keras支持tf.distribution的分布式策略
* tf.keras可以与tensorflow中的estimator集成
* tf.keras可以保存为SavedModel

### 分类、回归、损失

* 分类问题预测的是类型，模型的输出是概率分布
* 回归问题预测是值。模型的输出是一个实数值

#### 为什么需要目标函数

* 参数是逐步调整的
* 目标函数可以帮助衡量模型的好坏

#### 损失函数

* 平方差损失
* 交叉熵损失

### 神经网络

激活函数

#### 归一化

>  对数据进行规整，使得其方差为0，均值为1

* Min-Max归一化：x*=(x-min)/(max-min)
* Z-score归一化：x*=(x-u)/o

dropout



### wide&deep模型

### 超参数搜索



## 实战部分

### keras搭建分类模型

##### 数据读取与展示

```python
import matplotlib as mpl
import matplotlib.pyplot as plt 
%matplotlib inline 
import numpy as np 
import sklearn 
import pandas as pd 
import os 
import sys 
import time 
import tensorflow as tf 
from tensorflow import keras
```

```python
fashion_minist = keras.datasets.mnist
(x_train_all,y_train_all),(x_test,y_test)=fashion_minist.load_data()
x_valid,x_train=x_train_all[:5000],x_train_all[5000:]
y_valid,y_train=y_train_all[:5000],y_train_all[5000:]

print(x_valid.shape,y_valid.shape)
print(x_train.shape,y_train.shape)
print(x_test.shape,y_test.shape)
```

```python
def show_single_image(img_arr):
    plt.imshow(img_arr,cmap="binary")
    plt.show()

show_single_image(x_train[0])
```

```python
def show_images(n_rows,n_cols,x_data,y_data,class_names):
    assert len(x_data)==len(y_data)
    assert n_rows*n_clos<len(x_data)
    plt.figure(figsize=(n_cols*1.4,n_rows*1.6))
    for row in range(n_rows):
        for col in range(n_cols):
            index=n_cols*rows+1
            plt.subplot(n_rows,n_cols,index+1)
            plt.imshow(x_data[index],cmap="binary",interpolation="nearest")
            plt.axis("off")
            plt.title(class_names[y_data[index]])
    plt.show()
class_names=['0','1','2','3','4','5','6','7','8','9']
show_images(3,5,x_train,y_train,class_names)
```

#### 模型构建

```python
model=keras.model.Sequential()
model.add(keras.layers.Flatten(input_shape[28,28]))
model.add(keras.layers.Dense(300,activation="relu"))
model.add(keras.layers.Dense(100,activation="relu"))
model.add(keras.layers.Dense(10,activation="softmax"))

model.compile(loss="sparse_categorical_crossentropy",
                optimizer = "sgd",
                metrics=["accuracy"])
```

```python
model.layers
model.summary()
model.fit(x_train,y_train,epochs=10,validation_data=(x_valid,y_valid))
```

```python
def plot_learning_curves(history):
    pd.DaataFrame(history.history).plot(figsize=(8,5))
    plt.grid(True)
    plt.gca().set_ylim(0,1)
    plt.show()
plot_learning_curves(history)
```

#### 数据归一化





### Keras回调函数

### Keras搭建回归模型

### Keras搭建深度神经网络

### Keras实现wide&deep模型

### Keras与sklearn实现超参数搜索