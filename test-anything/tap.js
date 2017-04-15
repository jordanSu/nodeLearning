var test = require('tape');
var fancify = require(process.argv[2]);

test('test function "fancify"', function(t) {
    t.ok(fancify('Hello') === "~*~Hello~*~", "should wrapped in ~*~");
    t.ok(fancify('Hello', true) === "~*~HELLO~*~", "should be capital!");
    t.ok(fancify('Hello', false, '!') === "~!~Hello~!~", "should change middle char");
    t.end();
});
