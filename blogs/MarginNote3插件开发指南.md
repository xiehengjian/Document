# 基础

## 介绍

### 功能

在3.6.7版本之后，我们推出了Marginnote的插件系统。不仅官方可以在不影响主程序的基础上为用户定制功能，开发者们也可以自由发挥，使用JavaScript编写自己的独属插件。这会给应用带来更多的可能性，插件可以实现的功能是强大的，在MarginNote中文论坛的插件版块已经存在了一些优秀的官方插件以及第三方插件，它们受到了许多用户的好评，由此，本文档将向您介绍一些关于MarginNote插件开发的基本知识，以帮助您开发属于自己的MarginNote插件。

### 开发准备

开发MarginNote3插件不需要安装本地依赖，您需要拉取项目开发所需的工程模板及API头文件：

```bash
git clone https://github.com/MarginNote/Addon.git
```

其中`API`目录下为可用的API接口，`Samples`目录下为工程实例。

推荐您使用`Samples`下的`HelloWorld`作为您开发的项目基础。

### 目录结构

MarginNote3插件在开发过程中，应遵循如下的开发框架，在此基础上可以拓展引入自己需要的资源文件，下面是基础项目的目录结构

```markdown
├── main.js                    # 主要业务实现
├── mnaddon.json               # 插件配置信息
├── pic.png                    # 插件图标         
└── README.md             		 # 插件说明
```

### 打包与发布

进入当前工程目录

```shell
cd work_space //假设当前您的work_space目录下存放您编写的main.js等文件
```

将插件项目打包

```shell
zip -r myAddon.mnaddon *  
//myAddon.mnaddon为您的插件名称，其中myAddon可自定义，.mnaddon文件后缀名不可改变
```

打开生成后的`myAddon.mnaddon`文件，即可在MarginNote3中安装此插件

### Hello World

在此之前您已经获取了相关的资源文件，并且大致了解了MarginNote3插件的工程结构以及打包发布插件的方法，接下来，您将可以利用`HelloWorld`中的示例代码，制作您的第一个最小化插件，打包并安装至MarginNote3后，它将在MarginNote3开启后在屏幕上弹出 Hello World! 的字样。

> 此时您制作的插件是未经官方签名的版本，在启用时会受到MarginNote发出的安全警告，您可以通过申请官方签名来对您插件的安全性进行审核并发放签名。

## 生命周期

每个插件在被加载时都要经过一系列的初始化过程，例如配置提示信息，加载`WebViewController`等。通过不同的生命周期，开发者可以在不同的阶段来添加自己的代码。

### 实例

* ` sceneWillConnect`

  用于MarginNote开启一个窗口后执行代码

* ` sceneDidDisconnect`

  用于MarginNote关闭一个窗口后执行代码

* ` sceneWillResignActive`

  用于MarginNote重新激活一个窗口后执行代码

* ` sceneDidBecomeActive`

  用于MarginNote激活一个窗口后执行代码

* ` notebookWillOpen`

  用于MarginNote打开一个笔记本后执行代码

* ` notebookWillClose`

  用于MarginNote关闭一个笔记本后执行代码

* ` documentDidOpen`

  用于MarginNote打开一个文档后执行代码

* ` documentWillClose`

  用于MarginNote关闭一个文档后执行代码

* `queryAddonCommandStatus`

  查询插件命令状态


### 类

* `addonDidConnect `

  插件加载完毕

* `addonWillDisconnect`

  插件关闭

* `applicationDidEnterBackground`

  应用进入后台

* `applicationWillEnterForeground`

  应用进入前台

* `applicationDidReceiveLocalNotification`

  应用程序收到本地通知

  

## Objective-C or JavaScript?

众所周知，Apple的应用程序都是使用`Objective-C`或者`Swift`来开发的，因此MarginNote3的插件虽然选择了`JavaScript`作为开发语言，本质上是通过Apple提供的工具来调用`Objective-C`所实现的。因此在接下来的API说明中，您会发现我们均提供了相关的`Objective-C`的声明代码。

不过在实际开发的过程中，您使用的将是JavaScript，我们会使用JSBridge将您的JavaScript代码连接到ObjectIve-C中，因此您仍重点关注的将是JavaScript的数据类型及其语法，而不是具体的转换过程。

在开始的API说明中，我们会同时附上`Objective-C`的声明代码以及对应的`JavaScript`的调用示例，您会发现他们之间的联系并不复杂，`Objective-C`定义了一些类以及类中的属性与方法，当您需要使用时，您只需要用`JavaScript`的方式来为这些类创建实例并调用属性及方法。

例如，我们可以通过以下方式来获得MarginNote3当前的颜色主题

```js
Application.sharedInstance().currentTheme;
```

该属性使用`Objective-C`声明在Application类中，其中相关的有如下两条语句

```objc
+ (id<MbAppDelegate>)sharedInstance; //类方法，返回一个实例

@property (nonatomic, readonly) NSString * currentTheme;//属性
```

在`JavaScript`或其他面向对象的编程语言中，我们都知道调用属性是需要先创建一个实例的，通常我们都会使用`new`关键字来创建类的实例，而在`Objective-C`中，我们为相关的类声明了一些类方法，或者您愿意称其为静态方法，该方法是通过类名直接调用的。所以我们在`JavaScript`代码中写入如下语句

```js
Application.sharedInstance()
```

