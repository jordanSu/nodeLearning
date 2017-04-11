var ws = require('websocket-stream')
var webStream = ws('ws://localhost:8099')
webStream.end("hello\n")
