var Koa = require("koa");

var app = new Koa();

app.use(responseTime);
app.use(upperCase);

app.use(function (ctx, next) {
	next().then(()=> {
		ctx.body = "hello koa";
	});
});

function responseTime(ctx, next) {
	var time = new Date();
	next().then(()=> {
		var between = new Date().valueOf() - time.valueOf();
		ctx.set("X-Response-Time", between);
	});
}

function upperCase(ctx, next) {
	next().then(()=> {
		ctx.body = ctx.body.toUpperCase();
	});
}

app.listen(process.argv[2]);
