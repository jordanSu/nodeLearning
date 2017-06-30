var Koa = require("koa");
var app = new Koa();
var parse = require("co-body");

app.use(async function(ctx, next) {
	await next();
	var body = await parse(ctx.req);
	console.log(body);
	if (ctx.request.method === "POST") {
		var result = body.name.toUpperCase();
		ctx.body = result;
	}
});

app.listen(process.argv[2]);
