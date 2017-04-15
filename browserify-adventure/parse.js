var url = require('url');
var thisURL = url.parse(prompt(), true);
console.log(url.resolve(thisURL, thisURL.query.file));
