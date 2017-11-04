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
### react特征
__active state
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
