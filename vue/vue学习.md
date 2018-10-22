vue学习：
---
vue是一套用于构建用户界面的渐进式框架。

背景：
-
在创建一个项目的过程中，js的代码越来越多，所以需要引入各种JavaScript的框架，诸如angular、react、vue等。

vue是一个 Approachable（友好的）、versatile（多用途）、performant（高性能)、maintainable（可维护性）和testable（测试性强） 的JavaScript代码库。

vue是一种渐进式的框架 。

vue允许把网页分割成可复用的组件。每个组件都有相应的html，css以及js用来渲染相应的页面。

vue是响应式的（reactive）。当我们的数据变更时，vue会更新所有网页中用到它的地方。


对比其他框架：
-

**React：**

  - 相似之处：
    - 使用Virtual DOM
    - 提供响应式（reactive）和组件化（Composable）的视图组件
    - 将注意力集中保持在核心库，而将其他功能如路由和全局状态管理交给相关的库。
  - 不同：
    - 在react应用中，当某个组件的状态发生变化时，它会以该组件为根，重新渲染整个组件子树。（可以采用PureComponent或手动实现shouldcomponentUpdate方法来避免不必要的子组件的重渲染）
    - 在react中，一切都是JavaScript。不仅HTML可以用JSK来表达，CSS也可以纳入到Javascript中来处理。
      - JSX渲染函数的优点：
        - （1）使用完整的JavaScript功能来构建视图页面。
        - （2）开发工具对JSX的支持相比于现有可用的其他Vue模板还是比较先进的。
      - 组件作用域中的css
        - （1）除非你把组件分布在多个文件上，css作用域在react中是通过Css-in-JS的方案实现的。
        - （2）这引入了一个新的面向组件的样式范例，它和普通的css撰写过程是有区别的。  
        - （3）虽然在构建时，将普通的css提取到一个单独的样式时支持的，但bundle里通常还需要一个程序来让这些样式生效，所有也需要权衡bundle的尺寸和运行时的开销。
    - vue的路由和状态管理库都是由官方维护支持且与核心库同步更新的。react则是选择把这些问题交给社区维护，因此创建了一个更分散的生态系统，但相对的，react的生态系统比vue更加繁荣。
    - react学习曲线陡峭，在学之前，需要知道JSX和ES2015，因为许多示例用的都是这些语法。还需要学习构建系统。而vue的学习就比较简单，直接引入`<script src="https://cdn.jsdelivr.net/npm/vue"></script>`标签。
    - React Native可以用相同的组件模型编写由本地渲染能力的APP（ios和Android）。能同时跨平台开发，对开发者使非常棒的。
    

**创建vue实例：**
-

    var vm = new Vue({
      //选项
    })
    
当创建一个Vue实例时，可以传入一个选项对象。有如下几种：

  1. data：
    - 类型：object | Function
    - 数据对象。Vue会递归将data的属性转换为getter/setter，从而让打他的属性能够响应数据变化。
    - 对象必须时纯粹的对象（含有0或多个的key/value对）：浏览器API创建的原生对象，原型上的属性会被忽略。
    - 实例创建后，可以通过`vm.$data`访问原始数据对象。
    - 当一个组件被定义，data必须声明一个返回初始数据对象的函数，以为组件可能被用来创建多个实例。
  2. props：
    - 类型：Array<string> | Object
    - props可以是数组或对象，用于接收来自父组件的数据。对象允许配置高级选项，如类型检测、自定义检验和设置默认值。
  3. propsData：
    - 类型：{ [key: string]: any }
    - 创建实例时传递props。主要作用是方便测试。
  4. computed
    - 类型：{ [key: string]: Function | { get: Function, set: Function } }
    - 计算属性将被混入到 Vue 实例中。所有 getter 和 setter 的 this 上下文自动地绑定为 Vue 实例。
    - 注意如果一个计算属性使用了箭头函数，则 this 不会指向这个组件的实例，不过仍然可以将其实例作为函数的第一个参数来访问。
  5. methods
     - 类型：{ [key: string]: Function }
     - methods 将被混入到 Vue 实例中。可以直接通过 VM 实例访问这些方法，或者在指令表达式中使用。方法中的 this 自动绑定为 Vue 实例。
     - 不应该使用箭头函数来定义 method 函数。理由是箭头函数绑定了父级作用域的上下文，所以 this 将不会按照期望指向 Vue 实例。
  6. watch
     - 类型：{ [key: string]: string | Function | Object | Array }
     - 一个对象，键是需要观察的表达式，值是对应回调函数。值也可以是方法名，或者包含选项的对象。
     - Vue 实例将会在实例化时调用 $watch()，遍历 watch 对象的每一个属性。
     - 不应该使用箭头函数来定义 watcher 函数

