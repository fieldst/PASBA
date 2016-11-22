app.controller('dataanalysiscontroller', function($scope, $compile, $timeout, $location) {
  // $scope.introimage = 'dmrpc/images/dmrpc-intro.svg',

  

  $scope.isActive = function(destination,destinationtwo){
    return destination === $location.path();
  }

  $scope.pageimage = {


  						introimage : "dataanalysis/images/da-intro.svg",
  						support : "dataanalysis/images/datasupport.svg",
  						
  						sharing : "dataanalysis/images/share.svg",
  						


					}

	$scope.title = {
						home : "Data Analysis",
						support : "Data Analysis Support",
						sources : "Data Sources",
						regulate : "Medical Regulating",
						sharing : "Data Sharing Agreements"
	}

	// $scope.documents = {
	// 						recordsrequest : "dmrpc/documents/AuthorizationforDisclosureofMedicalorDentalInformation(DD2870).pdf"
	// }
 
  		 $scope.documents = [
  
        {name: 'Records Request', link: 'dmrpc/documents/AuthorizationforDisclosureofMedicalorDentalInformation(DD2870).pdf'},
        {name: 'DA FORM 3647', link: '../deployment/DeployMedRecGuidance.pdf'},
        {name: 'ITRCS Data Dictionary', link: '../deployment/DeployMedRecComplete.pdf'},
        {name: 'Page 1 of DA Form 2985', link: '../deployment/SA_refresher060126.ppt'},
        {name: 'A&C Data Dictionary', link: 'http://www.apd.army.mil/'},

  ]
  

});
