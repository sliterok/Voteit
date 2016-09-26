const fs = require('fs');
var request = require('request');
//!!!
var proxyfile = 'proxylist.txt';
var url = 'http://telegram-club.ru/like/1669';
//!!!
fs.readFile(proxyfile, function(err, data) {
    if(err) throw err;
    array = data.toString().split("\n");
	for(var i = 0; i<array.length; i++)
	{
		post('http://'+array[i]);
	}
});
function post(proxy){
	request.get({uri: url, headers: {'X-Requested-With': 'XMLHttpRequest'}, proxy: proxy},
		function optionalCallback(err, httpResponse, body) {
		  if (err) {
			  console.log(err);
		  }
		  else{console.log('Worked!'+body+proxy);}
		}
	);
}