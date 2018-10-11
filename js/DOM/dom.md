
**DOM**
---


浏览器构成:
-

![](https://i.imgur.com/XW1EIaW.png)


 - navigator——浏览器存在于web上的状态和标识（即用户代理）。用来获取一些信息：来自用户摄像头的地理信息，用户偏爱的语言，多媒体流。
 - window——载入浏览器额标签。可以用来但会窗口的大小（window.innerWidth/window.innerHeigt），操作载入窗口的文档，存储客户端上的文档的特殊数据，为当前窗口绑定eventhandler等。
 - document——载入窗口的实际页面。用来返回和操作文档中的HTML和css上的信息。例如：获取dom中一个元素的引用，修改文本内容，应用新的样式，创建或删除新的元素并添加为当前元素的子元素。
   
DOM构成：
-

 - 基本的节点类型是 Node，用于抽象地表示文档中一个独立的部分；所有其他类型都继承自 Node。 
 - Document 类型表示整个文档，是一组分层节点的根节点。在 JavaScript中，document 对象是 Document 的一个实例。使用 document 对象，有很多种方式可以查询和取得节点。 
 - Element 节点表示文档中的所有 HTML或 XML元素，可以用来操作这些元素的内容和特性。 
 - 另外还有一些节点类型，分别表示文本内容、注释、文档类型、CDATA区域和文档片段。 

基本的DOM操作：
-
 - 三个和网页请求有关的属性：
   - URL： `var url = document.URL;`获得完整的url。
   - domain: `var domain = document.domain; `取得域名。
   - referrer: `var referrer = document.referrer;`取得来源页面的url。
 
 - 查找元素：
   - document.querySelector()：主流方法，使用css选择器选择元素。
   - document.querySelectorAll()：匹配每个匹配选择器的元素，并把他们的引用存储在一个array中。


   - document.getElementById():选择一个已知id的元素。
   - document.getElementsByTagName():取得元素的标签名，返回页面中包含的所有已知类型元素的数组NodeList。
   - document.getElementsByName():取得带name的所有元素。通常用在具有相同name的单选按钮。

节点及其关系：
-
    
![](https://i.imgur.com/1mMNeKa.png)

 - 已知父节点 操作子节点：
   - appendChild()方法——用于向childNodes列表的末尾添加一个节点。一个参数。
   - insertBefore()方法——插入到参照节点的前面。两个参数（要插入的节点，参照节点）。当参照节点为null时，于appendChild执行的操作相同。`someNode.insertBefore(newNode, someNode.firstChild); `
   - replaceChild()方法——前面替换后面的节点。两个参数（要插入的节点，替换节点）。
   - removeChild()方法——移除节点。一个参数。
 - 其他方法：
   - cloneNode()方法——创建完全相同的节点副本。但需要用上面的方法将其添加到文档中。
     - true——深复制
     - false——浅复制
   - normalize()方法——唯一作用就是处理文档树中的文本节点。
     

创建新元素：
-


 - 先创建新的段落或文本节点：
 - `var para = document.createElement("P"); para.textContent = "Hello world!"; `
 - `var text = document.craeateTextNode("文本内容");`
 - 然后获取想要添加的地方，进行添加。
 - `var div = document.querySelector("div");`
 - `div.appendChild(para);`


移除节点：
-

 - 当用于要删除的节点和父节点时：
 - `div.removeChild(para);`
 - 基于自身的删除：
 - `para.parentNode.removeChild(para);`


操作样式：
-

 - 1. 直接在想要动态设置样式的元素内部添加内联样式。
 -  `para.style.color = 'white'; para.style.backgroundColor = 'black';`
 - 2. 在`<style>`中设置样式
 - `.highlight {
      color: white;
      background-color: black;
      padding: 10px;
      width: 250px;
      text-align: center;
    }`
 - 然后进行添加
 - `para.setAttribute("class","highlight");`
 - 以上两种方法各有优缺点，根据需要自行选择。
    
    
 1. 改变html元素的：
-
   - 内容：`document.getElementById(id).innerHTML=new HTML`
   - 属性：`document.getElementById(id).attribute = new value`
   - (例子：`document.getElementById("image").src="landscape.jpg";`)
   - 样式：`document.getElementById(id).style.property=new style`
     - style的属性[http://www.w3school.com.cn/jsref/dom_obj_style.asp](http://www.w3school.com.cn/jsref/dom_obj_style.asp "w3school关于style的一些属性")：
       - background:
       - border、padding和margin
       - positioning：如botoom/left/right/top/zIndex/position
       - 布局
       - text 


 2. 改变css样式：
-

 - 四种方法及其优缺点[https://www.cnblogs.com/aademeng/articles/6279060.html](https://www.cnblogs.com/aademeng/articles/6279060.html)：
   - 1、 使用obj.className来修改样式表的类名。
     - `obj.style.backgroundColor= "black";`
     - style = 内联式>外联式;由于horver伪类位于内联式中，所以伪类会被覆盖。
     - 即时修改样式，并覆盖掉其他方式的设置。
   - 2、使用obj.style.cssTest来修改嵌入式的css。
     - [https://www.cnblogs.com/majingyi/p/6840818.html](https://www.cnblogs.com/majingyi/p/6840818.html)
     - `obj.style.cssText = " display:block;color:White;`
     - cssTExt本质——设置html元素的style属性值。
     - 优点1：避免页面reflow（像1中被定义n多次），提高页面性能。  
     - 优点2：可以累加，但要注意加分号：`obj.style.cssText += " ；display:block;color:White;`
     - 缺点同上。
   - 3、使用obj.className来修改样式表的类名。
     - [https://www.cnblogs.com/GreenLeaves/p/5757216.html](https://www.cnblogs.com/GreenLeaves/p/5757216.html)- 
     - `obj.setAttribute("class", "style2");`
     - `obj.className = "style2";`
     - 两种方法实现。比上面两种的效果好很多。
     - 优点：实现了样式与行为的分离，减少代码量。在后期需求不确定时 ，用此方法。
     - 缺陷：通过className设置元素的class属性时将替换（而不是追加）该元素原有的class属性。
     - 自定义追加classname的效果的代码：
     

     -     `function addClass(element,value) {`
    `if (!element.className) { element.className = value; }` 
    `else {`
    `newClassName = element.className;`
    `newClassName += " "; //这句代码追加的类名分开`
    `newClassName += value;`
    `element.className = newClassName; }`
    `}`
   - 4、使用更改外联的css文件，从而改变元素的css
     - `<link href="css1.css" rel="stylesheet" type="text/css" id="css"/>`
   `obj.setAttribute("href","css2.css");`
     - 实现整体页面换肤的最佳方案