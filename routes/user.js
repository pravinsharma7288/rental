'use strict'

var express = require('express'),
 	router = express.Router(),
 	userController = require('../controller/userController');

router.use(function (req, res, next) {
	    // Website you wish to allow to connect
	    // res.setHeader('Access-Control-Allow-Origin', '*');
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

router.post('/user',function(req,res){
		userController.setUser(req,function(request,response){
	})
}); 

router.get('/user', function(req,res){
	userController.getUser(req, function(response){
		res.send(response);
	});
});

module.exports = router;

