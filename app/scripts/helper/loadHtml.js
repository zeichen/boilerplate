var promise = new RSVP.Promise(function(resolve, reject) {
  // succeed
  resolve(value);
  // or reject
  reject(error);
});


var getHTML = function(url) {
  var promise = new RSVP.Promise(function(resolve, reject){
    var client = new XMLHttpRequest();
    client.open("GET", url);
    client.onreadystatechange = handler;
 //   client.responseType = "json";
 //   client.setRequestHeader("Accept", "application/text");
    client.send();

    function handler() {
      if (this.readyState === this.DONE) {
        if (this.status === 200) { resolve(this.response); }
        else { reject(this); }
      }
    };
  });

  return promise;
};


module.exports={
	promise:promise,
    getHTML:getHTML
}