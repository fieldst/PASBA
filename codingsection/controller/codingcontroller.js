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
              professional: 'codingsection/images/professional.svg',
              organization: 'codingsection/images/organization.svg',
              references: 'codingsection/images/references.svg'

					}

	$scope.title = {
						home : "Health Information Management",
						guidelines : "Coding Guidelines",
						sources : "Data Sources",
						regulate : "Medical Regulating",
						sharing : "Data Sharing Agreements",
            compliance : "Coding Compliance",
            education: "Education and Training",
            professional: "Coding Professional Development",
            organization: 'Coding Professional Organizations',
            references: 'References'
	}

	// $scope.documents = {
	// 						recordsrequest : "dmrpc/documents/AuthorizationforDisclosureofMedicalorDentalInformation(DD2870).pdf"
	// }
 
  		 $scope.documents = [
  
        {name: 'Records Request', link: 'dmrpcsection/documents/AuthorizationforDisclosureofMedicalorDentalInformation(DD2870).pdf'},
        {name: 'DA FORM 3647', link: '../deployment/DeployMedRecGuidance.pdf'},
        {name: 'ITRCS Data Dictionary', link: '../deployment/DeployMedRecComplete.pdf'},
        {name: 'Page 1 of DA Form 2985', link: '../deployment/DA2985p1.pdf'},
        {name: 'A&C Data Dictionary', link: '../deployment/DA2985p1DDv1_1.pdf'},

  ]

  $scope.training2016 = [
        {date: 'September 2016', topic: 'Psychological and Neuropsychological Testing/Behavioral Health Updates ', link: '../coding/PsychNeuroBehavioralSept2016.pdf', class: 'info'},
        {date: 'July 2016', topic: 'Evaluation and Management Coding - E/M Leveling Tool', link: '../coding/EvalandMgmtCodingJuly2016Final.pdf', class: 'info'},
        {date: 'April 2016 ', topic: 'PT/OT Documentation and Coding', link: '../coding/April2016PhyOccTherapy.pdf', class: 'info'},
        {date: 'February 2016', topic: 'Clinical Pharmacy', link: '../coding/Feb2016ClinicalPharmacy.pdf', class: 'info'},
        {date: 'January 2016', topic: 'Highlights on ICD-10-CM/PCS & October 2015 Audit Common Errors', link: '../coding/ICD10CMHighlightsOct2015ComErrs26Jan2016.pdf', class: 'info'},
        
]

$scope.training2015 = [

        {date: 'October 2015', topic: 'ICD-10-CM Spec Coding Guide Infectious Disease', link: '../coding/VTC1510/ICD10CMInfectiousDiseaseNeoplasms.pdf', class: 'info'},
        {date: 'September 2015 ', topic: 'ICD-10 CM/PCS Orthopedic Coding', link: '../coding/VTC1509/ICD10-Orthopedics.pptx', class: 'powerpoint'},
        {date: 'August 2015', topic: 'ICD-10-CM SpecialtyCodingGuide_BH', link: '../coding/VTC1508/ICD10CMSpecCodGuidBH.pdf', class: 'info'},
        {date: 'July 2015', topic: 'Coding TBI', link: '../coding/VTC1507/TBI.ppt', class: 'powerpoint'},
        {date: 'June 2015', topic: 'ICD-10-CM Spec Coding Guide Infectious Disease', link: '../coding/VTC1506/MHSProfServicesMedCodingGuidelines.pdf', class: 'info'},
        {date: 'May 2015', topic: 'Preventive Medicine & Immunization', link: '../coding/VTC1504/PreventiveMedandImmunizations.pdf', class: 'info'},
        {date: 'April 2015 ', topic: 'ICD-10-CM Spec Coding Guide Infectious Disease', link: '../coding/VTC1505/ICD10CMGeneralCodingGuidelines.ppt', class: 'powerpoint'},
        {date: 'March 2015', topic: 'ICD-10-CM Conventions', link: '../coding/VTC1503/ICD10CMConventions.ppt', class: 'powerpoint'},
        {date: 'February 2015', topic: 'Obstetric Services', link: '../coding/VTC1502/ObstetricServices.ppt', class: 'powerpoint'},


]


$scope.training2014 = [
        {date: 'September 2014', topic: 'Behavioral Health Coding', link: '../coding/VTC1403/BHCoding1403.ppt', class: 'powerpoint'},
        {date: 'May 2014 ', topic: 'Dermatology and ICD10 PCS', link: '../coding/VTC1405/Dermatology1405.ppt', class: 'powerpoint'},
        {date: 'March 2014', topic: 'Behavioral Health Coding', link: '../coding/VTC1403/BHCoding1403.ppt', class: 'powerpoint'},

]

