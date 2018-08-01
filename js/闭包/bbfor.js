debugger;
for(var i = 1; i<=5; i++) {
    setTimeout(function timer(){
        console.log(i);
    },i*1000);
}   
//输出五次6


for(var i = 1; i<=5; i++) {
    (function() {
        setTimeout(function timer(){
            console.log(i);
        },i*1000);
    })();   
}   
//输出五次6


for(var i = 1; i<=5; i++) {
    (function() {
        var j=i;
        setTimeout(function timer(){
            console.log(j);
        },j*1000);
    })();   
} 
//输出1,2,3,4,5


for(var i = 1; i<=5; i++) {
    (function(j) {
        setTimeout(function timer(){
            console.log(j);
        },j*1000);
    })(i);   
}   
//输出1,2,3,4,5


for(let i = 1; i<=5; i++) {
    setTimeout(function timer(){
        console.log(i);
    },i*1000);
}   
//输出1,2,3,4,5