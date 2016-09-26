const fs = require('fs');
var request = require('request');
//!!!
var proxyfile = 'proxylist.txt';
var url = 'https://telegram-club.ru/like/1669';
//!!!
fs.readFile(proxyfile, function(err, data) {
    if(err) throw err;
    var array = data.toString().split("\n");
    for(i=0; i<array.length; i++) {
		console.log(array[i]);
		post('http://'+array[i]);
    }
});
function post(proxy){
	request.get({uri: url, headers: {'X-Requested-With': 'XMLHttpRequest'}, proxy: proxy},
		function optionalCallback(err, httpResponse, body) {
		  if (err) {
			  console.log(err);
			return;
		  }
		  if(true){console.log('Worked!'+proxy);}
		}
	);
}