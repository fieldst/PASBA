app.controller('pasbaappcontroller', function($scope, $compile, $timeout) {
  $scope.test = 'test';

   $scope.unrestrictapps = [
  
        {name: 'MAP'}

  ]

});




// this.future = [
//     //{ name: 'Behavioral Health', dataName: 'behavioralHealth', icon: 'bh360', linkValue: 'metric-dashboard', iconColorClass: 'colorMed' },
//     { name: 'Public Health', dataName: 'publicHealth', icon: 'ph360', linkValue: 'metric-dashboard', iconColorClass: 'colorMed' },
//     //{ name: 'Access To Care', dataName: 'accessToCare', icon: 'caduceus1', linkValue: 'metric-dashboard', iconColorClass: 'color4' },
//     //{ name: 'Beneficiary Health', dataName: 'beneficiaryHealth', icon: 'family21', linkValue: 'metric-dashboard', iconColorClass: 'color5' },
//     { name: 'Coding', dataName: 'coding', icon: 'numbered10', linkValue: 'metric-dashboard', iconColorClass: 'color1' },
//     //{ name: 'Data Processing', dataName: 'dataProcessing', icon: 'monitor7', linkValue: 'metric-dashboard', iconColorClass: 'color5' },
//     { name: 'Data Quality', dataName: 'dataQuality', icon: 'positive3', linkValue: 'metric-dashboard', iconColorClass: 'color2' },
//     //{ name: 'Performance', dataName: 'performance', icon: 'ascendant6', linkValue: 'metric-dashboard', iconColorClass: 'color4' },
//     //{ name: 'Utilization', dataName: 'utilization', icon: 'circle54', linkValue: 'metric-dashboard', iconColorClass: 'color3' },
//   { name: 'CHUP', dataName: 'chup', icon: 'ascendant6', linkValue: 'metric-dashboard', iconColorClass: 'color3' },
//   { name: 'PAWS', dataName: 'paws', icon: 'circle54', linkValue: 'metric-dashboard', iconColorClass: 'color4' },
//     ];