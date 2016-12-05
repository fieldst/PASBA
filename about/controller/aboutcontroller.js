app.controller('aboutuscontroller', function($scope, $compile, $timeout) {
  // $scope.introimage = 'dmrpc/images/dmrpc-intro.svg',
  $scope.pageimage = {


              directorimage : "content/images/braxton.png",
              logo : "content/images/PASBA-new-logo1.png",
              dataquality : "about/images/dqlight.svg",
              coding: "about/images/codinglight.svg",
              development: "about/images/developmentlight.svg",
              dataanalysis: "about/images/dataanalysislight.svg",
              datainput: "about/images/datainputlight.svg",

         }

        $scope.title = {
              leadership : "Leadership",
              aboutus : "About Us",
              pad : "PAD Deployed Medical Documentation",
              regulate : "Medical Regulating",
              sidr : "Instructions for proccessing deployed SIDR",
              contactus : "Contact Us"
        }

        $scope.general = [

              {contactname : 'Access Request', contactemail : 'usarmy.jbsa.medcom-pasba.list.pasba-access-request@mail.mil', fax : ' 221-2046 '},
              {contactname : 'CAPER', contactemail : 'usarmy.jbsa.medcom-pasba.list.caper@mail.mil', fax : ' 221-2046'},
              {contactname : 'Data Analysis ', contactemail : 'usarmy.jbsa.medcom-pasba.list.pasba-data-analysis@mail.mil ', fax : '221-0263'},
              {contactname : 'Data Quality ', contactemail : 'usarmy.jbsa.medcom-pasba.list.pasba-data-quality@mail.mil ', fax : ' 221-2046'},
              {contactname : 'Help Desk Restricted Web site ', contactemail : 'usarmy.jbsa.medcom-pasba.list.pasba-restricted-web-site@mail.mil', fax : '221-2046'},
              {contactname : 'PAD Deployment ', contactemail : 'usarmy.jbsa.medcom-pasba.list.pad-deployment@mail.mil', fax : '221-2046'},
              {contactname : 'PASBA Director', contactemail : 'usarmy.jbsa.medcom-pasba.list.pasba-director@mail.mil', fax : '221-0579'},
              {contactname : 'R299', contactemail : 'usarmy.jbsa.medcom-pasba.list.R299-help@mail.mil', fax : '221-1606'},
              {contactname : 'Record Request', contactemail : 'usarmy.jbsa.medcom-pasba.list.pasba-record-request@mail.mil', fax : '221-2046'},
              {contactname : 'SIDR', contactemail : 'usarmy.jbsa.medcom-pasba.list.pasba-sidr@mail.mil', fax : '221-1606'},
              

        ]

        $scope.functional = [
              {contactname : 'CARA', contactemail : 'usarmy.jbsa.medcom-pasba.list.CARA@mail.mil', fax : '221-9016'},
              {contactname : 'ClinOps Metrics ', contactemail : 'usarmy.jbsa.medcom-pasba.list.pasba-data-analysis@mail.mil', fax : ' 221-2046 '},
              {contactname : 'Coder Manager', contactemail : 'usarmy.jbsa.medcom-pasba.list.pasba-coder-manager@mail.mil', fax : ' '},
              {contactname : 'Coding', contactemail : 'usarmy.jbsa.medcom-pasba.list.pasba-coding@mail.mil ', fax : '221-2046'},
              {contactname : 'Coding Help Desk ', contactemail : 'usarmy.jbsa.medcom-pasba.list.pasba-chd-help@mail.mil', fax : ' 221-2046'},
              {contactname : 'DART', contactemail : 'usarmy.jbsa.medcom-pasba.list.pasba-data-analysis@mail.mil', fax : '  '},
              {contactname : 'Data Use Agreements', contactemail : 'usarmy.jbsa.medcom-pasba.list.pasba-data-use-agreements@mail.mil', fax : ''},
              {contactname : 'DQMC', contactemail : 'usarmy.jbsa.medcom-pasba.list.pasba-data-quality@mail.mil', fax : '221-2046 '},
              {contactname : 'E&M/TCU', contactemail : 'usarmy.jbsa.medcom-pasba.list.pasba-data-analysis@mail.mil', fax : ''},
              {contactname : 'ORT3', contactemail : 'usarmy.jbsa.medcom-pasba.list.pasba-data-analysis@mail.mil', fax : ''},
              {contactname : 'Provider Productivity', contactemail : 'usarmy.jbsa.medcom-pasba.list.pasba-data-analysis@mail.mil', fax : ''},
              {contactname : 'WISPR', contactemail : 'usarmy.jbsa.medcom-pasba.list.WISPR@mail.mil', fax : '221-2046'},
              {contactname : 'WTU', contactemail : 'usarmy.jbsa.medcom-pasba.list.pasba-data-analysis@mail.mil', fax : ''},
        ]

        $scope.technical = [
              {contactname : 'PASBA Service Desk ', contactemail : 'usarmy.jbsa.medcom-pasba.list.pasba-service-desk@mail.mil', fax : '221-2046'}
        ]

        $scope.feedback = [
              {contactname : 'PASBA Web site', contactemail : 'usarmy.jbsa.medcom-pasba.list.pasba-service-desk@mail.mil', fax : '221-2046'}
        ]
        

        // $scope.documents = {
        //                                               recordsrequest : "dmrpc/documents/AuthorizationforDisclosureofMedicalorDentalInformation(DD2870).pdf"
        // }
 
                

 

});