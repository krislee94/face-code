
<br />

<a name="89W9o"></a>
## 原生js怎么实现拖放

<br />三个事件： **onmousedown，****onmousemove，onmouseup**<br />**<br />

<a name="9Hajr"></a>
## react-dnd拖放的核心API


- DndProvider  //一个容器，在这个容器中的元素可以进行拖放的操作。
```javascript
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'

export default class YourApp {
  render() {
    return (
      <DndProvider backend={HTML5Backend}>
        /* Your Drag-and-Drop Application */
      </DndProvider>
    )
  }
}
```

- useDrag 一个 hook 函数，可以让一个 DOM 元素实现拖拽效果。
```javascript
import { useDrag } from 'react-dnd'

function DraggableComponent(props) {
  const [collectedProps, drag] = useDrag({
    item: { id, type }
  })
  return <div ref={drag}>...</div>
}
```

- useDrop 一个 hook 函数，可以让一个 DOM 元素能够放置拖拽元素。
```javascript
import { useDrop } from 'react-dnd'

function myDropTarget(props) {
  const [collectedProps, drop] = useDrop({
    accept
  })

  return <div ref={drop}>Drop Target</div>
}
```
<a name="xEAw1"></a>
## react diff 算法复杂度是多少

<br />React Diff算法将传统O(n^3)Diff算法的时间复杂度降为O(n)<br />
<br />** React Diff算法 **=> O(n) => 简单粗暴，所有的节点按层级比较，只会遍历一次

<a name="Kivsg"></a>
## diff造成的非预期更新如何解决


- shouldCompoentUpdate()
- 为循环的组件添加不同的key值



<a name="5YU21"></a>
## 如何实现路由监听


<a name="Ownlu"></a>
###  react-router
<a name="MvJAU"></a>
#### hash

- `hash`是 `URL` 中 `hash(#)` 及后面的那部分，常用作锚点在页面内进行导航，改变 `URL` 中的 `hash` 部分不会引起页面刷新<br />
- 通过 `hashchange` 事件监听 `URL` 的变化，改变 `URL` 的方式只有这几种：通过浏览器前进后退改变 `URL`、通过 标签改变 `URL`、通过 `window.location`改变 `URL`，这几种情况改变 `URL`都会触发 `hashchange` 事件<br />
<a name="e97qm"></a>
#### history实现

- `history` 提供了 `pushState`和 `replaceState` 两个方法，这两个方法改变 `URL` 的 `path` 部分不会引起页面刷新<br />
- `history` 提供类似 `hashchange` 事件的 `popstate`事件，但 `popstate` 事件有些不同：通过浏览器前进后退改变 `URL` 时会触发 `popstate` 事件，通过 `pushState/replaceState`或 标签改变 `URL`不会触发 `popstate` 事件。好在我们可以拦截 `pushState/replaceState`的调用和 标签的点击事件来检测 `URL` 变化，所以监听 `URL` 变化可以实现，只是没有 hashchange 那么方便。<br />


<br />同时还可以通过 window.addEventListener()  去监听路由的变化

<a name="Bg2Wj"></a>
### vue


```javascript
this.$router.beforeEach((to, from, next) => {
    console.log(to);
    next();
});
```
```javascript
watch:{
    $route(to,from){
      console.log(from.path);//从哪来
      console.log(to.path);//到哪去
    }
}
```

<br />

<a name="RjfsM"></a>
## 页面适配方案:百分比,flex,vh,vw


