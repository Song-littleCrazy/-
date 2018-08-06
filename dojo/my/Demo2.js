//使用静态属性定义一个类
define([
    'dojo/_base/declare'
],function(declare){
    var Demo = declare(null,{
        constructor: function(){
            console.debug("this is demo onject #" + Demo.counter++);
        }
    });
    Demo.counter = 0;
    return Demo;
})