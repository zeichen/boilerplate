require('events');
var app = require('../app');
var dog = require('../app').dog;
var Socket = require('../components/Socket');
var EventEmitter = require('events').EventEmitter;

var event = new Event('build');


function sss(){
	console.log(eeee);
}


	window.socket=Socket;			


dog.dispatcher.on('something2', function (data) {console.log(data) });
dog.dispatcher.emit('something2',1234333);


//var liquidMatter = require('../components/liquid-matter');
