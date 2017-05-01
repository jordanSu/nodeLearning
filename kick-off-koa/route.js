var Koa = require("koa");
var app = new Koa();

app.use(async function(ctx, next) {
	await next();
	if (ctx.path === "/")
		ctx.body = "hello koa";
	else if (ctx.path === "/404")
		ctx.body = "page not found";
	else if (ctx.path === "/500")
		ctx.body = "internal server error";
});

app.listen(process.argv[2]);
