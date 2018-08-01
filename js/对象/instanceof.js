debugger;
var strPrimitive = "I am a string";
typeof strPrimitive;
strPrimitive instanceof String;

var strObject = new String("I am a string");
typeof strObject;
strObject instanceof Object;

Object.prototype.toString.call(strObject);


console.log(strPrimitive.length);
console.log(strPrimitive.charAt(3)); 