即调用`Application`中的`sharedInstance()`方法，该方法会返回一个类的实例，换而言之，使用上述代码等同于使用`new`来创建一个实例。

因此，当我们有了实例之后，便可以去调用一类实例属性和实例方法

```js
Application.sharedInstance().currentTheme;
```

那么上面的代码便不难理解，先是使用了`Application.sharedInstance()`获取实例，再去调用`currentTheme`属性。

所以，您只需要关注`Objective-C`中定义了哪些类，以及这些类中有哪些方法可以获得实例，最后便使用实例去调用类中定义好的方法与属性即可，您并不需要对`Objective-C`本身过于关心。

## Foundation

Foundation框架是通用的面向对象的函数库，相当于标准库，可以在Mac OS和IOS中使用，它提供数字和字符串，容器如数组、字典和集合，时间管理，内存管理和文件系统等等。数据是构成程序的基石，因此在开发MarginNote插件的过程中，对其提供的数据类型有基本的了解是必要的。

### 消息广播

#### 添加观察者

Objective-C声明

```objective-c
JSExportAs(addObserverSelectorName,
- (void)_addObserver:(id)observer selector:(NSString*)aSelector name:(NSString *)aName);
```

JavaScript调用示例

```js
NSNotificationCenter.defaultCenter().addObserverSelectorName(self, 'onProcessExcerptText:', 'ProcessNewExcerpt');
```



#### 移除观察者

Objective-C声明

```objective-c
JSExportAs(removeObserverName,
- (void)_removeObserver:(id)observer name:(NSString *)aName);
```

JavaScript调用示例

```js
NSNotificationCenter.defaultCenter().removeObserverName(self, 'ProcessNewExcerpt');
```

#### Sender

当消息通知生效时，将向设定的函数中传入`NSConcreteNotification`对象，我们可以通过其`userInfo`属性获取当前操作所包含的数据内容。

一般的，当我们对文档进行操作时，`sender.userInfo`将包含一个`documentController`对象，当我们对笔记进行操作时，则`sender.userInfo`将包含一个`note`对象



## MarginNote

MarginNote库中包含了一系列开放的、操作MarginNote3的、用于插件开发的API，通过了解以下的常用API，您可以将基本实现如控制脑图等功能。

### Application

#### 应用程序(**Application**)

##### 创建实例

Objective-C声明

```objective-c
+ (id<MbAppDelegate>)sharedInstance;
```

JavaScript调用示例

```js
Application.sharedInstance()
```

##### 当前主题

Objective-C声明

```objective-c
@property (nonatomic, readonly) NSString * currentTheme;
```

JavaScript调用示例

```js
Application.sharedInstance().currentTheme;
```

##### 暗背景的默认淡色

Objective-C声明

```objective-c
@property (nonatomic, readonly) UIColor* defaultTintColorForDarkBackground;
```

JavaScript调用示例

```js
Application.sharedInstance().defaultTintColorForDarkBackground;
```

##### 选定对象的默认淡色

Objective-C声明

```objective-c
@property (nonatomic, readonly) UIColor* defaultTintColorForSelected;
```

JavaScript调用示例

```js
Application.sharedInstance().defaultTintColorForSelected;
```

##### 默认淡色

Objective-C声明

```objective-c
@property (nonatomic, readonly) UIColor* defaultTintColor;
```

JavaScript调用示例

```js
Application.sharedInstance().defaultTintColor;
```

##### 默认书页颜色

Objective-C声明

```objective-c
@property (nonatomic, readonly) UIColor* defaultBookPageColor;
```

JavaScript调用示例

```js
Application.sharedInstance().defaultBookPageColor;
```

##### 默认笔记本颜色

Objective-C声明

```objective-c
@property (nonatomic, readonly) UIColor* defaultNotebookColor;
```

JavaScript调用示例

```js
Application.sharedInstance().defaultNotebookColor;
```

##### 默认文本颜色

Objective-C声明

```objective-c
@property (nonatomic, readonly) UIColor* defaultTextColor;
```

JavaScript调用示例

```js
Application.sharedInstance().defaultTextColor;
```

##### 默认禁用颜色

Objective-C声明

```objective-c
@property (nonatomic, readonly) UIColor* defaultDisableColor;
```

JavaScript调用示例

```js
Application.sharedInstance().defaultDisableColor;
```

##### 默认高亮混合颜色

Objective-C声明

```objective-c
@property (nonatomic, readonly) UIColor* defaultHighlightBlendColor;
```

JavaScript调用示例

```js
Application.sharedInstance().defaultHighlightBlendColor;
```

##### 焦点窗口

Objective-C声明

```objective-c
@property (nonatomic, readonly, getter=window) UIWindow* focusWindow;
```

JavaScript调用示例

```js
Application.sharedInstance().focusWindow;
```

##### 数据库路径

Objective-C声明

```objective-c
@property (nonatomic, readonly) NSString *dbPath;
```

JavaScript调用示例

```js
Application.sharedInstance().dbPath;
```

##### 文档路径

Objective-C声明

```objective-c
@property (nonatomic, readonly) NSString *documentPath;
```

JavaScript调用示例

```js
Application.sharedInstance().documentPath;
```

##### 缓存路径

Objective-C声明

```objective-c
@property (nonatomic, readonly) NSString *cachePath;
```

JavaScript调用示例

```js
Application.sharedInstance().cachePath;
```

##### 暂存路径

Objective-C声明

