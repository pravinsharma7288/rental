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



// function outer(firstname,a,b){
// 	var intro = 'I am ';
// 	this.ab = a;
// 	this.bb = b;
// 	function innner(lastname){

// 		console.log(ab + ' '+ firstname +' '+ lastname);
// 		return intro + ' '+ firstname +' '+ lastname;
// 	}
// 	return innner;
// }

// var newInner = outer('Pau',10,20);
// console.log(outer);
// console.log(newInner);
// newInner('sharma')

// hosting  example 
function hoist() {
  var message;
  console.log(message);
  message='Hoisting is all the rage!'
}

hoist();


function hoist() {
  var message='Hoisting is all the rage!'
  return (message);
}

hoist();



// how to empty array 
var arrayList = ['a','b','c','d','e','f']; // Created array 

console.log(arrayList);
// arrayList.length = 0;
arrayList.splice(0, arrayList.length);

console.log(arrayList);


var totalcount = (function (){
	var  count = 0;
	function counter(val) {
		// console.log(count);
		 return count = count + val;
	}
	 return {
	 	increment: function(){
	 		counter(1);
	 	},
	 	decrement: function(){
	 		counter(-1);
	 	},
	 	printVal: function(){
	 		return count;
	 	}
	 };
})();

totalcount.increment();
console.log(totalcount.printVal());
totalcount.increment();
console.log(totalcount.printVal());
totalcount.decrement();
console.log(totalcount.printVal());
totalcount.increment();
console.log(totalcount.printVal());

// console.log(mul(2)(3)(4))



// console.log(totalcount);
// var user = require('./routes/user');
// console.log(user,"here i am ");
// app.use('/user', user);
// var userController = require('./controller/userController');

// 	app.post('/user', function(req,res){
// 		userController.setUser(req, function(response){
// 	  	res.send(response);
// 		});
// 	});
// 	app.get('/user', function(req,res){
// 		userController.getUser(req, function(response){
// 			res.send(response);
// 		});
// 	});
module.exports = app	