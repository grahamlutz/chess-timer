var http = require('http');
var fs = require('fs');

function send404(res) {
	res.writeHead(404, {"Content-Type": "text/plain"});
	res.write("Error 404: Page not Found");
	res.end();
}

function onRequest(req, res) {
	if(req.method == 'GET' && req.url == '/') {
		res.writeHead(200, {"Content-Type": "text/html"})
		fs.createReadStream("./index.html").pipe(res);
	} else {
		send404(res);
	}
}

http.createServer(onRequest).listen(8000);
console.log("server is running!");