```objective-c
@property (nonatomic, readonly) NSString *tempPath;
```

JavaScript调用示例

```js
Application.sharedInstance().tempPath;
```

##### 系统类型

Objective-C声明

```objective-c
@property (nonatomic, readonly) NSInteger osType; //0: iPadOS 1: iPhoneOS 2: macOS
```

JavaScript调用示例

```js
Application.sharedInstance().osType;
```

##### 数据库变更刷新

Objective-C声明

```objective-c
- (void)refreshAfterDBChanged:(NSString*)topicid;
```

JavaScript调用示例

```js
Application.sharedInstance().refreshAfterDBChanged();
```

##### 窗口中带有键标志的查询命令

Objective-C声明

```objective-c
JSExportAs(queryCommandWithKeyFlagsInWindow,
- (NSDictionary*)queryCommandStatus:(NSString*)command withKeyFlags:(NSInteger)keyFlags inWindow:(UIWindow*)window);
```

JavaScript调用示例

```js
Application.sharedInstance().queryCommandWithKeyFlagsInWindow();
```

##### 过程命令

Objective-C声明

```objective-c
- (void)processCommand:(NSString*)command withKeyFlags:(NSInteger)keyFlags inWindow:(UIWindow*)window;
```

JavaScript调用示例

```js
Application.sharedInstance().processCommand();
```

##### 打开URL

Objective-C声明

```objective-c
- (void)openURL:(NSURL*)url;
```

JavaScript调用示例

```js
Application.sharedInstance().openURL();
```

##### 警告窗

Objective-C声明

```objective-c
- (void)alert:(NSString*)message;
```

JavaScript调用示例

```js
Application.sharedInstance().alert("hello world!");
```

##### 透明指示层

Objective-C声明

```objective-c
-(void)showHUD:(NSString*)message onView:(UIView*)view withDuration:(double)duration);
```

JavaScript调用示例

```js
Application.sharedInstance().showHUD("hello world!",self.window,2);
```

##### 悬停指示层

Objective-C声明

```objective-c
- (void)waitHUD:(NSString*)message onView:(UIView*)view;
```

JavaScript调用示例

```js
Application.sharedInstance().waitHUD();
```

##### 关闭悬停指示层

Objective-C声明

```objective-c
- (void)stopWaitHUDOnView:(UIView*)view;
```

JavaScript调用示例

```js
Application.sharedInstance().stopWaitHUDOnView();
```

##### 保存文件

Objective-C声明

```objective-c
- (void)saveFile:(NSString*)mfile withUti:(NSString*)uti;
```

JavaScript调用示例

```js
Application.sharedInstance().saveFile();
```

##### 创建学习控制器

Objective-C声明

```objective-c
JSExportAs(studyController,
- (id<JSBStudyController>)studyboardController:(UIWindow*)window);
```

JavaScript调用示例

```js
Application.sharedInstance().studyController();
```

##### 检查当前操作窗口

Objective-C声明

```objective-c
JSExportAs(checkNotifySenderInWindow,
- (BOOL)checkObject:(id)obj inWindow:(UIWindow*)window);
```

JavaScript调用示例

```js
Application.sharedInstance().checkNotifySenderInWindow();
```

##### 通过统一类型标识符打开文件

Objective-C声明

```objective-c
JSExportAs(openFileWithUTIs,
- (void)openFileWithUTIs:(NSArray<NSString*>*)types viewController:(UIViewController*)controller block:(JSValue*)block);
```

JavaScript调用示例

```js
Application.sharedInstance().openFileWithUTIs();
```

##### 注册HTML编辑器

Objective-C声明

```objective-c
JSExportAs(regsiterHtmlCommentEditor,
- (void)regsiterHtmlCommentEditor:(NSDictionary*)commentEditor htmlEditor:(JSValue*)htmlEditor htmlRender:(JSValue*)htmlRender withCommentTag:(NSString*)commentTag);
```

JavaScript调用示例

```js
Application.sharedInstance().regsiterHtmlCommentEditor();
```

##### 注销Html编辑器

Objective-C声明

```objective-c
JSExportAs(unregsiterHtmlCommentEditor,
- (void)unregsiterHtmlCommentEditorWithCommentTag:(NSString *)commentTag);
```

JavaScript调用示例

```js
Application.sharedInstance().unregsiterHtmlCommentEditor();
```



#### 文档控制器(**DocumentController**)

##### 文档

Objective-C声明

```objective-c
@property (nonatomic, readonly, getter=currBook) MbBook* document;
```

##### 文档md5

Objective-C声明

```objective-c
@property (nonatomic, readonly, getter=currentBookMd5) NSString* docMd5;
```

##### 笔记本ID

Objective-C声明

```objective-c
@property (nonatomic, readonly, getter=currTopicId) NSString* notebookId;
```

##### 焦点笔记

Objective-C声明

```objective-c
@property (nonatomic, readonly, getter=focusNote) MbBookNote* focusNote;
```

##### 可见焦点笔记

Objective-C声明

```objective-c
@property (nonatomic, readonly, getter=visibleFocusNote) MbBookNote* visibleFocusNote;
```

##### 选中文本

Objective-C声明

```objective-c
@property (nonatomic, readonly, getter=selectionText) NSString* selectionText;
```



#### 脑图结点(**MindMapNode**)

##### 笔记

Objective-C声明

```objective-c
@property (nonatomic,readonly) MbBookNote * note;
```

