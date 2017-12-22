


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

