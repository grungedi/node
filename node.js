// blocker.js
/*
   This code is a bad example! It will
   block the server. It is for demonstration
   only.
*/

var restify = require('restify');
var fs = require('fs');


var server = restify.createServer();
var fibonacci = function (n) {
  if (n < 2)
    return 1;
  else
    return fibonacci(n-2) + fibonacci(n-1);
};

// Home page:
server.get('/',function(req, res) {
   var bodyHtml = '<!DOCTYPE html><html><head><title>'
                + 'Teste Node.js - O Bom Programador</title></head>'
                + '<body>'
		+ '<br/>Ok, agora, <a href="/blocker">o blocker</a>';
                

   bodyHtml += '</code></pre></body></html>';
   res.writeHead(200, {
     'Content-Length': Buffer.byteLength(bodyHtml),
     'Content-Type': 'text/html'
   });
   res.write(bodyHtml);
   res.end();      
});

// Blocker page:
server.get('/blocker',function(req, res) {
   var inicio = new Date();
   var bodyHtml = '<!DOCTYPE html><html><head><title>'
                + 'Teste Node.js - O Bom Programador</title></head>'
                + '<body>';
                
   var resultado = fibonacci(45);
   var fim = new Date();
   bodyHtml += '<br/>' + resultado;
   bodyHtml += '<br/>inicio: ' + inicio + ' fim: ' + fim;
   bodyHtml += '</code></pre></body></html>';
   res.writeHead(200, {
     'Content-Length': Buffer.byteLength(bodyHtml),
     'Content-Type': 'text/html'
   });
   res.write(bodyHtml);
   res.end();      
});


// Start server
server.listen(800, function() {
  console.log('Online: 800');
});