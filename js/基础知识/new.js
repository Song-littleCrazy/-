function Foo(name,age){
    this.name = name;
    this.age = age;
}

var bar = new Foo('xx',12);
console.log(bar);  //Foo {name: 'xx', age: 12}


Foo.getName = function(){
    return this.name;
}
console.log(bar.getName());  //bar.getName is not a function

// var bar = new Foo('crazy',18);
// console.log(bar); //Foo {name: 'crazy', age: 18}
// bar.getName = function(){
//     return this.name;
// }
// console.log(bar); //Foo {name: 'crazy', age: 18，getName:f()}
// //说明：由于实例化后的对象和原函数无关，若想为其增加方法，只能单独用对象名.方法的形式


Foo.prototype.showName = function(){
    return this.name;
}
console.log(bar.showName());  //xx
//上例说明，若用protype添加新方法时，则会对所有实例化的对象的都添加这种方法
//构造函数实例化后是一个新的对象，原函数改变对其无影响，若都用这种方法会造成占用大量内存
//protype实例化后都指向原型，形成原型链，用protype改变函数会对改变所有对象，同时，由于指向同意原型，会避免浪费内存

function Foo(name,age){
    this.name = name;
    this.age = age;
    this.getName = function(){
        return this.name;
    }
}

var bar = new Foo('xx',12);
console.log(bar);  //Foo {name: 'xx', age: 12,getName: f()}
//用此种方法实例化两个对象p1、p2后，console.log(p1.getName==p2.getName);  //false