$scope.training2013 = [
        {date: 'November 2013', topic: 'OB GYN Services', link: '../coding/VTC1311/OBGYN1311.ppt', class: 'powerpoint'},
        {date: 'August 2013', topic: 'Endocrine System', link: '../coding/VTC1308/EndocrineSyst1308.ppt', class: 'powerpoint'},
        {date: 'June 2013', topic: 'Cardiology', link: '../coding/VTC1306/Cardiology1306.ppt', class: 'powerpoint'},
        {date: 'April 2013', topic: 'Chiropractic and Accupuncture', link: '../coding/VTC1304/Chiropractic1304.ppt', class: 'powerpoint'},
        {date: 'March 2013', topic: 'Behavioral Health Coding 2013 ', link: '../coding/VTC1303/BehavioralHealth1303.ppt', class: 'powerpoint'},
        {date: 'February 2013', topic: 'Evaluation & Management ', link: '../coding/VTC1302/EvalMgmt1302.ppt', class: 'powerpoint'},
        {date: 'January 2013', topic: 'CPT Updates 2013', link: '../coding/VTC1301/CPTUpdates2013.ppt', class: 'powerpoint'},

        ]

$scope.training2012 = [
        {date: 'November 2012 ', topic: 'External Causes of Injury ', link: '../coding/VTC1211/ExtCausesInjury1211.ppt', class: 'powerpoint'},
        {date: 'September 2012', topic: 'Dermatology Coding', link: '../coding/VTC1209/Dermatology1209.ppt', class: 'powerpoint'},
        {date: 'August 2012', topic: 'Evaluation and Management ', link: '../coding/VTC1208/EM_1208.ppt', class: 'powerpoint'},
        {date: 'June 2012 ', topic: 'Outpatient Fracture Care', link: '../coding/VTC1206/OPDFractureCare1206.ppt', class: 'powerpoint'},
        {date: 'April 2012', topic: 'Resp., GI & Urinary Endoscopies', link: '../coding/VTC1202/PTOT_1202.ppt', class: 'powerpoint'},
        {date: 'February 2012', topic: 'Evaluation and Management', link: '../coding/VTC1208/EM_1208.ppt', class: 'powerpoint'},
        {date: 'January 2012', topic: '2012 CPT Updates', link: '../coding/VTC1201/CPTUpdates1201.ppt', class: 'powerpoint'},

        ]

$scope.training2011 = [
        {date: 'October 2011', topic: '2012 ICD9-CM Updates', link: '../coding/VTC1110/ICD9Updates2012.ppt', class: 'powerpoint'},
        {date: 'August 2011', topic: 'ICD10 Updates and TBI Coding', link: '../coding/VTC1108/TBI1108.ppt', class: 'powerpoint'},
        {date: 'July 2011', topic: 'Obstetric Services and ICD10 Overview', link: '../coding/VTC1107/OBServices1107.ppt', class: 'powerpoint'},
        {date: 'June 2011', topic: 'Mental Health Coding and ICD10 Overview', link: '../coding/VTC1106/MentalHealth1106.ppt', class: 'powerpoint'},
        {date: 'March 2011', topic: 'Coding Guidelines and ICD10 Overview', link: '../coding/VTC1103/CodingGuideUpdate1103.ppt', class: 'powerpoint'},
        {date: 'February 2011', topic: 'Chiropractice Coding', link: '../coding/VTC1102/ChiropracticeCoding1102.ppt', class: 'powerpoint'},

        ]

        $scope.training2010 = [
        {date: 'November 2010', topic: 'Audiology', link: '../coding/VTC1011/AudiologyPresentation2.ppt', class: 'powerpoint'},
        {date: 'October 2010 ', topic: 'Pain Mgmt.& ICD9-CM to ICD10', link: '../coding/VTC1010/PainManagement.ppt', class: 'powerpoint'},
  ]

  $scope.newsletter2013 = [
        {date: 'July 2013', volume: 'Vol II Issue 1', link: '../coding/Newsletter/Vol2_Issue1.pdf', class: 'info'},
  ]

  $scope.newsletter2012 = [
        {date: 'December 2012', volume: 'Vol I Issue 2', link: '../coding/Newsletter/Vol1_Issue2.pdf', class: 'info'},
        {date: 'November 2012', volume: 'Vol I Issue 1', link: '../coding/Newsletter/Vol1_Issue1.pdf', class: 'info'},
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



