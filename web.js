var fs = require('fs');
var buffer = fs.readFileSync('index.html');
var buffer2 = fs.readFileSync('contacts.html');


var express = require('express');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
    response.send(buffer.toString());
});
app.get('/contacts', function(request, response) {
    response.send(buffer2.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
    console.log("Listening on " + port);
});/**
 * Created with JetBrains WebStorm.
 * User: pavel.nykytiuk
 * Date: 13.11.13
 * Time: 12:35
 * To change this template use File | Settings | File Templates.
 */
