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
   - 通过调用内建的 $emit 方法 并传入事件的名字，来向父级组件触发一个事件 
 - 动态组件
 - 解析DOM模板时的注意事项
   - 由于有些HTML元素，诸如`<ul><ol><table><select>`,对于那些元素可以出项在其内部是有严格限制的。而有些元素，诸如`<li><tr><option>`只能出现在其它某些特定元素的内部。
   - 所以需要 is 特性给我们一个变通的方法，引入组件。
   - `<table><tr is="blog-post-row"></tr></table>`
   - 以下来源使用模板不存在限制：
     - 字符串（template:'...'）
     - 单文件组件（.vue）
     - `<script type="text/x-template">` 

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
   - Vue.component的第一个参数
   - kebab-case(短横线分隔命名)：定义和引用都要使用这种形式。直接在DOM（即非字符串的模板）中使用时，只有分隔符是有效的。
   - PascalCase(驼峰式命名)：用驼峰定义，引用时两种方法都可以。
 - 全局注册
   - `Vue.component('my-component-name',{   })`
   - 注册后可以在任何新创建的Vue根实例的模板中。 
   - 不够理想。比如，如果你使用一个向webpack的构建系统，全局注册所有的组件意味着即使你不再使用一个组件，它仍会被包含在最终的构建结果种。这会造成了用户下载的JavaScript的无谓的增加。
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
   - `var ComponentA = { /* ... */ }`
    `var ComponentB = {`
      `components: {component-a': ComponentA },`
      `// ...`
    `}`
 - 模块系统


prop
-

  - **Prop的大小写**
    - HTML的特性名是大小写不敏感的，所以浏览器会把所有大写字符解释成小写字符。这意味着当你使用DOM模板时，camelCase（驼峰命名）的prop名需要使用其等价的kebab-case（短横线分割命名）。
    - 如果使用字符串模板，则不存在这个限制。
  - **Prop类型**
    - 以字符串数组形式列出：
    - `props: ['title', 'likes', 'isPublished', 'commentIds', 'author']`
    - 以对象形式列出prop：
    - `props: {  title: String,  likes: Number,  isPublished: Boolean,  commentIds: Array,  author: Object  }`
  - **传递静态或动态Prop**
    - 静态：
    `<blog-post title="My journey with Vue"></blog-post>`
    - 动态：   
    `<!-- 动态赋予一个变量的值 -->`
	`<blog-post v-bind:title="post.title"></blog-post>`
    `<!-- 动态赋予一个复杂表达式的值 -->`
    `<blog-post v-bind:title="post.title + ' by ' + post.author.name"></blog-post>`
    - 传入数字
     - 静态
     -  `<!-- 即便 "42" 是静态的，我们仍然需要 "v-bind" 来告诉 Vue -->`
    `<!-- 这是一个 JavaScript 表达式而不是一个字符串。-->`
    `<blog-post v-bind:likes="42"></blog-post>`
      - 动态
      - `<!-- 用一个变量进行动态赋值。-->`
      - `<blog-post v-bind:likes="post.likes"></blog-post>`
    - 传入布尔值
      - `<!-- 包含该 prop 没有值的情况在内，都意味着 true。-->`
      - `<blog-post is-published></blog-post>`
      - 静态：`<blog-post v-bind:is-published="false"></blog-post>`
      - 动态：`<blog-post v-bind:is-published="post.isPublished"></blog-post>`
    - 传入数组
      - 静态：`<blog-post v-bind:comment-ids="[234, 266, 273]"></blog-post>`
      - 动态`<blog-post v-bind:comment-ids="post.commentIds"></blog-post>`
    - 传入对象
      - 静态：`<blog-post v-bind:author="{ name: 'Veronica', company: 'Veridian Dynamics' }"></blog-post>`
      - 动态：`<blog-post v-bind:author="post.author"></blog-post>`
    - 传入一个对象的所有属性
  - **单项数据流**：
    - 所有的prop都使得其父子prop之间形成了一个**单向下行绑定**。父级prop的更新会向下流动到子组件中，但反过来不行。这样会防止从子组件意外改变父级组件的状态，从而导致你的应用的数据流难以理解。
    - 额外的，每次父级组件发生更新时，子组件中所有的prop都将会刷新为最新的值。这意味着——不应该在一个子组件的内部改变prop。否则。Vue在浏览器的控制台就hi发出警报。
    - 两种常见的试图改变一个prop的情形：
      - 1、这个prop用来传递一个初始值；这个子组件接下来希望将其作为一个本地的prop数据来使用。（定义一个本地的data属性，并将这个prop用作其初始值）
      - 2、这个prop以一种原始的值传入，且需要进行转换。（最好使用这个prop值历来定义一个计算属性）
  - **prop验证**
    - 类型检查type：
      - 既可以是原生构造函数（String、Number、Boolean、Array、Object、Date、Function、Symbol）中的一个
      - 也可以是自定义的构造函数，并通过instanceof来进行检查确认。
  - **非prop特性**
    - 一个非prop特性是指向一个组件，但是该组件并没有相应的prop定义的特性。
    - 替换或合并已有的特性
      - type="text"会被type="date"替换
      - class和style的值会被合并
    - 禁用特性继承
       - 通过在组件的选项中设置`inheritAttrs:false`不继承根元素的特性
       - 尤其适用于配合实例的`$attrs`属性的使用，该属性包含了传递给一个数组的特性名和特性值
       
