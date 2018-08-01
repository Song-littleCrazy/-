//=>链式调用（特殊之处）
function runAsync1(){
    var p = new Promise(function(resolve, reject){
        //做一些异步操作
        setTimeout(function(){
            console.log('异步任务1执行完成');
            resolve('随便什么数据1');
        }, 1000);
    });
    return p;            
}
function runAsync2(){
    var p = new Promise(function(resolve, reject){
        //做一些异步操作
        setTimeout(function(){
            console.log('异步任务2执行完成');
            resolve('随便什么数据2');
        }, 2000);
    });
    return p;            
}
function runAsync3(){
    var p = new Promise(function(resolve, reject){
        //做一些异步操作
        setTimeout(function(){
            console.log('异步任务3执行完成');
            resolve('随便什么数据3');
        }, 2000);
    });
    return p;            
}

// runAsync1()
// .then(function(data){
//     console.log(data);
//     return runAsync2();//必须有这句调用，下一个then才能正常运行，否则undefined
// })
// .then(function(data){
//     console.log(data);
//     return runAsync3();
// })
// .then(function(data){
//     console.log(data);
// });
//结果
// 异步任务1执行完成
// 随便什么数据1 
// 异步任务2执行完成
// 随便什么数据2
// 异步任务3执行完成
// 随便什么数据3


//all接收一个数组参数，把所有异步操作的结果放进数组中传给then
//then接受异步操作的返回数据
//all的使用情况：一些游戏类的素材比较多的应用，打开网页时，预先加载需要用到的各种资源如图片、flash以及各种静态文件。所有的都加载完后，我们再进行页面的初始化。
Promise.all([runAsync1(),runAsync2(),runAsync3()])
.then(function(results){
    console.log(results);
});
//结果
// 异步任务1执行完成
// 异步任务2执行完成
// 异步任务3执行完成
// Array(3) ["随便什么数据1", "随便什么数据2", "随便什么数据3"]


//all方法的效果实际上是「谁跑的慢，以谁为准执行回调」
//race「谁跑的快，以谁为准执行回调」
//race的使用情况：给某个异步请求设置超时时间，并且在超时后执行相应的操作
Promise.race([runAsync1(),runAsync2(),runAsync3()])
.then(function(results){
    console.log(results);
});
//结果
// 异步任务1执行完成
// 随便什么数据1
// 异步任务2执行完成
// 异步任务3执行完成
