angular.module('app',[]).controller('registerCtrl', function($scope){
	alert();
	valid = function(){
	console.log($scope.fullName);
	console.log($scope.email);
	console.log($scope.mobile);
	console.log($scope.propertyAdd);
	console.log($scope.city);
	console.log($scope.state);
	};
});