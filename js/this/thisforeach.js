debugger;   //用debugger进行测试
function foo(el) {
    console.log( el,this.id );
}

var obj = {
    id: "awesome"
};

[1,2,3].forEach(foo, obj);