debugger;
//可以被调用多次，每次都创建一个新的模块实例
function CoolModule(){
    var something = "cool";
    var another = [1,2,3];

    function doSomething() {
        console.log(something);
    }
    function doAnother() {
        console.log(another.join("!"));
    }
    return {
        doSomething: doSomething,
        doAnother: doAnother
    };
}

var foo = CoolModule();

foo.doSomething();
foo.doAnother();

//当只需要一个实例
var foo = (
    function CoolModule() {
        var something = "cool";
        var another = [1,2,3];

        function doSomething(){
            console.log(something);
        }

        function doAnother(){
            console.log(another.join("!"));
        }

        return {
            doSomething: doSomething,
            doAnother: doAnother
        };
    }
)();

foo.doSomething();
foo.doAnother();

//模块可以接受参数
function CoolModule(id) {
    function identify() {
        console.log(id);
    }
    return {
        identify: identify
    };
}

var foo1 = CoolModule("first");
var foo2 = CoolModule("second");
foo1.identify();
foo2.identify();

//命名将要作为公共API返回的对象————从内部对模块实例进行修改
var foo = (
    function CoolModule(id){
        function change(){
            //修改公共API
            publicAPI.identify = identify2;
        }
        function identify1(){
            console.log(id);
        }
        function identify2(){
            console.log(id.toUpperCase());
        }
        var publicAPI = {
            change: change,
            identify: identify1
        };
        return publicAPI;
    }
)("foo module");

foo.identify();
foo.change();
foo.identify();
