var express = require('express')
  , app = express()
  , port = process.env.PORT || 5000;

app.use(express.logger());

app.get('/', function(req, res){
  res.send('Hello World');
});

app.listen(port, function(){
  console.log('Listenting on ' + port);
});
