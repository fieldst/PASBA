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

  $scope.training = [
        {date: 'September 2016', topic: 'September 2016 Presentation ', link: '../coding/PsychNeuroBehavioralSept2016.pdf'},
        {date: 'July 2016', topic: 'July 2016 Presentation', link: '../coding/EvalandMgmtCodingJuly2016Final.pdf'},
        {date: 'April 2016 ', topic: 'April 2016 Presentation', link: '../coding/April2016PhyOccTherapy.pdf'},
        {date: 'February 2016', topic: 'February 2016 Clinical Pharmacy', link: '../coding/Feb2016ClinicalPharmacy.pdf'},
        {date: 'January 2016', topic: 'Highlights October 2015 Common Errors', link: '../coding/ICD10CMHighlightsOct2015ComErrs26Jan2016.pdf'},
        {date: 'October 2015', topic: 'ICD-10-CM Spec Coding Guide Infectious Disease', link: '../coding/VTC1510/ICD10CMInfectiousDiseaseNeoplasms.pdf'},
        {date: 'September 2015 ', topic: 'ICD-10 CM/PCS Orthopedic Coding', link: '../coding/VTC1509/ICD10-Orthopedics.pptx'},
        {date: 'August 2015', topic: 'ICD-10-CM SpecialtyCodingGuide_BH', link: '../coding/VTC1508/ICD10CMSpecCodGuidBH.pdf'},
        {date: 'July 2015', topic: 'Coding TBI', link: '../coding/VTC1507/TBI.ppt'},
        {date: 'June 2015', topic: 'ICD-10-CM Spec Coding Guide Infectious Disease', link: '../coding/VTC1506/MHSProfServicesMedCodingGuidelines.pdf'},
        {date: 'May 2015', topic: 'ICD-10-CM Spec Coding Guide Infectious Disease', link: '../coding/VTC1505/ICD10CMGeneralCodingGuidelines.ppt'},
  ]
  

});
