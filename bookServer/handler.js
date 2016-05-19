/*
 * author : iny
 * data : 2016.5.19
 */
const fs = require('fs')

function books(request, response){
	var books = fs.readFileSync('./books.json')
	response.writeHead(200, {'Content-type' : 'application/json; charset=utf-8','Access-Control-Allow-Origin': '*' })
	response.write(books)
	response.end()
}

function getBookById(request, response){
	var url = request.url
	console.log(url)
	response.writeHead(200, {'Content-type' : 'text/plain; charset=utf-8','Access-Control-Allow-Origin': '*' })
	response.write('book data of'+ '1')
	response.end()
}

exports.books = books
exports.getBookById = getBookById