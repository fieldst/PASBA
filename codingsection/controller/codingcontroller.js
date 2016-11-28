app.controller('codingcontroller', function($scope, $compile, $timeout, $location) {
  // $scope.introimage = 'dmrpc/images/dmrpc-intro.svg',

  

  $scope.isActive = function(destination){
    return destination === $location.path();
  }

  $scope.pageimage = {


  						introimage : "codingsection/images/coding-intro.svg",
  						leveling : "codingsection/images/level.svg",
  						guildelines: "codingsection/images/guildelines.svg",
  						sharing : "condingsection/images/share.svg",
              helpurl: "../army/CHDinquiry/HelpDeskInquiry.asp",
              compliance : "codingsection/images/compliance.svg"

					}

	$scope.title = {
						home : "HIMS and Coding",
						guidelines : "Coding Guidelines",
						sources : "Data Sources",
						regulate : "Medical Regulating",
						sharing : "Data Sharing Agreements",
            compliance : "Coding Compliance"
	}

	// $scope.documents = {
	// 						recordsrequest : "dmrpc/documents/AuthorizationforDisclosureofMedicalorDentalInformation(DD2870).pdf"
	// }
 
  		 $scope.documents = [
  
        {name: 'Records Request', link: 'dmrpcsection/documents/AuthorizationforDisclosureofMedicalorDentalInformation(DD2870).pdf'},
        {name: 'DA FORM 3647', link: '../deployment/DeployMedRecGuidance.pdf'},
        {name: 'ITRCS Data Dictionary', link: '../deployment/DeployMedRecComplete.pdf'},
        {name: 'Page 1 of DA Form 2985', link: '../deployment/SA_refresher060126.ppt'},
        {name: 'A&C Data Dictionary', link: 'http://www.apd.army.mil/'},

  ]
  

});
