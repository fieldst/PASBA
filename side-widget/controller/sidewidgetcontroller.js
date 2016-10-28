app.controller('sidewidgetcontroller', [ '$scope', 'MyService' , function($scope, MyService) {

//unrestricted apps
 $scope.panelMyApps = [

    {
    name: 'Navigation',
    text: '',
    icon: ''
},
    {
    name: 'SAV (Staff Assistance Visit)'
},
    {
    name: 'New Items'
}
}]);



}]);


