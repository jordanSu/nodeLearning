var Koa = require("koa");
var parse = require("co-body");
var session = require("koa-session");

var form = '<form action="/login" method="POST">\
		   <input name="username" type="text" value="username">\
		   <input name="password" type="password" placeholder="The password is \'password\'">\
		   <button type="submit">Submit</button>\
		   </form>';

var app = new Koa();

app.keys = ['secret1', 'secret2', 'secret3'];
app.use(session(app));

/*  Test for request /  */
app.use((ctx, next)=> {
	if (ctx.url !== '/')
		return next();
	if (ctx.session.authenticated)
		ctx.body = "hello world";
	else {
		ctx.throw(401, 'Unauthorized');
	}
});

/*  Test for request /login  */
app.use(async function (ctx, next) {
	if (ctx.url !== '/login') return next();
	if (ctx.method === 'GET') return ctx.body = form;
	if (ctx.method === 'POST') {
		var body = await parse.form(ctx.req);
		if (body.username === "username" && body.password === "password") {
			ctx.session.authenticated = true;
			ctx.redirect("/");
		}
		else {
			ctx.throw(400, 'Bad Request');
		}
	}
});

/*  Test for request /logout  */
app.use((ctx, next)=> {
	if (ctx.url !== '/logout') return next();
	else {
		ctx.session.authenticated = null;
		ctx.redirect("/login");
	}
});

app.listen(process.argv[2]);
