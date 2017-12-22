var express = require ('express'),
	http = require ('http'),
	PORT = process.env.PORT,
    bodyParser = require('body-parser'),
	// user =require('./routes/user'),
	app = express();
	app.use(bodyParser.json()),
	app.listen(PORT);
	app.use(function (req, res, next) {
	    // Website you wish to allow to connect
	    res.setHeader('Access-Control-Allow-Origin', '*');
	    // Request methods you wish to allow
	    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	    // Request headers you wish to allow
	    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
	    // Set to true if you need the website to include cookies in the requests sent
	    // to the API (e.g. in case you use sessions)
	    res.setHeader('Access-Control-Allow-Credentials', true);
	    // Pass to next layer of middleware
	    next();
	});

console.log("server started on ",PORT);
// ------------------------- Router ---------------------------- we will use routeing method letter
var user = require('./routes/user');
app.use('/', user);


console.log(totalcount);
//var user = require('./routes/user');
//console.log(user,"here i am ");
//app.use('/user', user);
var userController = require('./controller/userController');

	app.post('/user', function(req,res){
		userController.setUser(req, function(response){
	  	res.send(response);
		});
	});
	app.get('/user', function(req,res){
		userController.getUser(req, function(response){
			res.send(response);
		});
// 	});
module.exports = app	