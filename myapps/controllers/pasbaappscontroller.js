app.controller('pasbaappcontroller', function($scope, $compile, $timeout, $http, $routeParams, usSpinnerService, $uibModal, $location, $animate, $rootScope ){

$rootScope.location = $location;
$scope.$on('LOAD',function(){$scope.loading=true});
$scope.$on('UNLOAD',function(){$scope.loading=false});
$scope.$on('removeslider',function(){$scope.removeit=true});
 $scope.useroption = false;

 $scope.goCats = false;



 $scope.removeslideshow = function(selection){
  $scope.removeit = selection;

   // console.log($scope.removeit);
 }

 $scope.$on('#/unrestrictedapps', function removeslideshow(selection){
    $scope.removeit = selection;
 });




 $scope.isActive = function(destination){
  
      return destination === $location.path();
       
    
}

 
 var accessthree = $scope;

  
    accessthree.showmodalmapmodel = function(size) {
      $uibModal.open({
        templateUrl: 'mapfactsheet.html',
        size: size,
        controller: function($scope) {
        
        }
      });
    };

   




//     if($location.path() === '/recordsrequest'){
//       // console.log("highlight");


//     }
//     return $location.path() === destination;


   

//   }

//   $scope.getdestination = function(){
//       var here = $location.path()
//       console.log(here);
//   }

// $scope.undue = function(){


//   if($location.path() === '/leadership'){
//     return $scope.current = null;
//   }
// }

$scope.current = null;

$scope.setcurrent = function(value){
  $scope.current = value;

  if($scope.current === 'leadership'){
      $scope.noshade = "noshade";

  }
};







  $scope.documents = {
               accessrequest : "../PASBAApps/DD2875.pdf",
               sav : "../PASBAApps/Request_for_sav.pdf",
  };


//unrestricted apps
   $scope.unrestrictapps = [
  
        
        {name: 'BHEATC-Summary', icon: 'content/images/icons/caper.svg', classname: 'color3', link: '#/unrestrictedapps', target: '../DataAnalysis/defaultBHSummary.asp'},
        {name: 'PASBA BMI Metric', icon: 'content/images/icons/inpatient.svg', classname: 'color4', link: '#/unrestrictedapps', target: '../DataAnalysis/defaultIRIS.asp'},
        {name: 'CAPER Reports', icon: 'content/images/icons/eod.svg', classname: 'color5', link: '#/unrestrictedapps', target: '../caperreports', remove: ''},
        {name: 'DQMCP Program Metrics', icon: 'content/images/icons/ipsr.svg', classname: 'color2', link: '#/unrestrictedapps', target: '../mrDQMCP/DQMCPMetrics.aspx'},
        {name: 'End of Day Compliance Summary Metric', icon: 'content/images/icons/eodcompliance.svg', classname: 'color7', link: '#/unrestrictedapps', target: '../DataAnalysis/defaultEOD.asp'},
        {name: 'Inpatient Professional Service Rounds Metric', icon: 'content/images/icons/inpatient.svg', classname: 'color8', link: '#/unrestrictedapps', target: '../DataAnalysis/defaultIPSR.asp'},
        {name: 'MAPR Data Quality Measures Metric', icon: 'content/images/icons/quality.svg', classname: 'color1', link: '#/unrestrictedapps', target: '../DataAnalysis/defaultMAPR.asp'},
        {name: 'R299/SIDR Report', icon: 'content/images/icons/sidrreport.svg', classname: 'color2', link: '#/unrestrictedapps', target: '../mrDQMCP/SIDRReports.aspx'},
        // comming soon {name: 'Commanders Corner', icon: 'content/images/icons/commander.svg', classname: 'color3', link: '', target: ''},

  ]


   $scope.unrestrictappspasbaapps = [
  
        
        {name: 'Behavioral Health EATC - Summary', icon: 'content/images/icons/caper.svg', info: 'Compliance in Enhanced Access to Care (EATC) in BH and PC clinics.', link: '#/viewapps', background: '#7F0000', target: '../DataAnalysis/defaultBHSummary.asp'},
        {name: 'CAPER Reports', icon: 'content/images/icons/eod.svg', info: 'These reports help MTFs track daily data transmittals, receipt and data processing.', link: '#/viewapps', background: '#131340', target: '../caperreports'},
        {name: 'DQMCP RPTS', icon: 'content/images/icons/ipsr.svg', info: 'Survey results from the DQMCP application includes monthly and YTD reports', link: '#/viewapps', background: '#201040', target: '../mrDQMCP/DQMCPMetrics.aspx'},
        {name: 'EOD Summary', icon: 'content/images/icons/eodcompliance.svg', info: 'EOD Summary is a monthly report monitoring the compliance with the "End of Day" requirements at RMC, MTF and CLINIC level.', link: '#/viewapps', background: '#401A04', target: '../DataAnalysis/defaultEOD.asp'},
        {name: 'Inpatient Professional Service Rounds', icon: 'content/images/icons/inpatient.svg', info: 'Reports the documentation, utilization, and data capture of professional rounds.', link: '#/viewapps', background: '#182073', target: '../DataAnalysis/defaultIPSR.asp'},
        {name: 'MAPR Data Quality Measures', icon: 'content/images/icons/quality.svg', info: 'Published under the MAPR along with the PBAM adjustments for the reporting month.', link: '#/viewapps', background: '#004000', target: '../DataAnalysis/defaultMAPR.asp'},
        {name: 'SIDR Reports', icon: 'content/images/icons/sidrreport.svg', info: 'SIDR reports include SIDR Completeness Transmittal Receipt Dates Counts by Source of Admission Files processed', link: '#/viewapps', background: '#0E4040', target: '../mrDQMCP/SIDRReports.aspx'},

  ]


$scope.externalapps = [
  
        {name: 'MAP', icon: 'content/images/icons/M.svg', classname: 'color1', link: '../map'},
        {name: 'PH360', icon: 'content/images/icons/medcomchart.svg', classname: 'color2', link: '../medcom360'},
       

  ]
  $scope.linktarget = {
        bheatcsummary: "../DataAnalysis/defaultBHSummary.asp"


  }



//restricted apps

// when live path ../pact/api/userappinfo

$scope.$emit('LOAD')

 $http.get("sandbox/userappinfo.js").
 	then(function(responce){
		
		$scope.username = responce.data;

    $scope.restrictedapps = responce.data.UserApp;
     
    //romove stupid slash

     angular.forEach($scope.restrictedapps,function(value, key) {
        
     value.TokenLink = value.TokenLink.replace("/", "../");
    },{});


		console.log($scope.restrictedapps);


   
    $scope.currentItem = $routeParams.itemId;




$http.get("sandbox/colors.js").
	then(function(colorresponse){

		

		$scope.colors = colorresponse.data;


$scope.unrestricteddata = [
      {
         "color":"color1",
         "icon": "content/images/icons/administrator.svg"
      }
      ];

		// restrictvalues.push({"restrictedapps.UserApp"});

	// $scope.restrictedapps.push({color : "white"});




	function addColor (objectArray, colorArray, restrictedtemplate){
	
	objectArray.forEach(function(object, index){
		object.color = colorArray[index];


		 if($scope.restrictedapps.length > 0){


     $scope.test = "true";

    
  }

	});
	
};

addColor($scope.restrictedapps, $scope.colors, $scope.unrestricteddata);
 // console.log($scope.restrictedapps);


	})
$scope.$emit('UNLOAD')


})


    
});










  