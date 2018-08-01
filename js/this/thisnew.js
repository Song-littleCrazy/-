debugger;   //用debugger进行测试
function foo(a) {
    this.a = a;
}

var bar = new foo(2);
console.log(bar.a);