var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var nodemailer = require("nodemailer");

var port = 3000;

//setting up the express and bodyparser apps
var app = express();
var urlencodedParser = bodyParser.urlencoded({ extended: false });
//ejs template engine, assets for static resources
app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));
//connect to dlab
mongoose.connect('mongodb://demosender:demohpc1@ds131971.mlab.com:31971/demo-hpc', { useNewUrlParser: true });

//get requests for all pages
app.get('/', function(req, res){
	res.render('index');
});
app.get('/whyhyd', function(req, res){
	res.render('whyhyd');
});
app.get('/history', function(req, res){
	res.render('history');
});
app.get('/institutions', function(req, res){
	res.render('institutions');
});
app.get('/incentives', function(req, res){
	res.render('incentives');
});
app.get('/setup', function(req, res){
	res.render('setup');
});
app.get('/faq', function(req, res){
	res.render('faq');
});
app.get('/contact', function(req, res){
	res.render('contact');
});

app.get('/privpol', function(req, res){
	res.render('privpol');
});
app.get('/formsuccess', function(req, res){
	res.render('formsuccess');
});

//database schema
var demoschema = new mongoose.Schema({
  name: String,
  industry: String,
  email: String,
  mobile: String
});
//creating model type
var demo = mongoose.model('demo', demoschema);
//transport service for nodemailer
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'demo.hydphcity@gmail.com',
    pass: 'demohpc1'
  }
});

//form content parsing, post method
app.post("/sendmail", urlencodedParser, function(req, res){
 //get info from view and pass to mongodb
 var newdemo = demo(req.body).save(function(err, data){
   if (err) throw err;
 });
 //email details
 var mailOptions = {
   from: 'demo.hydphcity@gmail.com', // sender address
   to: req.body.email, // list of receivers
   subject: 'Thanks for subscribing', // Subject line
   html: '<p>Random html text</p>'// plain text body
 };
 //sending the email
 transporter.sendMail(mailOptions, function (err, info) {
    if(err)
      console.log(err)
    else
      console.log(info);
 });
 res.render(__dirname + "/views/formsuccess");
});

var dTime = new Date();
app.listen(port, function(){
 console.log('[server-refresh] logged: ' + dTime);
});