一个Vue应用应由一个通过new Vue创建的根Vue实例，以及可选的嵌套的、可复用的组件树组成。例如，一个todo应用的组件树可以是：

>
    根实例
    └─TodoList
       |-TodoItem
       |  |-DeleteTodoButton
       |  └─ EditTodoButton
       └─ TodoListFooter
          |-ClearTodoButton
          └─ TodoListStatistics


响应式系统
-

当一个Vue实例呗创建时，它向Vue的响应式系统中加入了其data对象中能找到的所有属性。当这些属性的值发生改变时，视图还会产生“响应”，即匹配为最新 的值。

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

![](https://i.imgur.com/yyjUVZf.png)
![](https://i.imgur.com/Hlo5EKr.png)

 - beforeCreate——在实例初始化之后，数据观测（data observer） 和 event/watcher事件配置之前被调用。


 - `created`——在一个实例被创建完成后立即调用。在这一步，实例已完成以下的配置：数据观测 (data observer)，属性和方法的运算，watch/event 事件回调。然而，挂载阶段还没开始，$el 属性目前不可见。


 - beforeMount——在挂载之前被调用：相关的render函数首次被调用。**该钩子在服务器渲染期间不被调用。**


 - `mounted`——el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子。如果 root 实例挂载了一个文档内元素，当 mounted 被调用时 vm.$el 也在文档内。**该钩子在服务器渲染期间不被调用。**


 - beforeUpdate——数据更新时调用，发生在虚拟DOM打补丁之前，这里适合在更新之前访问现有的DOM，如手动移除已添加的事件监听。**该钩子在服务器端渲染期间不被调用，因为只有初次渲染会在服务端进行。**


 - updated——由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。然而在大多数情况下，你应该避免在此期间更改状态。如果要相应状态改变，通常最好使用计算属性或 watcher 取而代之。**该钩子在服务器端渲染期间不被调用。**


 - actived——keep-alive组件激活时被调用。**该钩子在服务器端渲染期间不被调用。**


 - deactived——keep-live组件停用时调用。**该钩子在服务器端渲染期间不被调用。** 


 - beforeDestroyed——实例销毁之前调用，在这一步，实例仍然完全可用。**该钩子在服务器端渲染期间不被调用。**


 - destroyed——Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。**该钩子在服务器端渲染期间不被调用。**

注意：不要在选项属性或回调上使用箭头函数。因为箭头函数和父级上下文绑定在一起，this不会指向vue实例，会导致`Uncaught TypeError: Cannot read property of undefined` 或 `Uncaught TypeError: this.myMethod is not a function` 之类的错误。


模板语法
-

Vue.js使用了基于HTML的模板语法，允许开发者声明式地将DOM绑定到底层Vue实例的数据。所有Vue.js的模板都是合法的HTML，所以能被遵循规范的浏览器和HTML解析器解析。

在底层的实现上，Vue将模板编译成虚拟DOM渲染函数。结合响应系统，Vue能够智能地计算除最少需要重新渲染多少组件，并把DOM操作次数减少到最少。


  - 文本——{{}}
    - 使用v-once指令进行一次性插值（当数据改变时，插值处的内容不会更新）
    - 原始HTML：使用v-html指令
    - HTML特性：使用v-bind指令
    - 直接在{{}}中使用JavaScript**单个表达式**
  - 
  - 指令——带有v-前缀的特殊特性
    - 值预期：单个 JavaScript 表达式
    - 职责：当表达式的值改变时，将其产生的连带影响，响应式地作用于DOM
    - **(:)参数**：添加一个附加属性。 `v-on:click=''`
    - **(.)修饰符**：以特殊方式绑定。 `<form v-on:submit.prevent="onSubmit">...</form>`——.prevent 修饰符告诉 v-on 指令对于触发的事件调用 event.preventDefault()
  - 
  - 缩写——对v-bind(:)和v-on(@)常用的属性进行缩写
    - v-bind用于响应式地更新HTML特性：`<a v-bind:href="url">` -->  `<a :href="url">`
    - v-on用于监听DOM事件：`<button v-on:click="dosomething">` --> `<button @click="dosomething">`


计算属性和侦听器
-
  - 计算属性——用于复杂逻辑
  - 可以设置两个参数，getter和setter

>
    computed: {
      fullName: {
        // getter
        get: function () {
          return this.firstName + ' ' + this.lastName
        },
        // setter
        set: function (newValue) {
          var names = newValue.split(' ')
          this.firstName = names[0]
          this.lastName = names[names.length - 1]
        }
      }
    }

  - 以声明的方式创建的依赖关系：计算属性的getter函数是没有副作用的，更易于测试和理解。

  - 区别于方法：
    - **计算属性computed**：计算属性是基于它们的依赖进行缓存的。只在相关依赖发生改变时，它们才会重新求值。
    - **方法（在组件中的应用）methods**：每当触发重新渲染时，调用方法将总会再次执行函数。不依赖缓存。
    - 两种方法的结果都一样。
    - *需要缓存的情况：假设有一个性能开销比较大的计算属性A，它需要遍历一个巨大的数组并做大量的计算。然后我们可能有其他的计算属性依赖于A。如果没有缓存，将不可避免的多IC执行A的getter。*


  - 区别于侦听属性：
    - **侦听属性watch**：观察和响应Vue实例上的数据变化。当一些数据需要随着他的数据的变动而变动。
    - 而相比之下，计算属性更加简洁和方便

  - 侦听器watch——当数据变化时执行一部或者开销比较大的操作时，此方法最有用。



**标签**
---

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


表单输入
-

  - v-model
    - 在表单`<input>`、`<textarea>`、`<select>`元素上创建双向数据绑定。根据控件类型自动选取正确的方法来更新元素。
    - v-model会忽略所有表单元素的value、checked、selected特性的初始值而总是将Vue实例的数据（通过data声明初始值）作为数据来源。
  - v-bind
    - 把值绑定到vue实例的动态属性上，并且这个属性的值不可以为字符串。
  - 修饰符
    - .lazy：默认情况下，v-model在每次input事件触发后将输入框的值与数据进行同步。通过添加`v-model.lazy="msg"`转变为使用change事件进行同步。
    - .number：自动的将用户的输入值转换为数值类型。`<input v-model.number="age" type="number">`
    - .trim：自动过滤用户输入的首尾空白字符。`v-model.trim="msg"`




**组件系统**
---

一个组件本质上是一个拥有预定义选项的一个vue实例。

 - 组件的复用性
   - 每用一次组件，就会有一个新的实例被创建，各个实例之间互不影响。
   - data必须是一个函数，这样每个实例可以维护一份被返回对象的对立拷贝。
 - 组件的组织
   - 以一棵嵌套的组件树的形式来组织
   - 注册类型：全局注册（`Vue.component`）和局部注册
 - 通过prop向子组件传递数据
   - prop——在组件上注册的一些自定义特性。
    - 当一个值传给一个prop特性的时候，它就会变成那个组件实例的一个属性。
   - 一个组件默认可以拥有任意数量的prop，任何值都可以传递给任何prop。 
 - 单个根元素：
   -  每个组件必须只有一个根元素
 -  通过事件向父级组件发送消息

在一个大型应用中，有必要将整个应用程序划分为组件，以使来发更容易管理。这里有一个假想的例子，以展示使用了组件的应用模板是什么样的：

>
    <div id="app">
      <app-nav></app-nav>
      <app-view>
        <app-sidebar></app-sidebar>
        <app-content></app-content>
      </app-view>
    </div>

与自定义元素的关系：
自定义元素——web组件规范的一部分。vue的组件语法部分参考了该规范。但有几个关键差别：

  1. Web Components规范已经完成并通过，但未被所有浏览器元素实现。相比之下，vue组件不需要任何polyfill，并且在所有支持的浏览器之下保持一致，必要时，Vue组件也可以包装于原生自定义元素之内。
  2. Vue组件提供了纯自定义元素不具备的一些重要功能，最突出的是跨组件数据流、自定义事件通信以及构建工具继承。


组件注册
-

 - 组件名:
   - kebab-case(短横线分隔命名)：定义和引用都要使用这种形式。直接在DOM中使用时，只有分隔符是有效的。
   - PascalCase(驼峰式命名)：用驼峰定义，引用时两种方法都可以。
 - 全局注册
   - `Vue.component('my-component-name',{   })`
   - 注册后可以在任何新创建的Vue根实例的模板中。 
 - 局部注册
   - 通过一个普通的JavaScript对象来定义组件，
   - `var ComponentA = { /* ... */ }`
    `var ComponentB = { /* ... */ }`
   - 然后在component选项中定义你想要使用的组件。
   - `new Vue({`
      `el: '#app',`
      `components: {`
        `'component-a': ComponentA,`
        `'component-b': ComponentB`
        `}`
    ` })`
   - 注意：局部注册的组件在其子组件中不可用。


prop
-

  - Prop类型：
    - 以字符串数组形式列出：
    - `props: ['title', 'likes', 'isPublished', 'commentIds', 'author']`
    - 以对象形式列出prop：
    - `props: {  title: String,  likes: Number,  isPublished: Boolean,  commentIds: Array,  author: Object  }`
  - 传递静态或动态Prop
    - 静态：
    `<blog-post title="My journey with Vue"></blog-post>`
    - 动态：   
    `<!-- 动态赋予一个变量的值 -->`
	`<blog-post v-bind:title="post.title"></blog-post>`
    `<!-- 动态赋予一个复杂表达式的值 -->`
    `<blog-post v-bind:title="post.title + ' by ' + post.author.name"></blog-post>`
    - 传入数字
    - 传入布尔值
    - 传入对象
    - 传入一个对象的所有属性
  - 单项数据流：
    - 所有的prop都使得其父子prop之间形成了一个单向下行绑定。父级prop的更新会向下流动到子组件中，但反过来不行。这样会防止从子组件意外改变父级组件的状态，从而导致你的应用的数据流难以理解。
    - 两种常见的试图改变一个prop的情形：
      - 1、这个prop用来传递一个初始值；这个子组件接下来希望将其作为一个本地的prop数据来使用。（定义一个本地的data属性，并将这个prop用作其初始值）
      - 2、这个prop以一种原始的值传入，且需要进行转换。（最好使用这个prop值历来定义一个计算属性）
  - prop验证
    - 类型检查type：
      - 既可以是原生构造函数（String、Number、Boolean、Array、Object、Date、Function、Symbol）中的一个
      - 也可以是自定义的构造函数，并通过instanceof来进行检查确认。
  - 非prop特性
    - 一个非prop特性是指向一个组件，但是该组件并没有相应的prop定义的特性。
    - 替换或合并已有的特性
      - type="text"会被type="date"替换
      - class和style的值会被合并
    - 禁用特性继承
       - 通过在组件的选项中设置`inheritAttrs:false`
       - 尤其适用于配合实例的`$attrs`属性的使用，该属性包含了传递给一个数组的特性名和特性值


自定义事件
-

  - 事件名
    - 没有大小写的限制
    - 推荐使用kebab-case的事件名
  - 自定义组件的v-model
  - 将原生事件绑定到组件
  - .sync修饰符






















需要学习：双向绑定，指令，事件，组件 