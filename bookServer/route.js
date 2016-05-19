/*
 * author : iny
 * data : 2016.5.19
 * desc : judge whether the request url is legal, if not, response 404
 */

const fs = require('fs')

function route(handler, pathname, request, response){
	request.charset = 'utf8'
	response.charset = 'utf8'
	if(typeof handler[pathname] === 'function'){
		handler[pathname](request, response)
	}else{
		response.writeHead(404, {'Content-type' : 'text/plain'})
		response.write('page not found')
		response.end();
	}

}

exports.route = route