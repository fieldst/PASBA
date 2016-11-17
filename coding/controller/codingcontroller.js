app.controller('codingcontroller', function($scope, $compile, $timeout, $location) {
  // $scope.introimage = 'dmrpc/images/dmrpc-intro.svg',

  

  $scope.isActive = function(destination){
    return destination === $location.path();
  }

  $scope.pageimage = {


  						introimage : "coding/images/coding-intro.svg",
  						leveling : "coding/images/level.svg",
  						guildelines: "coding/images/guildelines.svg",
  						sharing : "conding/images/share.svg",
              helpurl: "../army/CHDinquiry/HelpDeskInquiry.asp",

					}

	$scope.title = {
						home : "HIMS and Coding",
						guidelines : "Coding Guidelines",
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
