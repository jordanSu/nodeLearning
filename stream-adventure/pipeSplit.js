var split = require('split')
var through2 = require('through2')
var i = 1
process.stdin.pipe(split())
             .pipe(through2(function(line, __, next) {
                if (i % 2 == 0)     //even number
                    this.push(line.toString().toUpperCase() + "\n")
                else if (i % 2 == 1)    //odd number
                    this.push(line.toString().toLowerCase() + "\n")
                i = i + 1
                next()

             }))
             .pipe(process.stdout)
