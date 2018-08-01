//call的使用方法是A.call(B,num1,num2)把B用A替换掉
function add(a,b) { console.log(a+b); } 
function sub(a,b) { console.log(a-b); } 
add.call(sub,3,1); //4  add.call(sub,3,1)==add(3,1)


//创建一个car函数
function Car(reg_no) { 
    this.reg_no = reg_no;
}
Car.prototype.current_speed = 0;
Car.prototype.accelerate = function(increment) {
    this.current_speed += increment;
}

var myCar = new Car('10C500');
myCar.accelerate(30);
myCar.accelerate(20);
console.log(myCar);
//Car {reg_no: "10C500", current_speed: 50}


//创建一个car函数，原型里有三个三个变量和四个函数
function Car(reg_no) { 
    this.reg_no = reg_no;
}
Car.prototype.reg_no = '';
Car.prototype.current_speed = 0;
Car.prototype.current_gear = 0;
 
Car.prototype.accelerate = function(increment) {
    this.current_speed += increment;
}
Car.prototype.decelerate = function(decrement) {
    this.current_speed -= decrement;
}
Car.prototype.increaseGear = function() {
    this.current_gear++;
}
Car.prototype.decreaseGear = function() {
    this.current_gear--;
}
//在创建一个共car那继承的ATcar函数，让ATcar的原型等于car，同样设置了一个变量两个函数
function ATCar(reg_no) {
    Car.call(this, reg_no);
}
ATCar.prototype = new Car();
ATCar.prototype.constructor = ATCar;
 
ATCar.prototype.accelerate = function(increment) {
    Car.prototype.accelerate.call(this, increment);
    if(increment >= 10) this.increaseGear();
}
 
ATCar.prototype.decelerate = function(decrement) {
    Car.prototype.decelerate.call(this, decrement);
    if(this.current_speed === 0) this.current_gear = 0;
    else if(decrement >= 10) this.decreaseGear();
}
//现在new一个ATcar，然后输出
var myCar = new ATCar('10C500');
myCar.accelerate(30);
myCar.accelerate(20);
myCar.decelerate(5);
console.log(myCar);
//ATCar {reg_no: "10C500", current_speed: 45, current_gear: 2}

