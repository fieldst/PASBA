var app = angular.module('pasbaapp', [
	'ngAnimate',
	'ngRoute',
	'angularSmoothscroll',
	// optional'ui.calendar',
	'ui.bootstrap',
	'ngResource',
	'angularTreeview',
	'angularSpinner',



	]);

app.config(function($routeProvider){
	$routeProvider


	.when("/home", {
		templateUrl: "myapps/template/pasbahome.html",
		controller: 'pasbaappcontroller',

	}).when("/unrestrictedapps/:itemId", {
		templateUrl: "myapps/template/unrestrictedapps.html",
		controller: 'pasbaappcontroller',

	}).when("/restricted/:itemId", {
		templateUrl: "myapps/template/restricted.html",
		controller: 'pasbaappcontroller',

	}).when("/pasbaapps", {
		templateUrl: "pasbaapps/templates/pasbaapps.html",
		controller: 'pasbaappsinfocontroller',
		// css: 'css/pasbaappscss.css',

	}).when("/viewapps/:itemId", {
		templateUrl: "pasbaapps/templates/unrestrictedapps.html",
		controller: 'pasbaappsinfocontroller',

	}).when("/leadership", {
		templateUrl: "about/templates/leadership.html",
		controller: 'aboutuscontroller',

	}).when("/aboutus", {
		templateUrl: "about/templates/aboutus.html",
		controller: 'aboutuscontroller',
		




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

//start data quality

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
	//end data quality

	
	//start data analysis
	}).when("/dataanalysis", {
		templateUrl: "dataanalysis/templates/dataanalysis.html",
		controller: 'dataanalysiscontroller',

	}).when("/dataanalysissupport", {
		templateUrl: "dataanalysis/templates/dataanalysissupport.html",
		controller: 'dataanalysiscontroller',
	})

		.when("/dataanalysissources", {
		templateUrl: "dataanalysis/templates/dataanalysissources.html",
		controller: 'dataanalysiscontroller',

		})

		.when("/dataanalysissharing", {
		templateUrl: "dataanalysis/templates/dataanalysissharing.html",
		controller: 'dataanalysiscontroller',
//end data analysis

//start coding 
}).when("/coding", {
		templateUrl: "coding/templates/codinghome.html",
		controller: 'codingcontroller',
}).when("/codingguildelines", {
		templateUrl: "coding/templates/codingguildline.html",
		controller: 'codingcontroller',
}).when("/codinghelpdesk", {
		templateUrl: "coding/templates/helpdesk.html",
		controller: 'codingcontroller',
}).when("/codingcompliance", {
		templateUrl: "coding/templates/codingcompliance.html",
		controller: 'codingcontroller',
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





















