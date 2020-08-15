(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{356:function(t,a,s){"use strict";s.r(a);var r=s(42),e=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"开篇"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开篇"}},[t._v("#")]),t._v(" 开篇")]),t._v(" "),s("p",[t._v("ps:学习编程时应该跟着敲代码，不要光看，一个是练习熟练度，一个是打字也快啊不是。、")]),t._v(" "),s("p",[t._v("主要是方便后期看，因为代码看描述的不清楚的，看代码才清楚")]),t._v(" "),s("h2",{attrs:{id:"golang的由来"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#golang的由来"}},[t._v("#")]),t._v(" Golang的由来")]),t._v(" "),s("h3",{attrs:{id:"软件开发的挑战"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#软件开发的挑战"}},[t._v("#")]),t._v(" 软件开发的挑战")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("* 多核硬件架构\n* 超大规模分布式计算集群\n* web模式导致的前所未有的开发规模和更新速度\n")])])]),s("p",[t._v("特性")]),t._v(" "),s("ul",[s("li",[t._v("简单，C语言有37个关键字，Go有25个")]),t._v(" "),s("li",[t._v("并发编程")]),t._v(" "),s("li",[t._v("内存管理")]),t._v(" "),s("li",[t._v("垃圾回收")]),t._v(" "),s("li",[t._v("编译类型静态类型语言，高效")]),t._v(" "),s("li",[t._v("简洁清晰的依赖管理、独特的接口类型设计")])]),t._v(" "),s("h3",{attrs:{id:"应用程序入口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#应用程序入口"}},[t._v("#")]),t._v(" 应用程序入口")]),t._v(" "),s("ol",[s("li",[t._v("必须是main包 "),s("code",[t._v("package main")])]),t._v(" "),s("li",[t._v("必须是main方法 "),s("code",[t._v("func mian()")])]),t._v(" "),s("li",[t._v("文件名不需要是"),s("code",[t._v("main.go")])]),t._v(" "),s("li",[t._v("main方法是没有参数的，可以通过"),s("code",[t._v("os.Args")]),t._v("获取命令行参数")]),t._v(" "),s("li",[t._v("main方法是没有返回值的，不能return，可以通过"),s("code",[t._v("os.Exit()")]),t._v("来退出程序")])]),t._v(" "),s("h3",{attrs:{id:"编写测试程序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#编写测试程序"}},[t._v("#")]),t._v(" 编写测试程序")]),t._v(" "),s("ol",[s("li",[t._v("源码文件以"),s("code",[t._v("_text")]),t._v("结尾："),s("code",[t._v("xxx_test.go")])]),t._v(" "),s("li",[t._v("测试方法以"),s("code",[t._v("Test")]),t._v("开头："),s("code",[t._v("func TextXXX(t *testing.T){...}")])])]),t._v(" "),s("h3",{attrs:{id:"变量赋值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#变量赋值"}},[t._v("#")]),t._v(" 变量赋值")]),t._v(" "),s("p",[t._v("与其他主要编程语言的差异")]),t._v(" "),s("ul",[s("li",[t._v("赋值可以进行自动类型推断")]),t._v(" "),s("li",[t._v("在一个赋值语句中可以对多个变量进行同时赋值")]),t._v(" "),s("li",[t._v("可以用"),s("code",[t._v("a,b=b,a")]),t._v("来交换变量的值")])]),t._v(" "),s("p",[t._v("快速设置连续值")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  Monday "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("iota")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n  Tuesday\n  Wednesday\n  Thursday\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  Open "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("iota")]),t._v("\n  Close\n  Pending\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"类型转换"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#类型转换"}},[t._v("#")]),t._v(" 类型转换")]),t._v(" "),s("ol",[s("li",[t._v("Go语言不允许隐式类型转换")]),t._v(" "),s("li",[t._v("别名和原有类型也不能进行隐式类型转换")])]),t._v(" "),s("h3",{attrs:{id:"类型的预定义值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#类型的预定义值"}},[t._v("#")]),t._v(" 类型的预定义值")]),t._v(" "),s("ol",[s("li",[s("p",[s("code",[t._v("math.MaxInt64")])])]),t._v(" "),s("li",[s("p",[s("code",[t._v("math.MaxFloat64")])])]),t._v(" "),s("li",[s("p",[s("code",[t._v("Math.MaxUint32")])])])]),t._v(" "),s("h3",{attrs:{id:"指针类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#指针类型"}},[t._v("#")]),t._v(" 指针类型")]),t._v(" "),s("p",[t._v("与其他主要编程语言的差异")]),t._v(" "),s("ol",[s("li",[t._v("不支持指针运算")]),t._v(" "),s("li",[t._v("string是值类型，其默认的初始化值为空字符串，而不是nil")])]),t._v(" "),s("h3",{attrs:{id:"运算符"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#运算符"}},[t._v("#")]),t._v(" 运算符")]),t._v(" "),s("ol",[s("li",[t._v("Go语言没有前置的++和--")])]),t._v(" "),s("h3",{attrs:{id:"map"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#map"}},[t._v("#")]),t._v(" Map")]),t._v(" "),s("ul",[s("li",[t._v("当访问的Key不存在时，仍会返回零值，不能通过返回nil来判断元素是否存在")])]),t._v(" "),s("h3",{attrs:{id:"map与工厂模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#map与工厂模式"}},[t._v("#")]),t._v(" Map与工厂模式")]),t._v(" "),s("ul",[s("li",[t._v("Map的value可以是一个方法")]),t._v(" "),s("li",[t._v("与Go的Dock type接口方式一起，可以方便的实现单一方法对象的工厂模式")])]),t._v(" "),s("h3",{attrs:{id:"实现set"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实现set"}},[t._v("#")]),t._v(" 实现Set")]),t._v(" "),s("p",[t._v("Go的内置集合中没有Set实现，可以map[type]bool")]),t._v(" "),s("ol",[s("li",[t._v("元素的唯一性")]),t._v(" "),s("li",[t._v("基本操作\n"),s("ol",[s("li",[t._v("添加元素")]),t._v(" "),s("li",[t._v("判断元素是否存在")]),t._v(" "),s("li",[t._v("删除元素")]),t._v(" "),s("li",[t._v("元数个数")])])])]),t._v(" "),s("h3",{attrs:{id:"字符串"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#字符串"}},[t._v("#")]),t._v(" 字符串")]),t._v(" "),s("p",[t._v("与其他主要编程语言的差异")]),t._v(" "),s("ol",[s("li",[t._v("string是数据类型，不是指针或引用类型")]),t._v(" "),s("li",[t._v("string是只读的byte slice，len函数可以返回它包含的byte数")]),t._v(" "),s("li",[t._v("string的byte数组可以存放任何数据")])]),t._v(" "),s("h3",{attrs:{id:"unicode和utf8"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#unicode和utf8"}},[t._v("#")]),t._v(" Unicode和UTF8")]),t._v(" "),s("ol",[s("li",[t._v("Unicode是一种字符集")]),t._v(" "),s("li",[t._v("UTF8是unicode的存储实现（转换为字节序列的规则）")])]),t._v(" "),s("h3",{attrs:{id:"常用字符串函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常用字符串函数"}},[t._v("#")]),t._v(" 常用字符串函数")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("strings")])]),t._v(" "),s("li",[s("p",[t._v("strcov")])])]),t._v(" "),s("h3",{attrs:{id:"函数：一等公民"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#函数：一等公民"}},[t._v("#")]),t._v(" 函数：一等公民")]),t._v(" "),s("p",[t._v("与其他编程语言的差异")]),t._v(" "),s("ol",[s("li",[t._v("可以有多个返回值")]),t._v(" "),s("li",[t._v("所有的参数都是值传递，slice，map,channel有传引用的错觉")]),t._v(" "),s("li",[t._v("函数可以作为变量的值")]),t._v(" "),s("li",[t._v("函数可以作为参数和返回值")])]),t._v(" "),s("h3",{attrs:{id:"可变参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#可变参数"}},[t._v("#")]),t._v(" 可变参数")]),t._v(" "),s("ol",[s("li",[t._v("参数列表为 "),s("code",[t._v("<name> ...<type>")])]),t._v(" "),s("li",[t._v("函数接收到的是一个数组，通过遍历可以获取参数")])]),t._v(" "),s("h3",{attrs:{id:"延迟运行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#延迟运行"}},[t._v("#")]),t._v(" 延迟运行")]),t._v(" "),s("ul",[s("li",[t._v("即defer函数，栈模式执行")])]),t._v(" "),s("h2",{attrs:{id:"go的面向对象编程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#go的面向对象编程"}},[t._v("#")]),t._v(" Go的面向对象编程")]),t._v(" "),s("h3",{attrs:{id:"数据的封装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据的封装"}},[t._v("#")]),t._v(" 数据的封装")]),t._v(" "),s("ul",[s("li",[t._v("结构体")])]),t._v(" "),s("h3",{attrs:{id:"行为的定义"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#行为的定义"}},[t._v("#")]),t._v(" 行为的定义")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("strcutname"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("structname"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//第一种定义方式在实例调用对应方法后，实例的成员会进行值复制，")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//为了避免内存的拷贝，我们使用第二种定义方式")]),t._v("\n")])])]),s("h3",{attrs:{id:"接口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#接口"}},[t._v("#")]),t._v(" 接口")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("定义")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" Programmer "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("WriteHelloWorld")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" Code\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("实现")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" GoProgrammer "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("GoProgrammer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("WriteHelloWorld")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" Code"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fmt.Println(\\"Hello World!\\")"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])]),t._v(" "),s("p",[t._v("与其他语言的差异")]),t._v(" "),s("ul",[s("li",[t._v("接口为非入侵性，实现不依赖于接口定义")]),t._v(" "),s("li",[t._v("所以接口的定义可以包含在接口使用者包内")])]),t._v(" "),s("h3",{attrs:{id:"错误处理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#错误处理"}},[t._v("#")]),t._v(" 错误处理")]),t._v(" "),s("p",[t._v("与其他语言的差异")]),t._v(" "),s("ul",[s("li",[t._v("没有异常机制")]),t._v(" "),s("li",[t._v("error类型实现了error接口")]),t._v(" "),s("li",[t._v("可以通过errors.New来快速创建错误实例")])])])}),[],!1,null,null,null);a.default=e.exports}}]);