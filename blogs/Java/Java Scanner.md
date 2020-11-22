> java.util.Scanner是Java5的新特性，我们可以通过Scanner类来获取用户的输入

基本语法

```java
Scanner s = new Scanner(System.in);
```

通过`Scanner`类的`next()`与`nextLine()`方法获取输入的字符串，在读取前我们一般需要使用`hasNext()`与`hasNextLine()`判断是否还有输入的数据

```java
import java.util.Scanner
  
 pubilc class demo{
   public static void main(String[] args){
     //创建一个扫描器对象，用于接收键盘数据
     Scanner scanner = new Scanner(System.in);
     
     //判断用户有没有输入字符串
     if(scanner.hasNext()){
       //使用next方法接收
       String str = scanner.next()
     }
     
     //IO流的类如果不关闭会一直占用资源，要及时关闭
     scanner.close()
   }
 }
```



* `next()`
  1. 一定要读取到有效字符后才可以结束输入
  2. 对输入有效字符之前遇到的空白，`next()`方法会自动将其去掉
  3. 只有输入有效字符后才将其后面输入的空白作为分隔符或者结束符
  4. ==`next()`不能得到带有空格的字符串==
* `nextLine()`
  1. 以`Enter`为结束符，也就是说`nextLine()`方法返回的是输入回车之前的所有字符
  2. 可以获得空白