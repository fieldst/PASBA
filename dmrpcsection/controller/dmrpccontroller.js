app.controller('dmrpccontroller', function($scope, $compile, $timeout, $location) {
  // $scope.introimage = 'dmrpc/images/dmrpc-intro.svg',

  $scope.isActive = function(destination){
    return destination === $location.path();
  }


  $scope.pageimage = {


  						introimage : "dmrpcsection/images/dmrpc-intro.svg",
  						instructions : "dmrpcsection/images/instructions.svg",
  						pad : "dmrpcsection/images/pad.svg",
  						regulate : "dmrpcsection/images/regulate.svg",
  						sidr : "dmrpcsection/images/sidr.svg"


					}

	$scope.title = {
						home : "Deployment Guilde Home",
						instruction : "Records Request Instructions",
						pad : "PAD Deployed Medical Documentation",
						regulate : "Medical Regulating",
						sidr : "Instructions for proccessing deployed SIDR"
	}

	// $scope.documents = {
	// 						recordsrequest : "dmrpc/documents/AuthorizationforDisclosureofMedicalorDentalInformation(DD2870).pdf"
	// }
 
  		 $scope.documents = [
  
        {name: 'Records request', link: 'dmrpcsection/documents/AuthorizationforDisclosureofMedicalorDentalInformation(DD2870).pdf'},
        {name: 'DA FORM 3647', link: '../deployment/da3647.pdf'},
        {name: 'ITRCS Data Dictionary', link: '../deployment/DA3647DDv1_1.pdf'},
        {name: 'Page 1 of DA Form 2985', link: '../deployment/SA_refresher060126.ppt'},
        {name: 'A&C Data Dictionary', link: '../deployment/DA2985p1DDv1_1.pdf'},

  ]

  $scope.navigation = [
        {name: 'Deployment Guide Home', link: 'dmrpc'},
        {name: 'Records Request Instructions', link: 'recordsrequest'},
        {name: 'PAD Policies and Guidance', link: 'padpoliciesandguidance'},
        {name: 'Medical Regulating', link: 'medicalregulating'},
        {name: 'SIDR', link: 'sidr'}
  ]


   $scope.references = [
        {name: 'NARA', link: 'https://www.archives.gov/'},
        {name: 'NPRC', link: 'https://www.archives.gov/st-louis'},
  ]
  

});
