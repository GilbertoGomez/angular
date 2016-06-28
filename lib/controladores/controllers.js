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
			Chart.defaults.global.responsive = true;
			var ctx = document.getElementById("chart-area").getContext("2d");
			window.myDoughnut = new Chart(ctx).Doughnut(doughnutData, {
				responsive : true
			});
			for (var v in doughnutData) {
				var data = doughnutData[v].value;
			  	var nombre = doughnutData[v].label;
			  	var color = doughnutData[v].color;
			  	$( ".datos" ).append(`<p style= background-color:${color} > ${nombre} : ${data} </p>`);
			}
		}
});
app.controller('Demo3Controller',function ($scope){

});
app.controller('Demo2Controller',function ($scope){
	$scope.datos = function(){
		var graf= {
			labels:["Enero","Febrero","Marzo","Abril","Mayo","Junio"],
			datasets:[{
				label:"primera",
				fillColor: "rgba(255, 255, 65, 0.7)",
				strokeColor: "rgba(0,0,0,0.8)",
				highlightFill: "rgba(220,220,220,0.75)",
				highlightStroke: "rgba(220,220,220,1)",
				data: [65, 59, 80, 81, 56, 99]
			},
			{
				label: "segunda",
				fillColor: "rgba(3, 86, 166, 0.7)",
				strokeColor: "rgba(0,0,0,0.8)",
				highlightFill: "rgba(151,187,205,0.75)",
				highlightStroke: "rgba(151,187,205,1)",
				data: [28, 48, 40, 19, 86, 27]
			}]
		};
	Chart.defaults.global.responsive = true;

	var ctx2 = document.getElementById("grafica").getContext("2d");
	var Barchat = new Chart(ctx2).Bar(graf);
	}
});