>
     Vue.component('base-input', {
      inheritAttrs: false,
      props: ['label', 'value'],
      template: `
        <label>
          {{ label }}
         <input
          v-bind="$attrs"
          v-bind:value="value"
          v-on:input="$emit('input',   $event.target.value)"
         >
        </label>
      `
    })


自定义事件
-

  - 事件名
    - 事件名不存在任何自动化的大小写转换，而是触发的事件名需要完全匹配监听这个事件所用的函数。
    - 推荐使用kebab-case的事件名。
  - 自定义组件的v-model
    - 一个组件上的v-model默认会利用名为value 的prop和名为input的事件，但单选框、复选框等类型的输入控件可能会将value特性用于不同的目的。model选项可以用来避免这样的冲突。
    
    - `<input v-bind:value="searchText" v-on:input="searchText = $event.target.value">`
    - 将this.searchText的值通过名为value的prop传入input组件内，而后当input事件触发时将事件带来的input的新值写入this.searchText中，然后根据this.searchText中值的变化通过value的prop传入input控件完成input控件上值的变化，如果去掉v-on...后，这个控件将变为一个只读控件。
    - 具体参考[http://http://www.cnblogs.com/sonoda-umi/p/9750188.html](http://http://www.cnblogs.com/sonoda-umi/p/9750188.html)
    - 通过设置下面的代码：
    - 使其为：
    - `<base-checkbox v-model="lovingVue"></base-checkbox>`
    - 将原来v-model默认使用的名为value的prop与名为input的event自定义一个名字使用，在上面自定义组件中存在
    - `props: {    checked: Boolean  }`
   >
    Vue.component('base-checkbox', {
      model: {
        prop: 'checked',
        event: 'change'
      },
      props: {
        checked: Boolean
      },
      template: `
    <input
      type="checkbox"
      v-bind:checked="checked"
      v-on:change="$emit('change', $event.target.checked)"
    >
      `
    })
   
    
   
  - .native将原生事件绑定到组件
    - 通过使用`v-on的.native修饰符`把一个组件的根元素上直接监听一个原生事件
    - 当监听一个类似`<input>`的非常特定的元素时，可能会失败，不会报错，但调用的函数不会被调用。
    - 使用$listeners属性，它是一个对象，包含了作用在这个组件上的所有监听器。所以通过`v-on="$listeners"`将所有的事件监听器指向这个组件的某个特定的子元素。
  - .sync修饰符
    - 进行双向绑定
    - 在一个包含 title prop 的假设的组件中，我们可以用以下方法表达对其赋新值的意图：
    - `this.$emit('update:title', newTitle)`
    - 然后父组件可以监听那个事件并根据需要更新一个本地的数据属性。例如：
    - `<text-document  v-bind:title="doc.title"  v-on:update:title="doc.title = $event"></text-document>`
    - 为了方便起见，我们为这种模式提供一个缩写，即 .sync 修饰符：
    - `<text-document v-bind:title.sync="doc.title"></text-document>`
    - 注意：
      - 带有.sync修饰符的v-bind不能和表达式一起用
      - 当一个对象同时设置多个prop时，可以将.sync和v-bind配合使用。
      - `<text-document v-bind.sync="doc"></text-document>`
      - 这样会把doc对象中的每一个属性都作为一个独立的prop传进去，然后各自添加用于更行的v-on监听器。


插槽
-

- 插槽内容
  - 通过在组件米板中设置`<slot></slot>`来被替换成相应的模板。
- 具名插槽
  - 通过在`<slot name="XX">`来定义额外的插槽，便于区分。
  - 在一个父组件的<template>元素上使用slot:`<template slot="XX"><p>...</p></template>`
  - 把slot直接用在一个普通元素上`<p slot="XX">...</p>`
  - 还可以保留一个未命名插槽——默认插槽，作为所有未匹配到插槽的内容的同意出口。
- 插槽的默认内容
  - 如：一个按钮的默认内容为“submit”，但同时允许用户复写为“save”、“update”等。可以这样设置：
  - `<button type="submit"><slot>Submit</slot></button>`
  - 如果父组件为这个插槽提供了内容，则默认的内容会被替换掉。
- 编译作用域
  - 父组件模板的所有东西都会在父级作用域内编译；子组件模板的所有东西都会在子级作用域内编译。
- 作用域插槽
  - 用于渲染出和每个独立的待办事项不一样的东西。
  - 用法：将待办事项包裹在一个和`<slot>`元素上，然后将所有和其上下文相关的数据传递给这个插槽。
  - 注意：`slot-scope`不再限制在`<template>`元素上使用，而可以用在插槽内的任何元素。


动态组件&异步组件
-

- 动态组件——`keep-alive`：
  - 在第一次创建的时候被缓存下来，避免重复渲染。
- 异步组件：
  - Vue允许以一个工厂函数的方式定义组件，实现异步解析组件的定义。Vue只有在这个组件需要被渲染的时候才会触发这个工厂函数，并且会把结果缓存起来供未来重渲染。
  - 推荐和webpack的code-spltting功能一起配合使用。


处理边界情况
-

- **访问元素 & 组件**
-  1.访问根实例——$root
 - 当demo或非常小型的有少量组件的应用来说比较方便。大型应用推荐——vuex来管理应用的状态。
   >  
    // Vue 根实例
    new Vue({
      data: {
      foo: 1
      },
      computed: {
        bar: function () { /* ... */ }
      },
      methods: {
        baz: function () { /* ... */ }
      }
    })
    // 获取根组件的数据
    this.$root.foo   
    // 写入根组件的数据
    this.$root.foo = 2  
    // 访问根组件的计算属性
    this.$root.bar   
    // 调用根组件的方法
    this.$root.baz()

- 2.访问父级元素组件——$parent
  - 提供了一种可以在后期随时触达父级组件，以替代将数据以prop的方式传入子组件的方式。
- 3.访问子组件示例或子元素——$refs
  - 通过ref为子组件赋予一个ID引用：
  - `<base-input ref="usernameInput"></base-input>`
  - 使用`this.$refs.usernameInput`访问<base-input>实例，以备不时之需
  - $refs只会在组件渲染完成后生效，并且它们不是响应式的。这只意味着一个直接的子组件封装的“逃生舱”——应该避免在模板或计算属性中访问$refs
- 4.依赖注入
  - provide——指定**提供**给后代组件的数据/方法
  - inject——接收指定的想要添加在这个实例上的属性
  - 把依赖注入看作一部分“大范围有效的prop”，除了：
    - 祖先组件不需要知道哪些后代组件使用它提供的那些属性
    - 后代组件不需要知道被注入的属性来自哪里
  - 依赖注入的负面影响:将应用以目前的组织方式耦合起来，使重构变得比较困难。同时提供的属性是非响应式的。

- **程序化的事件侦听器**
  - $emit被v-on侦听
  - 通过$on(eventName,eventHandler)侦听一个事件
  - 通过 $once(eventName, eventHandler) 一次性侦听一个事件
  - 通过 $off(eventName, eventHandler) 停止侦听一个事件


