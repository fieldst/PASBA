app.controller('dqcontroller', function($scope, $compile, $timeout, $location) {
  

  $scope.isActive = function(destination){
    return destination === $location.path();
  }





  $scope.pageimage = {


  						introimage : "dq/images/dataquality.svg",
  						dqmcprogram : "dq/images/dqmc.svg",
              certified  : "dq/images/certification.svg",
              regulations : "dq/images/regulations.svg",
              guildlines : "dq/images/guildlines.svg",
              outpatients : "dq/images/outpatient.svg",
              tracking : "dq/images/tracking.svg",
              meeting : "dq/images/Meeting.svg",
              faq : "dq/images/faq.svg",


					}

	$scope.title = {
						home : "Data Quality",
						dqmcprogram : "Data Quality Management Control (DQMC) Program",
						policies : "DQMC Policies and Regulations",
            guildlines : "Data Quality Guidelines",
						regulate : "Medical Regulating",
						sidr : "Instructions for proccessing deployed SIDR",
            faq : "Data Quality Frequently Asked Questions",
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

  //sub nav
  

  $scope.References = [
        {name: 'Acronyms and Glossary', link: '../quality/resources/DQ_AcronymsGlossary.pdf'},
        {name: 'Tricare-Data Quality',  link: 'http://tricare.osd.mil/ocfo/mcfs/dqmcp.cfm'},
        {name: 'Access to Care/AKO', link: 'https://www.us.army.mil/suite/page/574226'},
        {name: 'TRICARE MEPRS', link: 'http://www.meprs.info/index.cfm'},
        {name: 'TRICARE Operations Center', link: 'https://mhs.health.mil/toc/'},
        
        
  ]

  $scope.Guildance = [
        {name: 'M2 Standard Report for DQ', link: '../quality/resources/DQ_M2StandardReport.pdf'},
        {name: 'Sampling Technique', link: '../quality/resources/DQ_SamplingTechnique.pdf'},    
        
  ]

  $scope.Templates = [
        {name: 'DQ Cdr Statement FY16', link: '../quality/resources/DQCdrsStatementFY16.docx'},
        {name: 'DQ Review List FY16', link: '../quality/resources/DQReviewListFY16.docx'},
        {name: 'DQ Manager letter of appt', link: '../quality/resources/DQMgr_ApptLetter.doc'}, 
        {name: 'DQ Team Member letter of appt.', link: '../quality/resources/DQTeamMbr_ApptLetter.doc'},    
        
  ]

//need new emails
  $scope.POC = [
        {name: 'Chief, DQ Section', link: 'mailto:carolyn.m.enloe.civ@mail.mil'},
        {name: 'RHC-Europe, West & RHC-Central', link: 'mailto:jesse.r.hernandez4.civ@mail.mil'},    
        
  ]

  $scope.Training = [
        {name: 'UBO Training', link: 'http://www.tricare.mil/ocfo/mcfs/ubo/learning_center/ubo101.cfm'},
        {name: 'AMEDD Virtual Library', link: 'https://medlinet.amedd.army.mil/healthmg.htm'},    
        {name: 'Univ. of the Health Sciences', link: 'http://www.usuhs.mil'},  
        {name: 'WISDOM', link: 'http://tricare.mil/tma/dhcape/data/wisdom.aspx'},  
         
  ]

  $scope.Others = [
        {name: 'Comman Mgmt. Systems', link: 'https://cms.mods.army.mil/cms'},
        {name: 'Managed Care/AKO', link: 'https://www.us.army.mil/suite/page/336433'},
        {name: 'PAD/AKO', link: 'https://www.us.army.mil/suite/page/419354'},
        {name: 'Pt. -Ctrd. Medical Homes', link: 'https://mitc.amedd.army.mil/sites/Communities/APCMHRC/Pages/default.aspx'},        
        
  ]

  // $scope.navigation = [
  //       {name: 'Deployment Guide Home', link: 'dataquality'},
  //       {name: 'DQMC Program', link: 'dqmcprogram'},
  //       {name: 'DQ Policy/Regs', link: 'dqmcpolicies'},
  //       {name: 'DQ Guidelines', link: 'dqguidelines'},
  //       {name: 'DQMC Program Metrics', link: 'dqprogrammetrics'},
  //       {name: "DQMC User's Manual", link: '../quality/resources/dqmcpUserGuide.pdf'},
  //       {name: "DQMC User's Manual", link: '../quality/resources/FY16DQMCPUsersGuide0616.pdf'},
  //       {name: 'DQ Managers List', link: '../quality/resources/dqMgrList.xls'},
  //       {name: 'DQ FAQ', link: 'faq'}

  // ]

});
