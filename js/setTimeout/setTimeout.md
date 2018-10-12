
    setTimeout()方法：
---

 1. setTimeout(函数,等候时间)语法：

   -  函数/计算表达式
   -  等候时间的单位：千分之一秒
   -  用于在指定的时间调用函数或者计算表达式。
   -  只执行一次。
   -  多次用setInterval()或让函数自身再次调用setTimeout()。

 2. clearTimeout(计时名)：

   - `meter1 = setTimeout("counter1()",1000);`
   - `clearTimeout(meter1);`


setInterval()方法：
---

 1. setInterval(函数，时间，第一个函数的参数(可省略))语法：
    - 函数可以有三种形式：
      - 函数名，不加引号也不加括号。`setInterval( func, 1000)`
      - 匿名函数
      - 函数字符，加引号，也加括号。`setInterval("func()",1000);`。缺点——会在全局作用域下查找函数可能会有问题。
    - 第一个函数的参数：若第一个函数是带参函数，则其参数值可以放在第三个位置被传入。
    - 属于window对象，可以直接调用。如果不关闭浏览器或者调用clearInterval()将会永远的执行下去。返回值是当前定时器的唯一ID标识。
 2. 效果重复的setTimeout()
 3. clearInterval()和上面的clearTimeout一样。
