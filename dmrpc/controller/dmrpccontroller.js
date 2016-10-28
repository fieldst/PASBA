app.controller('dmrpccontroller', function($scope, $compile, $timeout) {
  // $scope.introimage = 'dmrpc/images/dmrpc-intro.svg',
  $scope.pageimage = {


  						introimage : "dmrpc/images/dmrpc-intro.svg",
  						instructions : "dmrpc/images/instructions.svg",
  						pad : "dmrpc/images/pad.svg",
  						regulate : "dmrpc/images/regulate.svg"


					}

	$scope.title = {
						home : "Deployment Guilde Home",
						instruction : "Records Request Instructions",
						pad : "PAD Deployed Medical Documentation",
						regulate : "Medical Regulating"
	}

	$scope.documents = {
							recordsrequest : "dmrpc/documents/AuthorizationforDisclosureofMedicalorDentalInformation(DD2870).pdf"
	}
 
  		
  

});
