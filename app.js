var express = require('express');

var app = express();
app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));
/*
---- rubin's explanation ----
first argument passed in the use function is basically saying that anyone
who tries to access files inside /assets should be served with the files
inside the "stuff" dir, which is the second parameter of the use function.
if you look at the link tag inside your html,
it says "href="/assets/style.css"",
here in this case you are trying to access the /assets folder, so then
you are served with the files inside the stuff dir(which is indicated on
the second param of the use function).
*/
/*
middleware, routed, without express
app.use('/assets', function(req, res, next){
	console.log(req.url);
	next();
});
*/
var dTime = new Date();
console.log('[server-refresh] logged: ' + dTime);

/*
app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});
*/
app.get('/', function(req, res){
	res.render('index');
});

/*
app.get('/page/:object', function(req, res){
	var obj1 = {prop1: val1/string, prop2: val2/string};
	res.render('index', {obj: req.params.object, obj1: obj1});
});
*/

app.listen(3000);
