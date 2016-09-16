var fs = require('fs');
var path = require('path');
var express = require('express');
var app = express();

var webroot = ''; //relative path to directory where index.html is

app.set('port', (process.env.PORT || 3000));
app.use('/', express.static(path.join(__dirname, './' + webroot)));

app.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});