- Grid布局： [阮一峰老师Grid布局](http://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html) 
- vh-vw布局
- flex布局
- rem


<br />

<a name="PPavN"></a>
## 从地址栏输入地址到页面回显,都发生了什么

<br />**1、浏览器（客户端）进行地址解析。**<br />**2、将解析出的域名进行dns解析。**<br />**3、通过ip寻址和arp，找到目标（服务器）地址。<br />4、进行tcp三次握手，建立tcp连接。<br />5、浏览器发送数据，等待服务器响应。<br />6、服务器处理请求，并对请求做出响应。<br />7、浏览器收到服务器响应，得到html代码。<br />8、渲染页面。**<br />**
<a name="A0SCo"></a>
## 解释下重绘和回流
![image.png](https://cdn.nlark.com/yuque/0/2021/png/104117/1617642534426-cb904e2c-3993-4f1e-b29a-ab74df0fb827.png#align=left&display=inline&height=145&margin=%5Bobject%20Object%5D&name=image.png&originHeight=289&originWidth=624&size=41939&status=done&style=none&width=312)

- 解析HTML，生成DOM树，解析CSS，生成CSSOM样式结构体
- 将DOM树和CSSOM结合，生成渲染树(Render Tree)
- Layout(回流):根据生成的渲染树，进行回流(Layout)，得到节点的几何信息（位置，大小）
- Painting(重绘):根据渲染树以及回流得到的几何信息，得到节点的绝对像素
- Display:将像素发送给GPU，展示在页面上。



- 每个页面至少需要一次回流+重绘；
- 回流必将引起重绘，而重绘不一定会引起回流



<a name="kZHIf"></a>
### 回流
当渲染树中的一部分（或全部）因为元素的规模尺寸，布局，隐藏等改变而需要重新构建的过程叫回流（改变大小、布局）。<br />

<a name="00a2090d"></a>
#### 回流发生条件
当页面布局和几何属性改变时，如以下：<br />
<br />1、添加或者删除可见的DOM元素；<br />
<br />2、元素位置改变；<br />
<br />3、元素尺寸改变——边距、填充、边框、宽度和高度<br />
<br />4、内容改变——比如文本改变或者图片大小改变而引起的计算值宽度和高度改变；<br />
<br />5、页面渲染初始化；<br />
<br />6、浏览器窗口尺寸改变——resize事件发生时；<br />
<br />
<br />

<a name="0cCk4"></a>
### 重绘
当渲染树中的一部分元素需要更新属性，如改变元素的外观、风格，而不影响布局的重新渲染的过程叫重绘（改变样式）。<br />

<a name="sHILd"></a>
#### 重绘的条件

<br />元素的属性或样式发生改变，如background-color改变等。<br />回流的开销很大，如果每次操作都进行回流和重绘，消耗相当大，那么如何进行性能优化？<br />

<a name="RRLPP"></a>
### 优化
大多数浏览器都会通过队列化修改并批量执行来优化重排过程。<br />
<br />浏览器会把所有会引起回流、重绘的操作都放入一个队列，等过一定的时间或者操作达到了一定的阈值，浏览器就会flush队列，进行一个批处理。这样让多次的回流和重绘变成一次回流重绘。<br />但是，当获取布局信息操作的时候，会强制浏览器提前flush队列，触发回流重绘返回信息，这种情况下，浏览器的优化就不起作用了。比如以下属性或方法：<br />
<br />offsetTop、offsetLeft、offsetWidth、offsetHeight<br />scrollTop、scrollLeft、scrollWidth、scrollHeight<br />clientTop、clientLeft、clientWidth、clientHeight<br />getComputedStyle()<br />getBoundingClientRect<br />那么，除了浏览器的优化，我们还有什么方法可以来减少回流和重绘达到性能优化？<br />
<br />

- **通过合并多次DOM样式的修改，来减少回流和重绘的发生次数**
- **批量修改DOM**
- **避免引起浏览器强制flush队列**
- **对于有动画效果的元素，使用绝对定位让其脱离文档流，如position属性设为absolute或fixed**

**<br />原文连接：[https://blog.csdn.net/KongKong_Rac/article/details/108883433](https://blog.csdn.net/KongKong_Rac/article/details/108883433)<br />
<br />

<a name="OGlmk"></a>
## 说一下js中的类和java中的类的区别

<br />

- js里没有类的概念，js的继承是依靠原型链完成的。
- JS 中没有内部类，但 JS 可以在 function（方法）中定义类。
- JS没有私有成员，但是可以通过闭包来实现。
- JS 的调用静态函数需要写类名，如果是静态函数调用静态函数，需要前缀类名或 this.；Java 可以直接调
- javascript 的 new 作用于 Function 对象，java 的 new 作用于类。由于 JS 中没有类，所以是用 Function 对象作为构造函数来代替类的，java 中有类，类也可以定义构造方法（不定义会有默认的无参数构造方法）。不过有个很重要的区别，不是 new 的，是语言的，Java 是静态语法，编译器会检查各种语法和约束，javascript 不会。所以在 java 中 new 的时候，一定要注意构造方法申明的参数（包含重载的），如果找不到参数匹配的构造函数重载，会抛出异常。


<br />

<a name="ePJVo"></a>
## 说一下js中如何实现函数重载


```javascript
function React() {
    if(arguments.length==1){
        this.width=arguments[0];
        this.height=arguments[0]
    }
    if(arguments.length>1){
        this.width=arguments[0];
        this.height=arguments[1]
    }
    this.toString=function () {
        return 'width：'+this.width+'，height：'+this.height;
    }
}
var r1=new React(10);
var r2=new React(10,9);
————————————————
版权声明：本文为CSDN博主「Master.Yuan」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/yuanwen52/article/details/105612330
```


<a name="MTWFM"></a>
## webpack动态加载
```javascript
import('lodash').then(_ => {
    // Do something with lodash (a.k.a '_')...
})
```

<br />
<br />

