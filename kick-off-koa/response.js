var Koa = require("koa");
var app = new Koa();
var fs = require("fs");

app.use(async function(ctx, next) {
	await next();
	if (ctx.url === "/json")
		ctx.body = { foo: 'bar' };
	else if (ctx.url === "/stream")
		ctx.body = fs.createReadStream(process.argv[3]);
});

app.listen(process.argv[2]);
