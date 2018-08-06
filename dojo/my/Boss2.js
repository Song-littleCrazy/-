//从Employee继承了askForRaise函数，并用this.inherited(arguments)引用Employee的askForRaise函数
//注意，第一个参数this.inherited()始终是字面意思arguments，一个特殊的JavaScript数组类似伪变量，它包含所有参数
//如果要覆盖传递给超类的参数，请将它们作为第二个参数传递给数组：
//ths.inherited(arguments,[customArg1,customArg2]);

define([
    'dojo/_base/declare',
    'my/Employee'
], function(declare, Employee) {
    return declare(Employee,{
        askForRaise: function(){
            return this.inherited(arguments)*20;
        }
    }) 
});