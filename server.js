var express = require('express'); 

var app = express();

app.use('/js', express.static('build/js')); 
app.use('/media', express.static('build/media'));

app.get('/*', function(req, res) { 
  res.sendFile(__dirname + '/build/index.html');
});


 
app.listen(3040, function() {
  console.log('server started at 3040'); 
});