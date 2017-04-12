var test = require('tape');
var feedCat = require(process.argv[2]);

test('test food for cat', function(t) {
    t.equal(feedCat('food'), 'yum');
    t.throws(feedCat.bind(null, 'chocolate'));
    t.end();
});
