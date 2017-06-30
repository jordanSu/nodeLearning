var Koa = require("koa");
var views = require("co-views");

var app = new Koa();

var render = views(__dirname + '/views', {default: 'ejs'});

var user = {
	name: {
		first: 'Tobi',
		last: 'Holowaychuk'
	},
	species: 'ferret',
	age: 3
};

app.use(async function (ctx, next) {
	ctx.body = await render('user', {"user": user});
});

app.listen(process.argv[2]);
