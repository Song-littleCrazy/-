debugger;
var myArray = ["foo",42,"bar"];
myArray.length;
myArray[1];    //42

myArray.baz="baz";
myArray.baz;  //"baz"

myArray["tempa"] = "temparray";
myArray["tempa"];   //"temparray"

myArray["3"] = "baz";  //属性名看起来像下标，所以会修改数组中下标对应的值
myArray[3];    //"baz"