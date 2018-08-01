debugger;   //用debugger进行测试
function foo(something) {
    console.log( this.a,something );
    return this.a + something;
}

//简单的辅助函数，可以重复使用
function bind(fn, obj){
    return function() {
        return fn.apply(obj , arguments);
    };
}

var obj = {
    a:2
};

//var bar = function() {
//    return foo.apply(obj,arguments);
//};

var bar = bind(foo, obj);

var b = bar(3);
console.log(b);