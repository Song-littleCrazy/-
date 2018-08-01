//关于闭包和this的混合使用
var name = "The Window";
var object = {
    name:"My Object",
    getNameFunc: function(){
        return function () {
            console.log(this.name);
        }
    }
};
object.getNameFunc()();  //严格模式下，undefined；非严格模式：The Window


//要想name输出的为内部的值（My Object），则可以有以下三种方法
//一、把this赋值给that
var name = "The Window";
var object = {
    name:"My Object",
    getNameFunc: function(){
        var that = this;
        return function () {
            console.log(that.name);
        }
    }
};
object.getNameFunc()();


//用bind方法
var name = "The Window";
var object = {
    name:"My Object",
    getNameFunc: function(){
        return  (function() {
            console.log(this.name);
        }).bind(this);
    }
};
object.getNameFunc()();


//在ES6中，使用箭头函数
var name = "The Window";
var object = {
    name:"My Object",
    getNameFunc: function(){
        return  () => {
            console.log(this.name);
        }
    }
};
object.getNameFunc()();