var zlib = require('zlib')
var tar = require('tar')
var parser = tar.Parse()
var crypto = require('crypto')
var concat = require('concat-stream')
var decrypt = crypto.createDecipher(process.argv[2], process.argv[3])
var unzip = zlib.createGunzip()
process.stdin
       .pipe(decrypt)
       .pipe(unzip)
       .pipe(parser)

parser.on('entry', function(e) {
    if (e.type !== 'File') return;
    var hash = crypto.createHash('md5', {encoding:'hex'})

    e.pipe(hash).pipe(concat(function(data) {
        console.log(data + " " + e.path)
    }))
})
