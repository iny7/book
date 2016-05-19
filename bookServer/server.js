/*
 * author : iny
 * data : 2016.5.19
 * desc : create a node server to provide data for my react app
 */

// import http from 'http'   // error only >= node.js 5.0.0 support ES6 syntax

var http = require('http')
var url = require('url')

var HOST = '127.0.0.1'
var PORT = '8080'

/*
 * route : 
 * handle : if the request is legal, use this function to handle it
 */
function start(route, handler){

	function onRequest(request, response){

		var pathname = url.parse(request.url).pathname
		console.log('request ',pathname)
		route(handler, pathname, request, response)
	}

	http.createServer(onRequest).listen(PORT, HOST)
	console.log('server start at: ',HOST,':',PORT)

}


exports.start = start