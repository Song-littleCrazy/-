
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

 - 直接在想要动态设置样式的元素内部添加内联样式。
 -  `para.style.color = 'white'; para.style.backgroundColor = 'black';`
 - 在`<style>`中设置样式
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
    
    
