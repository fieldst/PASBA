var app = angular.module('pasbaapp', [
	'ngRoute',
	'angularSmoothscroll',
	'ui.calendar',
	'ui.bootstrap',
	]);

app.config(function($routeProvider){
	$routeProvider
	.when("/home", {
		templateUrl: "views/pasbahome.html",
		controller: 'pasbacontroller',
	}).when("/pasbaapps", {
		templateUrl: "views/pasbaapps.html",
		controller: 'pasbacontroller',
		css: 'css/pasbaappscss.css',

	}).
	otherwise({
	  redirectTo: "/home"
	});


	});











