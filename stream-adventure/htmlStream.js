var through2 = require('through2')
var trumpet = require('trumpet')
var tr = trumpet()

// for main pipeline
process.stdin.pipe(tr).pipe(process.stdout)

//if match class loud
var match = tr.select('.loud').createStream()
match.pipe(through2(function(chunk, enc, next) {
    this.push(chunk.toString().toUpperCase())
    next()
    })).pipe(match)
