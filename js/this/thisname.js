//不用this指针
debugger;   //用debugger进行测试
function identify(context) {
    return context.name.toUpperCase();
}

function speak(context) {
    var greeting = "Hello,my name is " + identify(context);
    console.log(greeting);
}

var me ={
    name: "Kyle"
};

var you = {
    name: "Reader"
};

identify(you);
speak(me);

//用this指针
function identify() {
    return this.name.toUpperCase();
}

function speak() {
    var greeting = "Hello, I'm "+ identify.call( this );
    console.log(greeting);
}

var me ={
    name: "Kyle"
};

var you = {
    name: "Reader"
};

identify.call(me);

identify.call(you);

speak.call(me);

speak.call(you);