##### 双亲节点

Objective-C声明

```objective-c
@property (nonatomic,readonly,getter=parentNote) MindMapNote* parentNode;
```

##### 概要链接

Objective-C声明

```objective-c
@property (nonatomic,readonly) NSArray* summaryLinks;
```

##### 子节点

Objective-C声明

```objective-c
@property (nonatomic,readonly,getter=childNotes) NSArray* childNodes;
```

##### 框架

Objective-C声明

```objective-c
@property (nonatomic,readonly) CGRect frame;
```

##### 

#### 脑图显示(**MindMapView**)

##### 脑图结点

Objective-C声明

```objective-c
@property (nonatomic,readonly) NSArray * mindmapNodes;
```

##### 选择视图

Objective-C声明

```objective-c
@property (nonatomic,readonly) NSArray * selViewLst;
```

#### 笔记本控制器(**NotebookController**)

##### 大纲视图

Objective-C声明

```objective-c
@property (nonatomic,readonly) id<JSBOutlineView> outlineView;
```

##### 脑图视图

Objective-C声明

```objective-c
@property (nonatomic,readonly,getter=noteMindMap) id<JSBMindMapView> mindmapView;
```

##### 笔记本ID

Objective-C声明

```objective-c
@property (nonatomic, readonly, getter=currTopic) NSString* notebookId;
```

##### 焦点笔记

Objective-C声明

```objective-c
@property (nonatomic, readonly, getter=focusNote) MbBookNote* focusNote;
```

##### 可见焦点笔记

Objective-C声明

```objective-c
@property (nonatomic, readonly, getter=visibleFocusNote) MbBookNote* visibleFocusNote;
```



#### 大纲视图(**OutlineView**)

##### 索引笔记

Objective-C声明

```objective-c
- (MbBookNote*)noteFromIndexPath:(NSIndexPath*)indexPath;
```

#### 阅读控制器(**ReaderController**)

##### 当前文档控制器

Objective-C声明

```objective-c
@property (nonatomic, readonly, getter=fBookViewController) id<JSBDocumentController> currentDocumentController;
```

##### 文档控制器集合

Objective-C声明

```objective-c
@property (nonatomic, readonly, getter=bookViewControllers) NSMutableArray* documentControllers;
```



#### 学习控制器(**StudyController**)

##### 学习模式

Objective-C声明

```objective-c
@property (nonatomic,readonly) int studyMode; //0 & 1: doc mode 2: study mode 3: review mode
```

##### 窄模式

Objective-C声明

```objective-c
@property (nonatomic,readonly,getter=isNarrowMode) BOOL narrowMode; //when narrowmode, book split mode 1 is disabled
```

##### 文档-脑图分割模式

Objective-C声明

```objective-c
@property (nonatomic,assign,getter=bookSplitMode,setter=setBookSplitMode:) int docMapSplitMode; //0: all map 1:half map half doc 2: all doc
```

##### 右脑图模式

Objective-C声明

```objective-c
@property (nonatomic,assign) BOOL rightMapMode;
```

##### 笔记本控制器

Objective-C声明

```objective-c
@property (nonatomic,readonly,getter=fSearchViewController) id<JSBNotebookController> notebookController;
```

##### 阅读控制器

Objective-C声明

```objective-c
@property (nonatomic,readonly,getter=detailController) id<JSBReaderController> readerController;
```

##### 获取脑图焦点笔记

Objective-C声明

```objective-c
- (void)focusNoteInMindMapById:(NSString*)noteId;
```

##### 获取文档焦点笔记

Objective-C声明

```objective-c
- (void)focusNoteInDocumentById:(NSString*)noteId;
```

##### 刷新插件命令

Objective-C声明

```objective-c
- (void)refreshAddonCommands;
```

### NoteDatabase

#### MbBook

##### 当前主题ID

Objective-C声明

```objc
@property (nonatomic,readonly,getter=currenttopicid) NSString * currentTopicId;
```

##### 上次访问

Objective-C声明

```objc
@property (nonatomic,readonly,getter=lastvisit) NSDate * lastVisit;
```

##### 文档md5

Objective-C声明

```objc
@property (nonatomic,readonly,getter=md5real) NSString * docMd5;
```

##### 路径文件

Objective-C声明

```objc
@property (nonatomic,readonly) NSString * pathFile;
```

##### 文档标题

Objective-C声明

```objc
@property (nonatomic,readonly,getter=bookTitle) NSString * docTitle;
```

#### MbBookNote

##### 摘录文本

Objective-C声明

```objc
@property (nonatomic,readwrite,getter=highlight_text,setter=_setHighlightText:) NSString * excerptText;
```

##### 笔记标题

Objective-C声明

```objective-c
@property (nonatomic,readwrite,getter=notetitle,setter=_setNoteTitle:) NSString * noteTitle;
```

##### 颜色索引

Objective-C声明

```objc
@property (nonatomic,readwrite,getter=highStyleColorType,setter=_setHighStyleColorType:) int colorIndex;
```

##### 填充索引

Objective-C声明

```objc
@property (nonatomic,readwrite,getter=highStyleFillType,setter=_setHighStyleFillType:) int fillIndex;
```

##### 脑图位置

Objective-C声明

```objc
@property (nonatomic,readwrite) CGPoint mindmapPosition;
```

##### 笔记ID

Objective-C声明

