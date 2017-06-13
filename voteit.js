const fs = require('fs');
var request = require('request');
//!!!
var proxyfile = 'proxylist.txt';
var url = 'someurl';
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
	request.get({uri: url, headers: {'X-Requested-With': 'XMLHttpRequest'}, proxy: proxy}, err => {
		  if (!err) console.log(`Proxy: ${proxy} succeeded`);
		}
	);
}
