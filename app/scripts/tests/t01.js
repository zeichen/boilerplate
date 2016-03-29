require('events');
var app = require('../app');
var dog = require('../app').dog;
var Socket = require('../components/Socket');
var EventEmitter = require('events').EventEmitter;

var event = new Event('build');

//app.dispatchEvent(new Event('build'))
// 觸發事件
//elem.dispatchEvent(event);

function sss(){
	console.log(eeee);
}
//dog.aa=1234;

	window.socket=Socket;			
//var Socket = require('../components/Socket');
//var events = require('events').;
//var d1=new dog();

dog.dispatcher.on('something2', function (data) {console.log(data) });
dog.dispatcher.emit('something2',1234333);
