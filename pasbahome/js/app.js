var app = angular.module('pasbaapp', [
	'ngRoute',
	'angularSmoothscroll',
	// optional'ui.calendar',
	'ui.bootstrap',
	]);

app.config(function($routeProvider){
	$routeProvider
	.when("/home", {
		templateUrl: "templates/views/pasbahome.html",
		controller: 'pasbaappcontroller',

	}).when("/pasbaapps", {
		templateUrl: "templates/views/pasbaapps.html",
		controller: 'pasbaappcontroller',
		// css: 'css/pasbaappscss.css',

	}).when("/dmrpc", {
		templateUrl: "templates/views/dmrpc.html",
		controller: 'dmrpccontroller',
		// css: 'css/pasbaappscss.css',

	}).
	otherwise({
	  redirectTo: "/home"
	});


	});











