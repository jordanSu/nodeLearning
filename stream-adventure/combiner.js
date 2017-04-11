var combine = require('stream-combiner')
var through = require('through2')
var split = require('split')
var zlib = require('zlib')
var nowGenre = ""
var nowList = []
var nowObj;
module.exports = function() {
    return combine(
        split(),
        through.obj(function(chunk, __, next) {
            if (!chunk) return next()
            chunk = JSON.parse(chunk)
            if (chunk["type"] == "genre") {
                if (nowObj) {
                    this.push(JSON.stringify(nowObj) + "\n")
                }
                nowObj = {}
                nowGenre = chunk["name"]
                nowObj["name"] = nowGenre
                nowObj["books"] = []
            }
            else if (chunk["type"] == "book")
                nowObj["books"].push(chunk["name"])
            next()
        },function(next) {
            if (nowObj.name != undefined) {
                this.push(JSON.stringify(nowObj) + "\n")
            }
            next()
        }),
        zlib.createGzip()
    )
}
