
var express = require('express'),
 	router = express.Router(),
 	userController = require('../controller/userController');

router.post('/user',function(req,res){
	console.log("in routes.............");
		userController.setUser(req,function(request,response){

	})
}); 
module.exports = router;

