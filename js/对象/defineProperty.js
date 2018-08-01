debugger;
var myObject = {
    a:2
};

Object.getOwnPropertyDescriptor(myObject,"a");
//{value: 2,               数据描述符
//writable: true,          可写（是否修改属性值）
//enumerable: true,        可枚举
//configurable: true       可配置
//}

var myObject = {};
Object.defineProperty(myObject , "a", {
    value:2,
    writable:true,   
    configurable:true,
    enumberable: true
});
myObject.a;  //2


var myObject = {};
Object.defineProperty(myObject , "a", {
    value:2,
    writable:false,       //修改此处
    configurable:true,
    enumberable: true
});

myObject.a = 3;    //严格情况会报错——typeError
myObject.a;   //2


var myObject = {
    a:2
};
myObject.a = 3;
myObject.a;   //3

Object.defineProperty(myObject , "a", {
    value:4,
    writable:true,   
    configurable:false,     //修改此处
    enumberable: true
});

myObject.a;   //4
myObject.a = 5;
myObject.a;   //5
delete myObject.a;   //false,configurable:false禁止删除属性
myObject.a;   //5



var myObject = {};
Object.defineProperty(
    myObject,
    "a",
    {  enumberable: true, value: 2  }   //a可枚举，即用for in循环
);

Object.defineProperty(
    myObject,
    "a",
    {  enumerable: false, value: 3  }   //b不可以
);

//验证方法1
myObject.b;   //3
("b" in myObject);
myObject.hasOwnProperty("b");  //true

myObject.a;   //2
for (var k in myObject){
    console.log(k,myObject[k]);
}
//"a" 2   表明结果只有a在其中


//验证方法2
myObject.propertyIsEnumberable("a");  //true
myObject.propertyIsEnumberable("b");  //false

Object.keys(myObject);  ["a"]
Object.getOwnPropertyNames(myObject);  //["a","b"]

