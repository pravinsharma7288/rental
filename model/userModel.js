var pg = require ('pg');


var conString = "pg://postgres:pau7288@localhost:5432/stg";
var client = new pg.Client(conString);
client.connect();

var users = {
	setUserAction : function(req,res){
	var cheqry = "SELECT * FROM users WHERE email = '"+req.body.email+"'";
		client.query(cheqry, function(err ,result1){	
			if(result1.rows.length < 1 ){
				var qry = "INSERT INTO users (name, email, mobile, address, city, state) "
					qry += " VALUES ('"+req.body.fullName+"','"+req.body.email+"','"+req.body.mobile+"','"+req.body.propertyAdd+"','"+req.body.city+"','"+req.body.state+"')";
				var data = client.query(qry,function(err,result) {
					if(err){
							console.log("Error : ",err);		
			 			res(err);
					}else{
						console.log("Result : ",result.rows);		
						res(null,result.rows);
					}
				});
			}else{
				console.log(req.body.email+" user is already present in database");
				res(req.body.email+" user is already present in database");
			}
		});
	},
	getUserAction : function(req,res){
		var data = client.query("SELECT * from users ",function(err,result) {
			if(err){
	 			res(err);
			}else{
				// console.log(result.rows,"result.rows...........");
				res(null,result.rows);
			}
		});
	}
}
module.exports = users;