```objc
@property (nonatomic,readonly,getter=noteid) NSString * noteId;
```

##### 文档md5

Objective-C声明

```objc
@property (nonatomic,readonly,getter=bookmd5) NSString * docMd5;
```

##### 笔记本ID

Objective-C声明

```objc
@property (nonatomic,readonly,getter=topicid) NSString * notebookId;
```

##### 开始页

Objective-C声明

```objc
@property (nonatomic,readonly,getter=startpage) NSNumber * startPage;
```

##### 结束页

Objective-C声明

```objc
@property (nonatomic,readonly,getter=endpage) NSNumber * endPage;
```

##### 开始位置

Objective-C声明

```objc
@property (nonatomic,readonly,getter=startpos) NSString * startPos;
```

##### 结束位置

Objective-C声明

```objc
@property (nonatomic,readonly,getter=endpos) NSString * endPos;
```

##### 摘录图片

Objective-C声明

```objc
@property (nonatomic,readonly,getter=highlight_pic) NSDictionary * excerptPic;
```

##### 创建数据

Objective-C声明

```objc
@property (nonatomic,readonly,getter=highlight_date) NSDate * createDate;
```

##### 修改数据

Objective-C声明

```objc
@property (nonatomic,readonly,getter=note_date) NSDate * modifiedDate;
```

##### 媒体列表

Objective-C声明

```objc
@property (nonatomic,readonly,getter=media_list) NSString * mediaList;
```

##### 原始笔记ID

Objective-C声明

```objc
@property (nonatomic,readonly,getter=evernoteid) NSString * originNoteId;
```

##### 脑图分支关闭

Objective-C声明

```objc
@property (nonatomic,readonly,getter=mindclose) NSNumber * mindmapBranchClose;
```

##### 笔记文本

Objective-C声明

```objc
@property (nonatomic,readonly,getter=notes_text) NSString * notesText;
```

##### 笔记组ID

Objective-C声明

```objc
@property (nonatomic,readonly,getter=groupnoteid) NSString * groupNoteId;
```

##### 评论

Objective-C声明

```objc
@property (nonatomic,readonly,getter=comments) NSArray * comments;
```

##### 双亲笔记

Objective-C声明

```objc
@property (nonatomic,readonly) MbBookNote * parentNote;
```

##### 链接笔记

Objective-C声明

```objc
@property (nonatomic,readonly,getter=linkNotes) NSArray * linkedNotes;
```

##### 子笔记

Objective-C声明

```objc
@property (nonatomic,readonly,getter=childNotes) NSArray * childNotes;
```

##### 概要链接

Objective-C声明

```objc
@property (nonatomic,readonly,getter=summaryLinks) NSArray * summaryLinks;
```

##### Z 值

Objective-C声明

```objc
@property (nonatomic,readonly) NSNumber * zLevel;
```

##### 隐藏

Objective-C声明

```objc
@property (nonatomic,readonly) NSNumber * hidden;
```

##### toc

Objective-C声明

```objc
@property (nonatomic,readonly) NSNumber * toc;
```

##### 标注

Objective-C声明

```objc
@property (nonatomic,readonly) NSNumber * annotation;
```

##### 文本头部

Objective-C声明

```objc
@property (nonatomic,readonly) NSNumber * textFirst;
```

##### 分组模式

Objective-C声明

```objc
@property (nonatomic,readonly) NSNumber * groupMode;
```

##### 卡片

Objective-C声明

```objc
@property (nonatomic,readonly) NSNumber * flashcard;
```

##### 概要

Objective-C声明

```objc
@property (nonatomic,readonly,getter=hasSummaryLinks) BOOL summary;
```

##### 标记

Objective-C声明

```objc
@property (nonatomic,readonly) NSNumber * flagged;
```

##### 文本高亮

Objective-C声明

```objc
@property (nonatomic,readonly) NSDictionary * textHighlight;
```

##### 选项

Objective-C声明

```objc
@property (nonatomic,readonly) NSDictionary * options;
```

#### MbModelTool

##### 获取笔记本

Objective-C声明

```objective-c
JSExportAs(getNotebookById,
- (id)getTopicFromId:(NSString*)topicid);
```

##### 获取媒体文件

Objective-C声明

```objective-c
JSExportAs(getMediaByHash,
- (NSData*)getMediaFromHash:(NSString*)hash);
```

##### 获取笔记

Objective-C声明

```objective-c
JSExportAs(getNoteById,
- (id)getNoteFromId:(NSString*)noteid);
```

##### 获取文档

Objective-C声明

```objective-c
JSExportAs(getDocumentById,
- (id)getBookFromMd5:(NSString*)md5);
```

##### 获取卡片

Objective-C声明

```objective-c
JSExportAs(getFlashcardByNoteId,
- (id)getNoteByEvernoteId:(NSString*)noteid topicid:(NSString*)topicid);
```

##### 获取卡片

Objective-C声明

```objective-c
JSExportAs(getFlashcardsByNoteId,
- (NSArray*)getNotesByEvernoteId:(NSString*)noteid);
```

##### 判断卡片存在

Objective-C声明

```objective-c
JSExportAs(hasFlashcardByNoteId,
- (BOOL)hasNotesForEvernoteId:(NSString*)noteid);
```

##### 保存数据库

Objective-C声明

```objective-c
- (void)savedb;
```

##### 获取所有笔记本

Objective-C声明

```objective-c
- (NSArray *)allNotebooks;
```

