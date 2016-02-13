// (c) http://www.obomprogramador.com
// REST / JSON WS implementation with Node.js calling Java

var restify = require('restify')
var server = restify.createServer()
var fs = require('fs')
var java = require('java')

// Página da aplicação: 
function home(req,res,next) {
   fs.createReadStream('./index.html', {autoClose: true}).pipe(res)
}


// Home page:
server.get('/mb',home)


// Start server
server.listen(800, function() {
  console.log('%s listening at %s', server.name, server.url);
});
