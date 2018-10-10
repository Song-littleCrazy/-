



浏览器构成:
-

![](https://i.imgur.com/XW1EIaW.png)


 - navigator——浏览器存在于web上的状态和标识（即用户代理）。用来获取一些信息：来自用户摄像头的地理信息，用户偏爱的语言，多媒体流。
 - window——载入浏览器额标签。可以用来但会窗口的大小（window.innerWidth/window.innerHeigt），操作载入窗口的文档，存储客户端上的文档的特殊数据，为当前窗口绑定eventhandler等。
 - document——载入窗口的实际页面。用来返回和操作文档中的HTML和css上的信息。例如：获取dom中一个元素的引用，修改文本内容，应用新的样式，创建或删除新的元素并添加为当前元素的子元素。


基本的DOM操作：
-

 - document.querySelector()：主流方法，使用css选择器选择元素。
 - document.querySelectorAll()：匹配每个匹配选择器的元素，并把他们的引用存储在一个array中。


 - document.getElementById():选择一个已知id的元素。
 - document.getElementsByTagName():返回页面中包含的所有已知类型元素的数组。


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
    
    

    

