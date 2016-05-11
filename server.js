/*eslint no-console:0 */
'use strict';
require('core-js/fn/object/assign');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');
const open = require('open');
const http = require('http')

new WebpackDevServer(webpack(config), config.devServer)
.listen(config.port, 'localhost', (err) => {
  if (err) {
    console.log(err);
  }
  console.log('Listening at localhost:' + config.port);
  console.log('Opening your system browser...');
  open('http://localhost:' + config.port + '/webpack-dev-server/');
});


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