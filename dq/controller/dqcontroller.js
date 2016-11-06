app.controller('dqcontroller', function($scope, $compile, $timeout) {
  // $scope.introimage = 'dmrpc/images/dmrpc-intro.svg',
  $scope.pageimage = {


  						introimage : "dq/images/dataquality.svg",
  						instructions : "dmrpc/images/instructions.svg",
  						pad : "dmrpc/images/pad.svg",
  						regulate : "dmrpc/images/regulate.svg",
  						sidr : "dmrpc/images/sidr.svg"


					}

	$scope.title = {
						home : "Data Quality",
						instruction : "Records Request Instructions",
						pad : "PAD Deployed Medical Documentation",
						regulate : "Medical Regulating",
						sidr : "Instructions for proccessing deployed SIDR"
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
