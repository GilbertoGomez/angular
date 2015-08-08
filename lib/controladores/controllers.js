window.$ = window.jQuery=require("jquery")
var bootstrap = require('bootstrap')
var angular = require('angular')
var Route = require('angular-route')
var app = angular.module('demoApp',[Route]);

app.config(['$routeProvider',function ($routeProvider){
    $routeProvider
		.when('/',{
			templateUrl:"public/pages/Demo.html",
			controller: "DemoController"
		})
		.when('/Demo2',{
			templateUrl: "public/pages/Demo2.html",
			controller: "Demo2Controller"
		})
		.when('/Demo3',{
			templateUrl: "public/pages/Demo3.html",
			controller: "Demo3Controller"
		})
		.otherwise({redirectTo:"/"});
}]);
app.controller('DemoController',function ($scope){
		$scope.inicio = function(){
			var doughnutData = [{
						value: 10,
						color:"#F7464A",
						highlight: "#FF5A5E",
						label: "datos 1"
						},{
						value: 30,
						color: "#46BFBD",
						highlight: "#5AD3D1",
						label: "datos 2"
						},{
						value: 60,
						color: "#FDB45C",
						highlight: "#FFC870",
						label: "datos 3"
						}];
			var ctx = document.getElementById("chart-area").getContext("2d");
			window.myDoughnut = new Chart(ctx).Doughnut(doughnutData, {responsive : false});
		}
	});
app.controller('Demo3Controller',function ($scope){

});
app.controller('Demo2Controller',function ($scope){

});

