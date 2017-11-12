
# Node.js Course

source https://ke.qq.com/course/199161  

## 基础知识
Ryan Dahl 高性能web网站设计师   
- 异步I/O   
不能等待硬盘数据返回，否则浪费CPU阻塞，造成性能浪费
RD-单线程、事件驱动与异步I/O实现  
- V8  chrome js解析引擎
javascript 运行于引擎上，没有独立编码能力——脚本语言   
RD 移植V8引擎到服务器，通过双向请求设立服务  
没有同步I/O，不会出现同步I/O导致事件循环性能降低  
性能好，超过python、ruby等语言
闭包特性方便，比c中的回调函数好用（作用域）  
- node 2009.05  
node.js为提高性能

### 配置
- 为各个平台提供安装包与源代码
- node -v

### node.js性质
- node 是后台语言    
php/jsp/asp/python   
- 前端语言   
运行在浏览器上的就是前端语言：html/js/css(用户可见)  
- 没有根目录  
apache 有根目录，能自动获得HTTP URL地址；即提供静态资源服务；PHP构建在Apache之上   
nodejs 与经典LAMP不同，不用构建在任何服务器软件之上  
如何解决没有根目录的问题
- 模块   
借助fs模块读取文件内容，通过异步回调函数操作
- 顶层路由设计
文件需要有路由指向路径、异步响应可重复调用  
每次刷新后会重新加载  
例程：加载图片与css样式表
- 单线程   
java/PHP或.net会为每个客户端创建一个新的进程，每个进程需要消耗2MB内存。计算机操作系统（进程（多线程）与线程（执行程序的最小单位））   
用户连接后触发内部事件，通过非阻塞I/0，事件驱动机制，让Node.js宏观上也是并行。   
__适合__多IO事件，断点越多越符合，但不太适用大量计算过程（易堵塞）  
NodeJS 对程序的鲁棒性要求极高   
需要在服务中找到一些断点，
- 非阻塞IO     
是单线程下系统运行的必要条件，这个特性才能保证单线程够用   
举例：一个用户去读取磁盘文件的时候，CPI一个线程不会被堵塞，Node.js所有I/O都是异步的，CPU同时进行后续语句   
I/O操作是切换点，服务源计算不是异步
计算队列，单线程配合异步I/O，事件队列形式  
- 事件环 Event-driven    
一个时刻只能执行一个事件回调函数，但是事件回调函数中途可以执行其他事件  
__以上是三个特点__：三者相辅相成
#### Node.js适合开发
1. 大量并发IO   
2. 配合web socket，开发长连接的实时交互程序   
3. 例如：用户表单、聊天室、图文直播、提供JSON接口的API   
#### 缺点
性能高，但是缺少很多服务器的健壮性
中小系统利用node开发、成熟企业用于开发某一方面的内容

### Node.js实践
- GET 请求   
通过URL的？querystring来传递参数，不安全，能传递的内容少，方便分享网址   
GET请求：利用module url解析网址，通过parse解析query部分，得到querstring   
或者利用querystring模块，专门处理字符串型的querystring输入，转为json   
node.js/doc/node querystirng.stringify
- POST请求   
通过上行报文的报文体来传递参数，安全，传递的内容多，但不方便分享   
可以实现图片、音频等；POST通常用来传递大量的内容，nodejs可能会被堵塞，但是其会将较大的内容分成包传输，在包传递完后找到切换点，nodejs就可以给其他的事件提供服务，因此post请求效率高。     
```js
    req.on("data",function(chunk){ 
        //将小包传入大结果中
    });
    req.on("end",function(){
        //接受完数据后返回的结果
    });
```
- 自定义模块   
1. require后直接执行其中的程序    
2. 作用域独立，不能跨包（输出不了window对象）   
3. __向外暴露__ exports   
4. 约定：引用的包的名称作为变量     
5. moudle.exports 暴露单独的结构   
6. 连续require， node会自动阻止环状引用    
7. 与MVC分层有关，分离功能函数（独立逻辑体系将业务进行分割）

- node_moudles文件夹    

引用该文件夹下的js文件可以不用指定文件路径   
node_modules文件夹中创建一个新的文件夹，调用其中的index.js可以直写该文件名    
同级回溯功能，在项目的母目录中都可以。   

- npm

node package management node.js包管理器   
https://www.npmjs.com   
github可能有包含业务项目，npm和业务独立，组成了互相引用生态：分享轮子而非重复工作   
测试：使用成熟的接口开发自身的个性化项目   


- package.json 依赖文件

npm init 创建package.json文件
entry point:
test command: 测试命令
git repository: git 仓库  
其中没有所谓的依赖项目，在安装任何包的时候，记得加上-save ,会自动加上依赖文件，之后npm install 会自动安装所有依赖
开始一个项目，从init开始  
-g 参数，在全局一般安装的是cli，command line interface    
查看自己的全局路径``` npm root -g ```   

  

