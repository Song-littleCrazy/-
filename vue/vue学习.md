vue学习：
---

背景：
-
在创建一个项目的过程中，js的代码越来越多，所以需要引入各种JavaScript的框架，诸如angular、react、vue等。

vue是一个 Approachable（友好的）、versatile（多用途）、performant（高性能)、maintainable（可维护性）和testable（测试性强） 的JavaScript代码库。

vue是一种渐进式的框架 。

vue允许把网页分割成可复用的组件。每个组件都有相应的html，css以及js用来渲染相应的页面。

vue是响应式的（reactive）。当我们的数据变更时，vue会更新所有网页中用到它的地方。


标签

组件系统——
-

一个组件本质上是一个拥有预定义选项的一个vue实例。



响应式
-

当一个Vue实例呗创建时，他想Vue的响应式系统中加入了其data对象中能找到的所有属性。当这些属性的值发生改变时，视图还会产生“响应”，即匹配为最新的值。

    //创建数据对象
    var data ={ a:1 }
    
    //把该对象加入到vue实例中
    var vm = new Vue({
      data: data
    })    
    
    //当修改一个值，另一个也会改变
    vm.a = 2
    data.a // =>2
    
若想要阻止修改，可以用 `Object.freeze()`,响应系统无法再追踪变化。

    <div id="app">
      <p>{{ foo }}</p>
      <!-- 这里的 `foo` 不会更新！ -->
      <button v-on:click="foo = 'baz'">Change it</button>
    </div>
    <script>
    var obj = {
      foo: 'bar'
    }
    Object.freeze(obj)
    
    new Vue({
      el: '#app',
      data: obj,
    })
    </script>




生命周期钩子
-

使用户在不同阶段添加自己的代码。生命周期钩子的this上下文指向调用它的Vue实例。

 - created——在一个实例被创建之后执行代码。
 - mounted——
 - updated——
 - destroyed——

注意：不要再选项属性或回调上使用箭头函数。


模板语法
-

在底层的实现上，Vue将模板编译成虚拟DOM渲染函数。结合响应系统，Vue能够智能地计算除最少需要重新渲染多少组件，并把DOM操作次数减少到最少。


  - 文本——{{}}、使用v-once指令
    - 原始HTML：使用v-html指令
    - HTML特性：使用v-bind指令
    - 直接在{{}}中使用JavaScript表达式
  - 
  - 指令——带有v-前缀的特殊特性
    - 职责：当表达式的值改变时，将其产生的连带影响，响应式地作用于DOM
    - 参数：添加一个附加属性。 `v-on:click=''`
    - 修饰符：以特殊方式绑定。 `<form v-on:submit.prevent="onSubmit">...</form>`——.prevent 修饰符告诉 v-on 指令对于触发的事件调用 event.preventDefault()
  - 
  - 缩写——对v-bind(:)和v-on(@)常用的属性进行缩写
    - <a v-bind:href="url"> -->  <a :href="url">
    - <button v-on:click="dosomething"> --> <button @click="dosomething">


计算属性和侦听器
-
  - 计算属性——用于复杂逻辑
  - 可以设置两个参数，getter和setter
  - 区别于方法：
    - **计算属性computed**：计算属性是基于它们的依赖进行缓存的。只在相关依赖发生改变时，它们才会重新求值。
    - **方法（在组件中的应用）methods**：每当触发重新渲染时，调用方法将总会再次执行函数。不依赖缓存。
    - 两种方法的结果都一样。
  - 区别于侦听属性：
    - **侦听属性watch**：当一些数据需要随着他的数据的变动而变动
    - 而相比之下，计算属性更加简洁和方便


  - 侦听器watch——当数据变化时执行一部或者开销比较大的操作时，此方法最有用。


Class与Style绑定
-

用v-bind处理，通过表达式计算出字符串结果

  - 绑定class：`v-bind:class=""`
  - 绑定内联样式：`v-bind:style=""`


条件渲染
-

  - v-if：
    - `<h1 v-if='ok'>OK</h1>`
    - `<h1 v-else>NO</h1>`
    - 用key属性使两个元素完全独立，不再复用，从而得到不同的值
  - v-show：
    - 带有v-show的元素始终会被渲染并保留在DOM中。
    - v-show只是简单的切换元素css属性的display
    - v-show不支持<template>和<v-else>
  - v-show和v-if区别：
    - v-if是“真正”的条件渲染，因为它会确保在切换过程中条件块的事件监听器和子组件适当的被销毁和重建。
    - v-if是惰性的：在初始渲染条件为假时，则什么也不做，直到第一次条件变为真时，才开始渲染条件块。
    - v-show不管初始条件是什么，元素都会被渲染，并且只是简单地基于css进行切换。
    - 综上，v-if有更高的切换开销，而v-show有更高的初始渲染开销。所以需要频繁的切换——>v-show； 在运行时，条件很少改变——>v-if。
     
列表渲染
-

  - v-for：
    - `<li v-for="item in items">{{ item.message }}</li>`
    - 使用`item in items`语法
    - 支持索引`(item, index) in items`
    - 使用对象`value in object`
    - 支持索引和键名`(value, key, index) in object`
    - 默认“就地复用”，高效的，但是只适用于不依赖子组件状态或临时 DOM 状态 (例如：表单输入值) 的列表渲染输出。
    - key值使各个内容不再复用
  
  - 数组更新检测
    - 变异方法：
      - push()
      - pop()
      - shift()
      - unshift()
      - splice()
      - sort()
      - reverse()
    - 替换数组：
      - filter()
      - concat() 
      - slice()


事件处理
-

  - 监听事件：
    - v-on——监听DOM事件，并接收一些参数
      - 在触发时运行一些JavaScript代码
      - 直接接收函数名
      - 内联处理器中的方法
  - 事件修饰符：
    - .stop——event.stopPropagation阻止事件继续传播
    - .prevent——event.preventDefault()
    - .capture
    - .self
    - .once——点击事件指挥触发一次
    - .passive——立即触发（对应addEventListener中的passive选项）
    - 顺序很重要，相应额代码会议同样的顺序产生。eg.:`v-on:click.prevent.self`会阻止所有的点击；而`v-on:click.self.prevent`只会阻止对元素自身的点击。
  - 按键修饰符(`v-on:keyup`简写：`@keyup`)：
    - .enter
    - .tab
    - .delete(捕获“删除”和“退格”键)
    - .esc
    - .space
    - .up
    - .down
    - .left
    - .right
    - .ctrl
    - .alt
    - .shift
    - .exact(允许控制由精准的系统修饰符组合触发的事件)
    - .meta(在 Mac 系统键盘上，meta 对应 command 键 ⌘。在 Windows 系统键盘 meta 对应 Windows 徽标键 ⊞)
    - 通过全局config.keyCodes对象自定义按键修饰符别名 `Vue.config.keyCodes.f1 = 112`
  - v-on的好处：
    - 根据HTML模板轻松定位在JavaScript中对应的方法
    - 无需再JavaScript中手动绑定事件。ViewModel代码具有非常纯粹的逻辑和DOM完全耦合，更易于测试。
    - 当一个 ViewModel 被销毁时，所有的事件处理器都会自动被删除。












