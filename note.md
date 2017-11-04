# 学习笔记

## 简介
- 前端三大框架：angular\vue\react   
- angular 擅长输入、接管ui，但不能用原生Js/JQuery  
  react 擅长组件化、状态管理   
- React来源：facebook       

__三个优点__     
1. 组件化——分工、合作
2. 虚拟DOM——原生JS相对普通操作较慢1/4000、内存数组、性能高
3. 跨平台——移动端（相对jquery）   

__缺点__    
1. 学习曲线较陡，刚上手较为费劲
2. 设计思想较为特别，相对其他框架

### React技术栈
React native: 移动端原生程序
1. React主体<br>
2. webpack ： grunt，gulp 自动化构建工具<br>
3. flex：react布局<br>
4. React-Route:路由<br>
5. Redux: View层 将复杂页面分割；如果不知道是干什么的，那你暂时不需要他<br>
6. Mocha：测试<br>
7. Istanbul：覆盖率<br>

### JSX
- js语法增强-ES6可以直接放入HTML    
- 需要babel编译JSX          
学习ES6语法规则与相关的编译原理    
1. JSX 只能有一个顶级元素（一个父元素）   
2. 模板字符串 es6 abc${xxx}    
### 要填的坑
```
npm install Bower   
bower install babel    
```

## simple react-demo
```
javascript src: react react-dom browser
<scirpt type="text/babel">
class Demo extends React.Component{ //注意组件名首字母必须uppercase

}
ReactDom.render({
return <div>...</div>;
})
</script>
```
#### 结合jquery
```
ref="demo"    
$(this.refs["demo"]).xxx  
```
组件内节点   
ref="类似id"    
this.refs['name']=>原生     
__Drag Demo__
1. 结合document.onmousemove/onmouseup等函数   
在MouseDown时传入点击方框的相对坐标，通过移动move时的page_xy坐标减去相对坐标，计算生成方框的坐标x/y
2. ref="demo"   

__From 操作__
__层级关系 事件冒泡__

#### 组件间通信
- 父子级间通信
1. 回调函数 子通过this.function.bind(this)传到父
2. emit
3. 
### webpack
- 问题
1. babel 实时编译
2. 测试复杂
3. 自己搭建服务器
4. 没有热更新
- webpack脚手架配置
```
npm install -g webpack #webpack的cli环境
npm install -g webpack-dev-server #webpack server环境
#各种依赖库]
# webpack本身
npm install webpack -D   # webpack本地依赖
npm install webpack-dev-server -D #webpack服务器本地依赖
# babel相关
npm install babel-core -D #后台编译工具
npm install babel-perset-es2015 -D #babel对ES2015的预设
npm install babel-loader -D #babel模块的加载器
# babel-react预设
npm install babel-preset-react -D #babel-react预设
# react
npm install react -D #react库本身
npm install react-dom -D #react-dom库本身
npm install react-hot-loader -D # react 热更新
# 样式表相关
npm install style-loader -D
npm install css-loader -D
```
- 在package.json目录下，`npm install`即可安装所有依赖  
3. 编写webpack的配置文件   
- webpack.config.js   # webpack配置文件
- .baberc     # babel预设文件
4. 启动服务器
- webpack : 生成bundle.js/bundle.js.map
- webpack-dev-server --hot 本地webpack服务器，热编译更新
### react特征
__active state__
- constructor this.state={xxx}
- other this.setState()
- onChange(this.fn.bind(this) 语法较为严格、JSX需要编译
- 绑定事件需要固定的格式
- 用了constructor，必须用super构造

#### React组件生存周期
1. componentWillMount() 创建之前/正要挂载
2. componentDidMount() 创建之后
3. componentWillUpdate() 更新之前/正要更新
4. componentDidUpdate() 更新之后
5. componentWillUnmount() 卸载之前  
__(没有didUnmount)__
6. componentWillReceiveProps() 组件的参数已经更新   
