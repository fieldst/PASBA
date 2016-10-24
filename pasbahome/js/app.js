var app = angular.module('pasbaapp', [
	'ngRoute',
	'angularSmoothscroll',
	// optional'ui.calendar',
	'ui.bootstrap',
	'ngResource',
	'ngAnimate',

	]);

app.config(function($routeProvider){
	$routeProvider


	.when("/home", {
		templateUrl: "myapps/template/pasbahome.html",
		controller: 'pasbaappcontroller',

	}).when("/pasbaapps", {
		templateUrl: "pasbaapps/templates/pasbaapps.html",
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


app.directive('testTest', function() {
  return {
    templateUrl: 'sandbox/pasbahome.html'
  };
});







