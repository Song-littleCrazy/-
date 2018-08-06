//超类继承了person
define([
    'dojo/_base/declare',
    'my/Person'
], function(declare, Person) {
    return declare(Person,{
        constructor: function(name,age,residence,salary){
            this.salary = salary;
        },
        askForRaise: function(){
            return this.salary*0.02;
        }
    })
    
});