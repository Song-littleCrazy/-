//参考http://www.cnblogs.com/lvdabao/p/es6-promise-1.html

//promise是一个构造函数，自身有all、race、reject、resolve几个方法，原型有then（成功resolve失败reject都可以）、catch（失败reject）等方法

//先new一个Promise函数，setTimeout异步操作，两秒后输出"执行完成"
// var p = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log('执行完成');
//         resolve('随便什么数据');
//     }, 2000);
// });


//因为立即执行，所以把它包在一个函数里，需要的时候进行调用
function runAsync(){
    var p = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('执行完成');
        resolve('随便什么数据');
    },2000);
    });
    return p;
}

//调用
runAsync().then(function(data){
    console.log(data);
});