var http=require('http');
var url=require('url');

var server=http.createServer(function(req,res){
    var pathname=url.parse(req.url).pathname;
    switch(pathname){
        case '/contacts':
            res.end('subpage');
            break;
        default:
            res.end('default');
            break;
    }

}).listen(8080);