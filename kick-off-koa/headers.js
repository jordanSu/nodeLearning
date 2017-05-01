var Koa = require("koa");
var app = new Koa();

app.use(function (ctx, next) {
	return next().then(()=> {
		if (ctx.request.type === "application/json")
			ctx.body = {message: 'hi!'};
		else
			ctx.body = "ok";
	});
});

app.listen(process.argv[2]);
