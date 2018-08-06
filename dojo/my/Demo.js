//使用实例对象定义一个类
define([
    "dojo/_base/declare",
    "my/Foo"
],function(declare,Foo){
    return declare(null,{
        arr: [1,2,3,4],
        num: 5,
        str: "string",
        obj: new Foo(),

        constructor: function(){
            this.arr = [1,2,3,4];
            this.obj = new Foo();
        }
    })
})