##### 获取所有文档

Objective-C声明

```objective-c
- (NSArray*)allDocuments;
```

##### 设置笔记本同步

Objective-C声明

```objective-c
JSExportAs(setNotebookSyncDirty,
- (void)setTopicDirty:(NSString*)topicid);
```

##### 保存历史存档

Objective-C声明

```objective-c
- (NSArray*)saveHistoryArchive:(NSString*)topicid key:(NSString*)key;
```

##### 加载历史存档

Objective-C声明

```objective-c
- (NSArray*)loadHistoryArchive:(NSString*)topicid key:(NSString*)key;
```

##### 删除笔记本

Objective-C声明

```objective-c
- (void)deleteBookNote:(NSString*)noteid;
```

##### 删除笔记本树

Objective-C声明

```objective-c
- (void)deleteBookNoteTree:(NSString*)noteid;
```

##### 克隆笔记

Objective-C声明

```objective-c
- (NSArray*)cloneNotes:(NSArray*)notes toTopic:(NSString*)topicid;
```

##### 克隆笔记至卡片

Objective-C声明

```objective-c
- (NSArray*)cloneNotesToFlashcards:(NSArray*)notes toTopic:(NSString*)topicid;
```

##### 导出笔记本

Objective-C声明

```objective-c
- (BOOL)exportNotebook:(NSString*)topicid storePath:(NSString*)storePath;
```

##### 导入笔记本

Objective-C声明

```objective-c
- (id)importNotebookFromStorePath:(NSString*)storePath merge:(BOOL)merge;
```



#### MbTopic

##### 标题

Objective-C声明

```objective-c
@property (nonatomic,readwrite,setter=setTopicTitle:) NSString * title;
```

##### 主题ID

Objective-C声明

```objc
@property (nonatomic,readonly,getter=topicid) NSString * topicId;
```

##### 上次访问

Objective-C声明

```objc
@property (nonatomic,readonly,getter=lastvisit) NSDate * lastVisit;
```

##### 主文档md5

Objective-C声明

```objc
@property (nonatomic,readonly,getter=localbookmd5) NSString * mainDocMd5;
```

##### 历史数据

Objective-C声明

```objc
@property (nonatomic,readonly,getter=historydate) NSDate * historyDate;
```

##### 同步模式

Objective-C声明

```objc
@property (nonatomic,readonly,getter=syncmode) NSNumber * syncMode;
```

##### 分类列表

Objective-C声明

```objc
@property (nonatomic,readonly,getter=taglist) NSString * categoryList;
```

##### 哈希标签

Objective-C声明

```objc
@property (nonatomic,readonly) NSString * hashtags;
```

##### 文档列表

Objective-C声明

```objc
@property (nonatomic,readonly,getter=booklist) NSString * docList;
```

##### 选项

Objective-C声明

```objc
@property (nonatomic,readonly) NSDictionary * options;
```

##### 文档集合

Objective-C声明

```objc
@property (nonatomic,readonly,getter=books) NSArray * documents;
```

##### 笔记集合

Objective-C声明

```objc
@property (nonatomic,readonly) NSArray * notes;
```

##### 隐藏链接

Objective-C声明

```objective-c
@property (nonatomic,readwrite) BOOL hideLinksInMindMapNode;
```



### Utility

#### 菜单控制器(**MenuController**)

##### 菜单表视图

Objective-C声明

```objective-c
@property (nonatomic,retain)    UITableView* menuTableView;
```

##### 命令表

Objective-C声明

```objective-c
@property (nonatomic,retain)    NSArray* commandTable;
```

##### 部件

Objective-C声明

```objective-c
@property (nonatomic,retain)    NSArray* sections;
```

##### 行高

Objective-C声明

```objective-c
@property (nonatomic,assign)    int rowHeight;
```

##### 注水线

Objective-C声明

```objective-c
@property (nonatomic,assign)    int secHeight;
```

##### 字体尺寸

Objective-C声明

```objective-c
@property (nonatomic,assign)    int fontSize;
```



#### 

#### 朗读管理器(**SpeechManager**)

##### 开始朗读笔记

Objective-C声明

```objective-c
- (void)startSpeechNotes:(NSArray*)notes;
```

##### 停止朗读

Objective-C声明

```objective-c
- (void)stopSpeech;
```

##### 暂停朗读

Objective-C声明

```objective-c
- (void)pauseSpeech;
```

##### 继续朗读

Objective-C声明

```objective-c
- (void)continueSpeech;
```

##### 前朗读

Objective-C声明

```objective-c
- (void)prevSpeech;
```

##### 后朗读

Objective-C声明

```objective-c
- (void)nextSpeech;
```

##### 可以回退

Objective-C声明

```objective-c
- (BOOL)canPrev;
```

##### 可以前进

Objective-C声明

```objective-c
- (BOOL)canNext;
```

##### 朗读内容

Objective-C声明

```objective-c
- (void)playText:(NSString*)text;
```

##### 指定语言

Objective-C声明

```objective-c
- (void)playText:(NSString *)text languageTxt:(NSString*)languageTxt;
```

##### 朗读中

Objective-C声明

```objective-c
@property (nonatomic,readonly) BOOL speaking;
```

##### 暂停朗读

Objective-C声明

```objective-c
@property (nonatomic,readonly) BOOL paused;
```

##### 窗口

Objective-C声明

