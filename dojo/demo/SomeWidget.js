define([
    'dojo/_base/declare',
    'dijit/_WidgetBase',
    "dijit/_OnDijitClickMixin",
    "dijit/_TemplatedMixin",
    "dojo/text!./templates/SomeWidget.html"
],function(declare, _WidgetBase, _OnDijitClickMixin, _TemplatedMixin, template){
        
    return declare([_WidgetBase, _OnDijitClickMixin, _TemplatedMixin],{
        //templateString是_TemplatedMixin添加到小部件声明时提供的一个附加属性
        //template表示继承SomeWidget的所有属性
        templateString: template,

        //一些属性
        baseClass: "someWidget",
        title: "",

        //自己设定的一些值
        _counter:1,
        _firstClicked: false,

        _onClick: function(){
            if(this._firstClicked){
                this.titleNode.innerHTML = this.title + " was clicked " + (++this._counter) + " times.";
            }else {
                this.titleNode.innerHTML = this.title + "was clicked!";
                this._firstClicked = true;
            }
        },

        //在定义窗口小部件的所有属性之后触发此操作，进行自定义窗口小部件。
        postCreate: function(){
            this.titleNode.innerHTML = this.title;
        }
    })
    
});