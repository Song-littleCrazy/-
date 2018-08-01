var foo = [1, 2];
var bar = foo; //数组拷贝，指向同一内存地址，改变其中之一（要对带下标的数组改变值才有效），则两者都改变
bar[0] = 9;
console.log(foo[0], bar[0]); //9 9


var foo = [[1, 2],[3,4],[5,6]];
var bar = foo;  //数组拷贝，指向同意内存地址 
bar[0][0] = 9; 
console.log(foo[0], bar[0]); //[9,2]  [9,2]


var myArray = ['abcd'];
myArray.push('efg');  //['abcd','efg']
console.log(myArray);

myArray.unshift('xyz');  //['xyz','abcd','efg']
console.log(myArray);


myArray.pop(); 
console.log(myArray);


myArray.shift();
console.log(myArray);

var newArray = [];
newArray = myArray.slice();
console.log(newArray);



var myData = 'Manchester,London,Liverpool,Birmingham,Leeds,Carlisle';
var myArray = myData.split(',');  //['Manchester','London','Liverpool','Birmingham','Leeds','Carlisle']
console.log(myArray);
var myString = myArray.join(',');
console.log(myString);  //'Manchester,London,Liverpool,Birmingham,Leeds,Carlisle'


