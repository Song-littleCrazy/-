<h1>Vue组件</h1>
---

**组件系统**
---

一个组件本质上是一个拥有预定义选项的一个vue实例。

 - 组件的复用性
   - 每用一次组件，就会有一个新的实例被创建，各个实例之间互不影响。
   - data必须是一个函数，这样每个实例可以维护一份被返回对象的对立拷贝。
 - 组件的组织
   - 以一棵嵌套的组件树的形式来组织
   - ![](https://i.imgur.com/zlSSggq.png)
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









