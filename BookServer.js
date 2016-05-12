var http = require('http');

http.createServer(function(req, res){
	res.writeHead(200, {
		'Content-type' : 'application/json',
		'Access-Control-Allow-Origin' : '*'
	});
	var data = {
		"name":"Hello World"
	}
	res.write(JSON.stringify(data));
	res.end();
}).listen(8080,function(){
	console.log('Data Server start.................')
});