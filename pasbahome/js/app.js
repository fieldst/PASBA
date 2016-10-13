var app = angular.module('pasbaapp', [
	'ngRoute',
	'angularSmoothscroll',
	// optional'ui.calendar',
	'ui.bootstrap',
	]);

app.config(function($routeProvider){
	$routeProvider
	.when("/home", {
		templateUrl: "views/pasbahome.html",
		controller: 'pasbacontroller',

	}).when("/pasbaapps", {
		templateUrl: "views/pasbaapps.html",
		controller: 'pasbaappcontroller',
		// css: 'css/pasbaappscss.css',

	}).when("/dmrpc", {
		templateUrl: "views/dmrpc.html",
		controller: 'pasbaappcontroller',
		// css: 'css/pasbaappscss.css',

	}).
	otherwise({
	  redirectTo: "/home"
	});


	});











