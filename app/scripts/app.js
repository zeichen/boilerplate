//var Facebook=require('./FB');

var EventEmitter = require('events').EventEmitter;
var dog=function(){

this.dispatcher=new EventEmitter();

this.dispatcher.on('bb',function(e){
	console.log(e);
	//this.dispatcher.emit('cc');
})

};


exports.dog = new dog();
module.exports.cat ={};



// 監聽事件
//dog.addEventListener('build', function (e) { console.log(e)}, false);
//dog.addEventListener('build', function (e) { ... }, false);

// 觸發事件