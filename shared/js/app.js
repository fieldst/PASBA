var app = angular.module('pasbaapp', [
	'ngAnimate',
	'ngRoute',
	'angularSmoothscroll',
	// optional'ui.calendar',
	'ui.bootstrap',
	'ngResource',
	'angularTreeview',
	'angularSpinner',
	'dm.stickyNav',
	'toggle-switch',





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
		templateUrl: "pasbaappspage/templates/pasbaapps.html",
		controller: 'pasbaappsinfocontroller',
		// css: 'css/pasbaappscss.css',

	}).when("/viewapps/:itemId", {
		templateUrl: "pasbaappspage/templates/unrestrictedapps.html",
		controller: 'pasbaappsinfocontroller',

	}).when("/leadership", {
		templateUrl: "about/templates/leadership.html",
		controller: 'aboutuscontroller',

	}).when("/aboutus", {
		templateUrl: "about/templates/aboutus.html",
		controller: 'aboutuscontroller',
		
	}).when("/contactus", {
		templateUrl: "about/templates/contactus.html",
		controller: 'aboutuscontroller',




// start dmrpc
	}).when("/dmrpc", {
		templateUrl: "dmrpcsection/templates/dmrpc.html",
		controller: 'dmrpccontroller',
		// css: 'css/pasbaappscss.css',

	}).when("/recordsrequest", {
		templateUrl: "dmrpcsection/templates/instructions.html",
		controller: 'dmrpccontroller',


	}).when("/padpoliciesandguidance", {
		templateUrl: "dmrpcsection/templates/padpolicies.html",
		controller: 'dmrpccontroller',

	}).when("/medicalregulating", {
		templateUrl: "dmrpcsection/templates/medicalregulating.html",
		controller: 'dmrpccontroller',

	}).when("/sidr", {
		templateUrl: "dmrpcsection/templates/sidr.html",
		controller: 'dmrpccontroller',
// end drmpc

//start data quality

}).when("/dataquality", {
		templateUrl: "dqsection/templates/dataquality.html",
		controller: 'dqcontroller',
	
	}).when("/dqmcprogram", {
		templateUrl: "dqsection/templates/dqmcprogram.html",
		controller: 'dqcontroller',
	
	}).when("/dqmcpolicies", {
		templateUrl: "dqsection/templates/policies.html",
		controller: 'dqcontroller',
	
	}).when("/dqguidelines", {
		templateUrl: "dqsection/templates/guidelines.html",
		controller: 'dqcontroller',
	
	}).when("/dqprogrammetrics", {
		templateUrl: "dqsection/templates/programmetrics.html",
		controller: 'dqcontroller',
	
	}).when("/faq", {
		templateUrl: "dqsection/templates/faq.html",
		controller: 'dqcontroller',
	//end data quality

	
	//start data analysis
	}).when("/dataanalysis", {
		templateUrl: "dataanalysissection/templates/dataanalysis.html",
		controller: 'dataanalysiscontroller',

	}).when("/dataanalysissupport", {
		templateUrl: "dataanalysissection/templates/dataanalysissupport.html",
		controller: 'dataanalysiscontroller',
	})

		.when("/dataanalysissources", {
		templateUrl: "dataanalysissection/templates/dataanalysissources.html",
		controller: 'dataanalysiscontroller',

		})

		.when("/dataanalysissharing", {
		templateUrl: "dataanalysissection/templates/dataanalysissharing.html",
		controller: 'dataanalysiscontroller',
//end data analysis

//start coding 
}).when("/coding", {
		templateUrl: "codingsection/templates/codinghome.html",
		controller: 'codingcontroller',
}).when("/codingguildelines", {
		templateUrl: "codingsection/templates/codingguildline.html",
		controller: 'codingcontroller',
}).when("/codinghelpdesk", {
		templateUrl: "codingsection/templates/helpdesk.html",
		controller: 'codingcontroller',
}).when("/codingcompliance", {
		templateUrl: "codingsection/templates/codingcompliance.html",
		controller: 'codingcontroller',
}).when("/education", {
		templateUrl: "codingsection/templates/educationandtraining.html",
		controller: 'codingcontroller',
}).when("/prodevelopment", {
		templateUrl: "codingsection/templates/professionaldevelopment.html",
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





















