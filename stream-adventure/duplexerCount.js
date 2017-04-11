var duplexer2 = require('duplexer2')
var through2 = require('through2')
var data = {}
module.exports = function(counter) {
    var output = through2.obj(function(chunk, __, next) {
        var country = chunk["country"]
        if (data[country] == undefined)
            data[country] = 1
        else
            data[country] = data[country] + 1
        next()
    })

    var du = duplexer2({writableObjectMode:true}, output, counter)
    du.on("finish", function() {
        console.log(data)
        counter.setCounts(data)
    })
    return du
}
