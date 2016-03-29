
window.require=require;
var h=require('./helper');
console.log(h);
var socket = require('./components/Socket');

 socket.on('new message', function (data) {

console.log(data);


  });


 socket.on('user joined', function (data) {
    console.log(data.username + ' joined');
  });

  // Whenever the server emits 'user left', log it in the chat body
  socket.on('user left', function (data) {
    console.log(data.username + ' left');
  });


  socket.on('new message', function (data) {
console.log(data);
  });


var app=require('./app');
//var so=require('./components/socket');
var page=require('page');
var matterObj = require('./components/matterObj');

page.base('/#');
page('/', index);
page('/about', about);
page.exit('/about', function(ctx, next) {
console.log(ctx);
})
page();

      
      function index() {
      
      }

      function about() {
        
      }

var t01 = require('./tests/t01');

     
$(window).on("blur focus", function(e) {
    var prevType = $(this).data("prevType");

    if (prevType != e.type) {   //  reduce double fire issues
        switch (e.type) {
            case "blur":
             //   $('div').text("Blured");
             //console.log('Blured');
                break;
            case "focus":
             // console.log('Focused');
              //  $('div').text("Focused");
                break;
        }
    }

    $(this).data("prevType", e.type);
})