var Koa = require("koa");
var app = new Koa();

app.use(function (ctx, next) {
	return next().then(() => {
		console.log(ctx);
		if (ctx.request.method == "GET" && ctx.request.url == "/hello")
			ctx.body = "hello koa";
	});	
});

app.listen(process.argv[2]);
