var userModel = require('../model/userModel');
	
var userActivity = {
	setUser : function(req,res) {
		console.log("ssssssssss",req.body);
		userModel.setUserAction(req, function(err,response){
			if(err){
				res(err);
			}else{
				// console.log(response)
				res(JSON.stringify(response));
			}
		})
	},

	getUser : function(req,res){
		userModel.getUserAction(req, function(err,response){
			if(err){
				res(JSON.stringify(err));
			}else{
				res(JSON.stringify(response));
			}
		});
	}
}

module.exports = userActivity;