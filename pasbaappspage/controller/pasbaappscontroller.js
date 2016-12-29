app.controller('pasbaappsinfocontroller', function($scope, $compile, $timeout, $http, $routeParams, usSpinnerService, $location, $animate, $rootScope) {
  $scope.testing = 'test';

   $scope.nonrestricted = [
  
        {name: 'BHEATC - Summary', icon: 'content/images/icons/caper.svg', info: 'Compliance in Enhanced Access to Care (EATC) in BH and PC clinics.', link: '#/viewapps', background: '#7F0000', target: '../DataAnalysis/defaultBHSummary.asp'},
        {name: 'CAPER Reports', icon: 'content/images/icons/eod.svg', info: 'These reports help MTFs track daily data transmittals, receipt and data processing.', link: '#/viewapps', background: '#131340', target: '../caperreports'},
        {name: 'DQMCP Reports', icon: 'content/images/icons/ipsr.svg', info: 'Survey results from the DQMCP application includes monthly and YTD reports', link: '#/viewapps', background: '#201040', target: '../mrDQMCP/DQMCPMetrics.aspx'},
        {name: 'EOD Summary', icon: 'content/images/icons/eodcompliance.svg', info: 'EOD Summary is a monthly report monitoring the compliance with the "End of Day" requirements at RMC, MTF and CLINIC level.', link: '#/viewapps', background: '#401A04', target: '../DataAnalysis/defaultEOD.asp'},
        {name: 'IPSR', icon: 'content/images/icons/inpatient.svg', info: 'Reports the documentation, utilization, and data capture of professional rounds.', link: '#/viewapps', background: '#182073', target: '../DataAnalysis/defaultIPSR.asp'},
        {name: 'MAPR Data Quality Measures', icon: 'content/images/icons/quality.svg', info: 'Published under the MAPR along with the PBAM adjustments for the reporting month.', link: '#/viewapps', background: '#004000', target: '../DataAnalysis/defaultMAPR.asp'},
        {name: 'SIDR Reports', icon: 'content/images/icons/sidrreport.svg', info: 'SIDR reports include SIDR Completeness Transmittal Receipt Dates Counts by Source of Admission Files processed', link: '#/viewapps', background: '#0E4040', target: '../mrDQMCP/SIDRReports.aspx'},

  ]

  $scope.restricted = [
  
        // gone {name: 'Allied Health', icon: 'content/images/icons/allied.svg', info: 'The percentage of total encounters with valid E&M code.', background: '#7F0000'},
        {name: 'Anthrax, Smallpox and Abortions', icon: 'content/images/icons/incorrect.svg', info: 'TEncounters incorrectly coded.', background: '#FF530D'},
        {name: 'Behavioral Health EATC', icon: 'content/images/icons/behavior.svg', info: 'Compliance in Enhanced Access to Care (EATC) in BH and PC clinics with raw data included.', background: '#0E4040'},
       // {name: 'Body Mass Index Detail (BMI-D)', icon: 'content/images/icons/clinicalops.svg', info: 'BMI weight categories for selected population.', background: '#004002'},
        {name: 'CARA', icon: 'content/images/icons/cara.svg', info: 'Code Auditing and Reporting Application (CARA) Assists the MTFs through remote coding and monitoring.', background: '#19578B'},
        {name: 'Coder Manager', icon: 'content/images/icons/codermanager.svg', info: 'Coding Help Desk.', background: '#FF530D'},
        {name: 'Coding Help Desk', icon: 'content/images/icons/codinghelp.svg', info: 'Allows users in the *army.mil to enter coding inquiries to a database.', background: '#004000'},
        {name: 'DQMCP', icon: 'content/images/icons/icd10.svg', info: 'A survey from MTFs that produces reports on their performance.', background: '#7F0000'},
        {name: 'WISPR', icon: 'content/images/icons/scan.svg', info: 'WISPR supports viewing of scanned medical records for subsequent review and analysis.', background: '#00509A'},
        // gone {name: 'DART-PDHA ', icon: 'content/images/icons/dqmcp.svg', info: 'DART-PDHRA', background: '#00509A'},
  ]
$scope.currentItem = $routeParams.itemId;

});