```objective-c
@property (nonatomic,weak) UIWindow * sceneWindow;
```

##### 语言编码

Objective-C声明

```objective-c
@property (nonatomic,strong) NSString * languageCode;
```



#### 撤销控制

##### 撤销组

Objective-C声明

```objective-c
JSExportAs(undoGrouping,
- (void)undoGrouping:(NSString*)actionName inNotebook:(NSString*)topicid block:(JSValue*)block);
```

##### 撤销

Objective-C声明

```objective-c
- (void)undo;
```



##### 重做

Objective-C声明

```objective-c
- (void)redo;
```



##### 可以撤销

Objective-C声明

```objective-c
- (BOOL)canUndo;
```



##### 可以重做

Objective-C声明

```objective-c
- (BOOL)canRedo;
```



##### 清空

Objective-C声明

```objective-c
- (void)clearAll;
```



#### 压缩文件

##### 解压文件

Objective-C声明

```objective-c
+ (BOOL)unzipFileAtPath:(NSString *)path toDestination:(NSString *)destination;
```



##### 解压文件

Objective-C声明

```objective-c
+ (BOOL)unzipFileAtPath:(NSString *)path toDestination:(NSString *)destination overwrite:(BOOL)overwrite password:(NSString *)password;
```



##### 压缩文件

Objective-C声明

```objective-c
+ (BOOL)createZipFileAtPath:(NSString *)path withFilesAtPaths:(NSArray *)filenames;
```



##### 压缩文件

Objective-C声明

```objective-c
+ (BOOL)createZipFileAtPath:(NSString *)path withContentsOfDirectory:(NSString *)directoryPath;
```



##### 初始化路径

Objective-C声明

```objective-c
- (id)initWithPath:(NSString *)path;
```



##### 打开文件

Objective-C声明

```objective-c
- (BOOL)open;
```



##### 写入文件

Objective-C声明

```objective-c
- (BOOL)writeFile:(NSString *)path;
```



##### 写入数据

Objective-C声明

```objective-c
- (BOOL)writeData:(NSData *)data filename:(NSString *)filename;
```



##### 关闭文件

Objective-C声明

```objective-c
- (BOOL)close;
```

### SQLite

我们不推荐用户直接对SQLite数据库进行操作，因此此处不做过多介绍，若您需要使用相关API，可以在之前下载的API文件中自行查阅。

# 进阶

## 如何调试

由于目前Apple的安全限制，暂无法使用相关调试工具进行断点调试，现阶段您可以使用如`alert`、`showHUD`等方法在屏幕上输出您需要的调试信息。

## QuartzCore

IOS设备给用户的视觉反馈都是基于QuartzCore框架来进行的，利用该框架可以实现一些美观的动画效果，如果您的插件中需要进行UI渲染等，可以自行学习QuartzCore框架

## UIKit

