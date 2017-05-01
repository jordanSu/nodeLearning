var Koa = require("koa");

var app = new Koa();

app.use(errorHandler);

app.use(function (ctx, next) {
	if (ctx.path === '/error') throw new Error('ooops');
	ctx.body = "OK";
});

function errorHandler(ctx, next) {
	next().then(() =>{}, ()=> {
		ctx.status = 500;
		ctx.body = "internal server error";
	});
}

app.listen(process.argv[2]);
