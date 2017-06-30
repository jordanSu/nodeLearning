var Koa = require("koa");
var session = require("koa-session");

var app = new Koa();

app.keys = ["secret", "keys"];

app.use(session(app));

app.use(function (ctx, next) {
	if (ctx.url === "/") {
		next().then(()=> {
			var times = ctx.session.views | 0;
			times += 1;
			ctx.session.views = times;
			ctx.body = times + " views";
		});
	}
});

app.listen(process.argv[2]);
