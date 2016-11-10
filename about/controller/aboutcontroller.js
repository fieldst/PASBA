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
                                                sidr : "Instructions for proccessing deployed SIDR"
        }

        // $scope.documents = {
        //                                               recordsrequest : "dmrpc/documents/AuthorizationforDisclosureofMedicalorDentalInformation(DD2870).pdf"
        // }
 
                

 

});