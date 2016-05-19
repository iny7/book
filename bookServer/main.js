/*
 * author : iny
 * data : 2016.5.19
 */

const server = require('./server')
const handler = require('./handler')
const route = require('./route')

var handlerMapping = {}
handlerMapping['/books'] = handler.books
handlerMapping['/books/1'] = handler.getBookById

server.start(route.route, handlerMapping)
