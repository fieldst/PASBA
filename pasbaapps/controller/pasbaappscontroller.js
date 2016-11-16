app.controller('pasbaappsinfocontroller', function($scope, $compile) {
  $scope.testing = 'test';

   $scope.nonrestricted = [
  
        {name: 'Behavioral Health EATC - Summary', icon: 'content/images/pasbaapps-icons/BH.png', info: 'Compliance in Enhanced Access to Care (EATC) in BH and PC clinics.', link: '../DataAnalysis/defaultBHSummary.asp'},
        {name: 'CAPER Reports', icon: 'content/images/pasbaapps-icons/caper.png', info: 'These reports help MTFs track daily data transmittals, receipt and data processing.', link: '../caperreports'},
        {name: 'DQMCP RPTS', icon: 'content/images/pasbaapps-icons/dqmcq.png', info: 'Survey results from the DQMCP application includes monthly and YTD reports', link: '../mrDQMCP/DQMCPMetrics.aspx'},
        {name: 'EOD Summary', icon: 'content/images/pasbaapps-icons/eod.png', info: 'EOD Summary is a monthly report monitoring the compliance with the "End of Day" requirements at RMC, MTF and CLINIC level.', link: '../DataAnalysis/defaultEOD.asp'},
        {name: 'Inpatient Professional Service Rounds', icon: 'content/images/pasbaapps-icons/inpatient.png', info: 'Reports the documentation, utilization, and data capture of professional rounds.', link: '../DataAnalysis/defaultIPSR.asp'},
        {name: 'MAPR Data Quality Measures', icon: 'content/images/pasbaapps-icons/database_check.png', info: 'Published under the MAPR along with the PBAM adjustments for the reporting month.', link: '../DataAnalysis/defaultMAPR.asp'},
        {name: 'SIDR Reports', icon: 'content/images/pasbaapps-icons/sidr.png', info: 'SIDR reports include SIDR Completeness Transmittal Receipt Dates Counts by Source of Admission Files processed', link: '../mrDQMCP/SIDRReports.aspx'},

  ]

  $scope.restricted = [
  
        {name: 'Allied Health', icon: 'content/images/pasbaapps-icons/alliedhealth.png', info: 'The percentage of total encounters with valid E&M code.'},
        {name: 'Anthrax, Smallpox and Abortions', icon: 'content/images/pasbaapps-icons/incorrect.png', info: 'TEncounters incorrectly coded.'},
        {name: 'Behavioral Health EATC', icon: 'content/images/pasbaapps-icons/raw.png', info: 'Compliance in Enhanced Access to Care (EATC) in BH and PC clinics with raw data included.'},
        {name: 'Body Mass Index Detail (BMI-D)', icon: 'content/images/pasbaapps-icons/scale.png', info: 'BMI weight categories for selected population.'},
        {name: 'CARA', icon: 'content/images/pasbaapps-icons/cara.png', info: 'Code Auditing and Reporting Application (CARA) Assists the MTFs through remote coding and monitoring.'},
        {name: 'Coder Manager', icon: 'content/images/pasbaapps-icons/codermanage.png', info: 'Coding Help Desk.'},
        {name: 'Coding Help Desk', icon: 'content/images/pasbaapps-icons/codinghelpdesk.jpg', info: 'Allows users in the *army.mil to enter coding inquiries to a database.'},
        {name: 'DART-PDHA ', icon: 'content/images/pasbaapps-icons/60days.png', info: 'DART-PDHRA'},
  ]


});


