debugger;
//方法1
function foo() {
    var a = 2;
    function bar() {
        console.log(a);
    }

    return bar;
}

var baz=foo();
baz();

//方法2：传递函数
function foo() {
    var a=2;
    function baz() {
        console.log(a);
    }

    bar(baz);
}

function bar(fn) {
    fn();
}
foo();
//方法3：间接传递函数
var fn;
function foo() {
    var a=2;
    function baz() {
        console.log(a);
    }
    fn=baz;
}

function bar() {
    fn();
}

foo();
bar();





