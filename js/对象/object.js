debugger;
var myObject = {
    a:2
};

//属性访问
myObject.a;      //2
//键访问
myObject["a"];   //2


var idx;
if(wantA) {  //找不到函数
    idx = "a";
}
console.log(myObject[idx]);




var myObject = {};
myObject[true] = "foo";
myObject[3] = "bar";
myObject[myObject] = "baz";    //在电脑里显示的是[object Object],所以输出的也是用myObject["[object Object]"];

myObject["true"];   //foo
myObject["3"];      //bar
myObject["[object Object]"];   //baz





var prefix = "foo";
var myObject = {
    [prefix + "bar"]:"hello",
    [prefix + "baz"]:"world"
};
myObject["foobar"];   
myObject["foobaz"];


