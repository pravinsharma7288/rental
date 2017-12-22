var pg = require ('pg');


var conString = "pg://postgres:pau7288@localhost:5432/stg";
var client = new pg.Client(conString);
client.connect();

var users = {
	query : function(res){
		var data = client.query("SELECT * from users ",function(err,result) {
			if(err){
	 			res(err);
			}else{
				res(result.rows);
			}
		});
	}
}
module.exports = users;

