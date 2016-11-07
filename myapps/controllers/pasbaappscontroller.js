app.controller('pasbaappcontroller', function($scope, $compile, $timeout, $http) {


  $scope.documents = {
               accessrequest : "../PASBAApps/DD2875.pdf",
               sav : "../PASBAApps/Request_for_sav.pdf",
  };


//unrestricted apps
   $scope.unrestrictapps = [
  
        {name: 'MAP', icon: 'content/images/icons/M.svg', classname: 'color1', link: '../map'},
        {name: 'MEDCOM360', icon: 'content/images/icons/medcomchart.svg', classname: 'color2', link: '../medcom360'},
        {name: 'BHEATC-Summary', icon: 'content/images/icons/caper.svg', classname: 'color3', link: ''},
        {name: 'BMI IRIS Metric', icon: 'content/images/icons/inpatient.svg', classname: 'color4', link: ''},
        {name: 'CAPER Reports', icon: 'content/images/icons/eod.svg', classname: 'color5', link: ''},
        {name: 'DQMCP Program Metrics', icon: 'content/images/icons/ipsr.svg', classname: 'color6', link: ''},
        {name: 'End of Day Compliance Summary Metric', icon: 'content/images/icons/eodcompliance.svg', classname: 'color7', link: ''},
        {name: 'Inpatient Professional Service Rounds Metric', icon: 'content/images/icons/inpatient.svg', classname: 'color8', link: ''},
        {name: 'MAPR Data Quality Measures Metric', icon: 'content/images/icons/quality.svg', classname: 'color1', link: ''},
        {name: 'R299/SIDR Report', icon: 'content/images/icons/sidrreport.svg', classname: 'color2', link: ''},
        {name: 'Commanders Corner', icon: 'content/images/icons/commander.svg', classname: 'color3', link: ''},

  ]



//restricted apps
$http.get("sandbox/userappinfo.js").
	then(function(responce){

		
		$scope.username = responce.data;
		$scope.restrictedapps = responce.data.UserApp;








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

      // objectArray.forEach(function(object, index){
      //   object.unrestrict = restrictedtemplate[index];
      // })


     $scope.test = "true";

    
  }

	});
	
	// console.log(objectArray.length)
	  // return objectArray;	
};

addColor($scope.restrictedapps, $scope.colors, $scope.unrestricteddata);
 console.log($scope.restrictedapps);


	})



})

})


  // $scope.restricted =[];






// this.future = [
//     //{ name: 'Behavioral Health', dataName: 'behavioralHealth', icon: 'bh360', linkValue: 'metric-dashboard', iconColorClass: 'colorMed' },
//     { name: 'Public Health', dataName: 'publicHealth', icon: 'ph360', linkValue: 'metric-dashboard', iconColorClass: 'colorMed' },
//     //{ name: 'Access To Care', dataName: 'accessToCare', icon: 'caduceus1', linkValue: 'metric-dashboard', iconColorClass: 'color4' },
//     //{ name: 'Beneficiary Health', dataName: 'beneficiaryHealth', icon: 'family21', linkValue: 'metric-dashboard', iconColorClass: 'color5' },
//     { name: 'Coding', dataName: 'coding', icon: 'numbered10', linkValue: 'metric-dashboard', iconColorClass: 'color1' },
//     //{ name: 'Data Processing', dataName: 'dataProcessing', icon: 'monitor7', linkValue: 'metric-dashboard', iconColorClass: 'color5' },
//     { name: 'Data Quality', dataName: 'dataQuality', icon: 'positive3', linkValue: 'metric-dashboard', iconColorClass: 'color2' },
//     //{ name: 'Performance', dataName: 'performance', icon: 'ascendant6', linkValue: 'metric-dashboard', iconColorClass: 'color4' },
//     //{ name: 'Utilization', dataName: 'utilization', icon: 'circle54', linkValue: 'metric-dashboard', iconColorClass: 'color3' },
//   { name: 'CHUP', dataName: 'chup', icon: 'ascendant6', linkValue: 'metric-dashboard', iconColorClass: 'color3' },
//   { name: 'PAWS', dataName: 'paws', icon: 'circle54', linkValue: 'metric-dashboard', iconColorClass: 'color4' },
//     ];