var express = require('express')
  , fs = require('fs')
  , htmlfile = 'index.html'
  , port = process.env.PORT || 8080;

var app = express(express.logger());

app.get('/', function(req, res){
	var html = fs.readFileSync(htmlfile).toString();
	res.send(html);
});

app.listen(port, function(){
	console.log('Listening on ' + port);
});
