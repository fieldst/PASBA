app.controller('pasbaappcontroller', function($scope, $compile, $timeout, $http, $routeParams, $localStorage, usSpinnerService, $uibModal, $location, $animate, $rootScope ){

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

  //Tabs

  $scope.myapps = "My Apps";
  $scope.pasbaapps = "PASBA Apps";
  $scope.dmrpc = "DMRPC";
  $scope.him = "HIM";
  $scope.dataquality = "Data Quality";
  $scope.dataanalysis = "Data Analysis";
  

 
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




   
    $scope.currentItem = $routeParams.itemId;




$http.get("sandbox/colors.js").
	then(function(colorresponse){

		

		$scope.colors = colorresponse.data;

// old fix

//      arrayList = [], obj_c_processed = [];

// for (var i in $scope.restrictedapps) {
//     var obj = {TokenName: $scope.restrictedapps[i].TokenName, TokenLink: $scope.restrictedapps[i].TokenLink};

//     for (var j in $scope.colors) {
//         if ($scope.restrictedapps[i].TokenName == $scope.colors[j].TokenName) {
//             obj.TokenName = $scope.colors[j].TokenName;
//             obj_c_processed[$scope.colors[j].TokenName] = true;
//         }
//     }

   
// }

// for (var j in $scope.colors){
//     if (typeof obj_c_processed[$scope.colors[j].id] == 'undefined') {
//         arrayList.push({color: $scope.colors[j].color, icon: $scope.colors[j].icon, TokenName: $scope.colors[j].TokenName, TokenLink: $scope.restrictedapps[i].TokenLink});
//     }
// }


// $scope.newjson = arrayList;

function mergeArraysOnProperty(array1, array2, property) {
  array1.forEach(function(element1) {
    array2.forEach(function(element2) {
      if (element1[property] === element2[property]) {
        for (var newProperty in element2) {
          if (element2.hasOwnProperty(newProperty)) {
            element1[newProperty] = element2[newProperty];
          }
        }
      }
    });
  });
  return array1;
};

$scope.newjson = mergeArraysOnProperty($scope.restrictedapps, $scope.colors, "TokenName");




//default template
if($scope.newjson.length > 0){

    $scope.test = "true";
    }




$scope.check_credentials = function (app) {

var request = $http({
    method: "POST",
    url: "https://pasbadevweb/PACT/API/createweblogentry",
    data: {
        AuditEvent: "App Access",
        AuditEventObject: app
    },
    headers: { 'Content-Type': 'application/json' }
    
});


}


$scope.check_credentials_tabs = function (appname) {
var app = appname;
var request = $http({
    method: "POST",
    url: "https://pasbadevweb/PACT/API/createweblogentry",
    data: {
        AuditEvent: "Branch Access",
        AuditEventObject: app
    },
    headers: { 'Content-Type': 'application/json' }
    
});


}



$scope.check_credentials_unrestricted = function (app) {

var request = $http({
    method: "POST",
    url: "https://pasbadevweb/PACT/API/createweblogentry",
    data: {
        AuditEvent: "App Access",
        AuditEventObject: app
    },
    headers: { 'Content-Type': 'application/json' }
    
});


}




 $scope.codeAddress = function() {

    

           var request = $http({
    method: "POST",
    url: "https://pasbadevweb/PACT/API/createweblogentry",
    data: {
        AuditEvent: "LOGIN",
        AuditEventObject: "PASBA"
    },
    headers: { 'Content-Type': 'application/json' }
   
});
           
  
    
        
        }





	})

        

    


$scope.$emit('UNLOAD')


})


    
});

var idleTime = 0;
$(document).ready(function () {
    //Increment the idle time counter every minute.
    var idleInterval = setInterval(timerIncrement, 60000); // 1 minute

    //Zero the idle timer on mouse movement.
    $(this).mousemove(function (e) {
        idleTime = 0;
    });
    $(this).keypress(function (e) {
        idleTime = 0;
    });
});

function timerIncrement() {
    idleTime = idleTime + 1;
    if (idleTime > 44) { // 20 minutes
        window.location.reload();
    }
}










  