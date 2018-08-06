define([
    'dojo/_base/declare',
    'dojo/_base/lang'
], function(declare, lang) {
    return declare(null,{
        name: "Anoymous",
        age: null,
        residence: "Universe A",

        constructor: function(kwArgs){
            lang.mixin(this,kwArgs);
        },

        moveTo: function(residence){
            this.residence = residence;
        }
    })
    
});