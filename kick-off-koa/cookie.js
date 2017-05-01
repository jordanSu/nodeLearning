var Koa = require("koa");
var app = new Koa();

app.keys = ['secret', 'keys'];

app.use(async function(ctx, next) {
	if (ctx.url === "/") {
		await next();
		var times = ctx.cookies.get("view", {signed: true}) | 0;
		times += 1;
		ctx.cookies.set("view", times, {signed: true});
		ctx.body = times + " views";
	}
});

app.listen(process.argv[2]);
