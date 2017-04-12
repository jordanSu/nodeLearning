var test = require('tape');
var repeatCallback = require(process.argv[2]);

test('forRepeatCall', function(t) {
    t.plan(5);
    repeatCallback(5, function () {
        t.pass('called!');
    })
});