> 以下内容摘自[Apple开发者文档](https://developer.apple.com/cn/documentation/uikit/)，如果您有兴趣可以前往阅读

UIKit 框架提供了 iOS 或 Apple tvOS app 所需的基础架构。它提供了用于实施界面的窗口和视图架构，用于向 app 提供多点触控和其他类型输入的事件处理基础架构，以及管理用户、系统和 app 之间互动所需的主运行循环。该框架提供的其他功能包括动画支持、文档支持、绘图和打印支持、当前设备的相关信息、文本管理和显示、搜索支持、辅助功能支持、app 扩展支持和资源管理。

## 申请官方签名

### 申请渠道

请按照规范格式，发送邮件至 [service@marginnote.com](mailto:service@marginnote.com) ，技术人员会在72小时内完成审核并予以答复。

> 邮件标题：插件签名申请-插件名-论坛ID
>
> 范例：插件签名申请-MDXdict-Petter1925
>
> 邮件正文：
> 1，插件功能描述
> 2，技术说明
>
> 邮件附件：以未签名格式打包的mnaddon文件，用于功能测试

请注意，不规范的邮件格式可能无法被客服系统正确识别。

### 插件签名的权限和功能

#### 即时向用户推送更新

未经认证的插件更新需要用户自行下载覆盖安装新版本，不利于及时修复bug。官方认证后，可通过MN服务器在线向终端用户推送插件升级服务，方便用户及时升级到最新版本。

*说明*：后续更新需要重新按上述流程申请签名，但申请同时我们可以提供代为推送更新的服务。（基于新旧签名识别已安装用户，icloud Kit推送）

#### 免去额外设置

未经认证的插件需要用户额外设置开启“允许加载未经认证的插件”，官方认证后可免除设置并直接安装。

#### 关闭弹窗警告

未经认证的插件会在用户使用MN时会弹出警示窗口，官方认证后，使用插件则不会弹窗。



# 其他

## 常见问题

## AutoTitle 剖析

您或许已经了解了上述的API内容，但对于如何组织一个专属于您的插件还感到些许迷茫，我们为您提供的`AutoTitle`插件中的`main.js`的详细注释版本，需要您结合之前所掌握的内容，来认真阅读与思考，相信您很快就可以上手制作属于自己的插件了。

当然，纸上谈兵是远远不够的，我们非常希望您可以即刻行动，将您的想法付诸实践，这样您才能正常理解本文提到的所有概念。当然，若您发现文本存在错误，或您有更好的想法，欢迎与我们进行交流！

```js
JSB.newAddon = function(mainPath){//这是JSBridge的方法，您不需要关心这里
    var newAddonClass = JSB.defineClass('AutoTitle : JSExtension', /*Instance members*/{
      //Window initialize
      sceneWillConnect: function() {//这里便是之前提到的生命周期函数了，您在sceneWillConnect下所编写的代码，会在窗口激活时被执行
          self.webController = WebViewController.new();//这里创建了一个WebViewController的实例
      },
      //Window disconnect
      sceneDidDisconnect: function() {
      },
      //Window resign active
      sceneWillResignActive: function() {
      },
      //Window become active
      sceneDidBecomeActive: function() {
      },
      notebookWillOpen: function(notebookid) {//这里是notebookWillOpen生命周期，会在笔记本被打开时执行其中的代码
        //NSNotificationCenter是关于消息通知的一个类
        //defaultCenter()是NSNotificationCenter中的类方法，它可以返回该类的实例
        //addObserverSelectorName()是关于添加观察者的方法，显然该方法需要创建实例后调用

        NSNotificationCenter.defaultCenter().addObserverSelectorName(self,'onProcessExcerptText:','ProcessNewExcerpt');
        //当ProcessNewExcerpt发生时，即有新摘录时，触发onProcessExcerptText事件，该事件在后续需要您详细定义其操作内容
        NSNotificationCenter.defaultCenter().addObserverSelectorName(self,'onProcessExcerptText:','ChangeExcerptRange');
        //当ChangeExcerptRange发生时，即修改摘录时，触发onProcessExcerptText事件
        self.autotitle = NSUserDefaults.standardUserDefaults().objectForKey('marginnote_autotitle');
        //绑定插件
      },
      notebookWillClose: function(notebookid) {
        //这里则是当笔记本关闭时，将相关的消息通知关闭
        NSNotificationCenter.defaultCenter().removeObserverName(self,'ProcessNewExcerpt');
        NSNotificationCenter.defaultCenter().removeObserverName(self,'ChangeExcerptRange');
      },
      documentDidOpen: function(docmd5) {
      },
      documentWillClose: function(docmd5) {
      },
      controllerWillLayoutSubviews: function(controller) {
      },
      queryAddonCommandStatus: function() {
        if(Application.sharedInstance().studyController(self.window).studyMode < 3)//判断当前模式，即在只读模式下插件不生效
          return {image:'title.png',object:self,selector:'toggleAutoTitle:',checked:(self.autotitle?true:false)};
        return null;
      },
      //Clicking note
      onProcessExcerptText: function(sender){//这里便是之前触发的事件内容，其中定义了当摘录被创建或改变时需要执行的内容
        if(!Application.sharedInstance().checkNotifySenderInWindow(sender,self.window))return;//仅仅处理当前窗口的内容
        if(!self.autotitle)return;//判断插件是否生效
        var noteid = sender.userInfo.noteid;//获取笔记ID
        var note = Database.sharedInstance().getNoteById(noteid);//通过笔记ID获取笔记
        if(note && note.excerptText && note.excerptText.length > 0 && note.excerptText.length <= 250 && !note.groupNoteId){//笔记存在且摘录文本存在且摘录文本长度不为0且摘录文本长度不足250且没有成组
          var timerCount = 0;//计数器置零
          NSTimer.scheduledTimerWithTimeInterval(1,true,function(timer){
            var text = note.excerptText.split("**").join("");//将摘录文本处理后存入text变量
            if(text && text.length){
              UndoManager.sharedInstance().undoGrouping('AutoTitle',note.notebookId,function(){
                note.noteTitle = text;//将text赋值给笔记标题
                note.excerptText = '';//将笔记摘录置空
                Database.sharedInstance().setNotebookSyncDirty(note.notebookId);//同步修改至数据库
              });
              NSNotificationCenter.defaultCenter().postNotificationNameObjectUserInfo('RefreshAfterDBChange',self,{topicid:note.notebookId});
            }
            timerCount++;
            if(timerCount >= 4){
              timer.invalidate();
            }
          });
        }
      },
      toggleAutoTitle: function(sender) {//这里是插件的开关判断，如果您没有兴趣探究，可以将一下内容稍加修改，便可作为您的插件的开关选择
        var lan = NSLocale.preferredLanguages().length?NSLocale.preferredLanguages()[0].substring(0,2):'en';
        if(self.autotitle){
          self.autotitle = false;
          if(lan == 'zh')
            Application.sharedInstance().showHUD('自动设置标题已关闭',self.window,2);
          else
            Application.sharedInstance().showHUD('Auto title is turned off',self.window,2);
        }
        else{
          self.autotitle = true;
          if(lan == 'zh')
            Application.sharedInstance().showHUD('创建摘录后，摘录内容将自动被设置为笔记标题',self.window,2);
          else
            Application.sharedInstance().showHUD('After creating an excerpt, the excerpt will be automatically set as the note title',self.window,2);
        }
        NSUserDefaults.standardUserDefaults().setObjectForKey(self.autotitle,'marginnote_autotitle');
        Application.sharedInstance().studyController(self.window).refreshAddonCommands();
      },
    }, /*Class members*/{
      addonDidConnect: function() {
      },
      addonWillDisconnect: function() {
      },
      applicationWillEnterForeground: function() {
      },
      applicationDidEnterBackground: function() {
      },
      applicationDidReceiveLocalNotification: function(notify) {
      },
    });
    return newAddonClass;
  };
```

