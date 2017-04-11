var http = require('http')
var through2 = require('through2')
var server = http.createServer(function(request, response) {
    if (request.method == "POST") {
        request.pipe(through2(function(buf,_,next) {
            this.push(buf.toString().toUpperCase())
            next()
        }))
        .pipe(response)
    }
})
server.listen(process.argv[2])
