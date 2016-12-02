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
              compliance : "codingsection/images/compliance.svg",
              education: 'codingsection/images/education.svg',
              professional: 'codingsection/images/professional.svg'

					}

	$scope.title = {
						home : "HIMS and Coding",
						guidelines : "Coding Guidelines",
						sources : "Data Sources",
						regulate : "Medical Regulating",
						sharing : "Data Sharing Agreements",
            compliance : "Coding Compliance",
            education: "Education and Training",
            professional: "Coding Professional Development"
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

  $scope.training2016 = [
        {date: 'September 2016', topic: 'September 2016 Presentation ', link: '../coding/PsychNeuroBehavioralSept2016.pdf'},
        {date: 'July 2016', topic: 'July 2016 Presentation', link: '../coding/EvalandMgmtCodingJuly2016Final.pdf'},
        {date: 'April 2016 ', topic: 'April 2016 Presentation', link: '../coding/April2016PhyOccTherapy.pdf'},
        {date: 'February 2016', topic: 'February 2016 Clinical Pharmacy', link: '../coding/Feb2016ClinicalPharmacy.pdf'},
        {date: 'January 2016', topic: 'Highlights October 2015 Common Errors', link: '../coding/ICD10CMHighlightsOct2015ComErrs26Jan2016.pdf'},
        
]

$scope.training2015 = [

        {date: 'October 2015', topic: 'ICD-10-CM Spec Coding Guide Infectious Disease', link: '../coding/VTC1510/ICD10CMInfectiousDiseaseNeoplasms.pdf'},
        {date: 'September 2015 ', topic: 'ICD-10 CM/PCS Orthopedic Coding', link: '../coding/VTC1509/ICD10-Orthopedics.pptx'},
        {date: 'August 2015', topic: 'ICD-10-CM SpecialtyCodingGuide_BH', link: '../coding/VTC1508/ICD10CMSpecCodGuidBH.pdf'},
        {date: 'July 2015', topic: 'Coding TBI', link: '../coding/VTC1507/TBI.ppt'},
        {date: 'June 2015', topic: 'ICD-10-CM Spec Coding Guide Infectious Disease', link: '../coding/VTC1506/MHSProfServicesMedCodingGuidelines.pdf'},
        {date: 'May 2015', topic: 'Preventive Medicine & Immunization', link: '../coding/VTC1504/PreventiveMedandImmunizations.pdf'},
        {date: 'April 2015 ', topic: 'ICD-10-CM Spec Coding Guide Infectious Disease', link: '../coding/VTC1505/ICD10CMGeneralCodingGuidelines.ppt'},
        {date: 'March 2015', topic: 'ICD-10-CM Conventions', link: '../coding/VTC1503/ICD10CMConventions.ppt'},
        {date: 'February 2015', topic: 'Obstetric Services', link: '../coding/VTC1502/ObstetricServices.ppt'},


]


$scope.training2014 = [
        {date: 'September 2014', topic: 'Behavioral Health Coding', link: '../coding/VTC1403/BHCoding1403.ppt'},
        {date: 'May 2014 ', topic: 'Dermatology and ICD10 PCS', link: '../coding/VTC1405/Dermatology1405.ppt'},
        {date: 'March 2014', topic: 'Behavioral Health Coding', link: '../coding/VTC1403/BHCoding1403.ppt'},

]

$scope.training2013 = [
        {date: 'November 2013', topic: 'OB GYN Services', link: '../coding/VTC1311/OBGYN1311.ppt'},
        {date: 'August 2013', topic: 'Endocrine System', link: '../coding/VTC1308/EndocrineSyst1308.ppt'},
        {date: 'June 2013', topic: 'Cardiology', link: '../coding/VTC1306/Cardiology1306.ppt'},
        {date: 'April 2013', topic: 'Chiropractic and Accupuncture', link: '../coding/VTC1304/Chiropractic1304.ppt'},
        {date: 'March 2013', topic: 'Behavioral Health Coding 2013 ', link: '../coding/VTC1303/BehavioralHealth1303.ppt'},
        {date: 'February 2013', topic: 'Evaluation & Management ', link: '../coding/VTC1302/EvalMgmt1302.ppt'},
        {date: 'January 2013', topic: 'CPT Updates 2013', link: '../coding/VTC1301/CPTUpdates2013.ppt'},

        ]

$scope.training2012 = [
        {date: 'November 2012 ', topic: 'External Causes of Injury ', link: '../coding/VTC1211/ExtCausesInjury1211.ppt'},
        {date: 'September 2012', topic: 'Dermatology Coding', link: '../coding/VTC1209/Dermatology1209.ppt'},
        {date: 'August 2012', topic: 'Evaluation and Management ', link: '../coding/VTC1208/EM_1208.ppt'},
        {date: 'June 2012 ', topic: 'Outpatient Fracture Care', link: '../coding/VTC1206/OPDFractureCare1206.ppt'},
        {date: 'April 2012', topic: 'Resp., GI & Urinary Endoscopies', link: '../coding/VTC1202/PTOT_1202.ppt'},
        {date: 'February 2012', topic: 'Evaluation and Management', link: '../coding/VTC1208/EM_1208.ppt'},
        {date: 'January 2012', topic: '2012 CPT Updates', link: '../coding/VTC1201/CPTUpdates1201.ppt'},

        ]

$scope.training2011 = [
        {date: 'October 2011', topic: '2012 ICD9-CM Updates', link: '../coding/VTC1110/ICD9Updates2012.ppt'},
        {date: 'August 2011', topic: 'ICD10 Updates and TBI Coding', link: '../coding/VTC1108/TBI1108.ppt'},
        {date: 'July 2011', topic: 'Obstetric Services and ICD10 Overview', link: '../coding/VTC1107/OBServices1107.ppt'},
        {date: 'June 2011', topic: 'Mental Health Coding and ICD10 Overview', link: '../coding/VTC1106/MentalHealth1106.ppt'},
        {date: 'March 2011', topic: 'Coding Guidelines and ICD10 Overview', link: '../coding/VTC1103/CodingGuideUpdate1103.ppt'},
        {date: 'February 2011', topic: 'Chiropractice Coding', link: '../coding/VTC1102/ChiropracticeCoding1102.ppt'},

        ]

        $scope.training2010 = [
        {date: 'November 2010', topic: 'Audiology', link: '../coding/VTC1011/AudiologyPresentation2.ppt'},
        {date: 'October 2010 ', topic: 'Pain Mgmt.& ICD9-CM to ICD10', link: '../coding/VTC1010/PainManagement.ppt'},
  ]

  $scope.newsletter2013 = [
        {date: 'July 2013', volume: 'Vol II Issue 1', link: '../coding/Newsletter/Vol2_Issue1.pdf'},
  ]

  $scope.newsletter2012 = [
        {date: 'December 2012', volume: 'Vol I Issue 2', link: '../coding/Newsletter/Vol1_Issue2.pdf'},
        {date: 'November 2012', volume: 'Vol I Issue 1', link: '../coding/Newsletter/Vol1_Issue1.pdf'},
  ]




// accordion

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
  }
}

});



