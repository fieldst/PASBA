var app = angular.module('pasbaapp', [
	'ngRoute',
	'angularSmoothscroll',
	// optional'ui.calendar',
	'ui.bootstrap',
	'ngResource',
	'ngAnimate',
	'angularTreeview',

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

	}).when("/aboutus", {
		templateUrl: "about/templates/aboutus.html",
		controller: 'pasbaappcontroller',
		// css: 'css/pasbaappscss.css',




// start dmrpc
	}).when("/dmrpc", {
		templateUrl: "dmrpc/templates/dmrpc.html",
		controller: 'dmrpccontroller',
		// css: 'css/pasbaappscss.css',

	}).when("/recordsrequest", {
		templateUrl: "dmrpc/templates/instructions.html",
		controller: 'dmrpccontroller',


	}).when("/padpoliciesandguidance", {
		templateUrl: "dmrpc/templates/padpolicies.html",
		controller: 'dmrpccontroller',

	}).when("/medicalregulating", {
		templateUrl: "dmrpc/templates/medicalregulating.html",
		controller: 'dmrpccontroller',

	}).when("/sidr", {
		templateUrl: "dmrpc/templates/sidr.html",
		controller: 'dmrpccontroller',
// end drmpc

}).when("/dataquality", {
		templateUrl: "dq/templates/dataquality.html",
		controller: 'dqcontroller',
	
	}).when("/dqmcprogram", {
		templateUrl: "dq/templates/dqmcprogram.html",
		controller: 'dqcontroller',
	
	}).when("/dqmcpolicies", {
		templateUrl: "dq/templates/policies.html",
		controller: 'dqcontroller',
	
	}).when("/dqguidelines", {
		templateUrl: "dq/templates/guidelines.html",
		controller: 'dqcontroller',
	
	}).when("/dqprogrammetrics", {
		templateUrl: "dq/templates/programmetrics.html",
		controller: 'dqcontroller',
	
	}).when("/faq", {
		templateUrl: "dq/templates/faq.html",
		controller: 'dqcontroller',
	
	}).
	otherwise({
	  redirectTo: "/home"
	});


	});

//restricted structure
 app.directive('testTest', function() {
   return {
     templateUrl: 'sandbox/pasbahome.html'
   };
 });


//home sidewidget template


// app.directive('homeWidget', function() {
//    return {
//      templateUrl: 'side-widget/side-widget-templates/homewidget.html',
//      controller: 'sidewidgetcontroller'
//    };
//  });






app.directive('pasbaappsWidget', function() {
   return {
     templateUrl: 'side-widget/side-widget-templates/pasbaapps.widget.html',
     }

 });















