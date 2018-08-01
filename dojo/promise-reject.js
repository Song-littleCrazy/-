//参考http://www.cnblogs.com/lvdabao/p/es6-promise-1.html
//promise是一个构造函数，自身有all、race、reject、resolve几个方法，原型有then（成功resolve失败reject都可以）、catch（失败reject）等方法

//设置两种情况，一个是成功的情况resolve，一个是失败的情况reject
function getNumber(){
    var p = new Promise(function(resolve,reject){
        setTimeout(function(){
            var num = Math.ceil(Math.random()*10);  //Math.ceil为>=的最小数字
            if(num<=5){
                resolve(num);
            }else {
                reject('数字太大了');
            }
        },2000);
    });
    return p;
}

//调用
getNumber().then(function(data){
    console.log('resolved');
    console.log(data);
},
                 function(reason,data){
    console.log('rejected');
    console.log(reason);
});
//结果有两种情况：
//resolved  2
//rejected  数字太大了


//catch也是一种原型的方法，只能用来表达失败的情况
//当然使用还有一个好处：在执行resolve的回调时，如果抛出异常，会进到catch的方法中，不会卡死js
//调用时可以改写为：
getNumber().then(function(data){
    console.log('resolved');
    console.log(data);
}).catch(function(reason){
    console.log('rejected');
    console.log(reason);
}
);