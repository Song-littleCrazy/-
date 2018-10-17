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


