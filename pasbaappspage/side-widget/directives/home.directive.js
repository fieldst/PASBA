app.directive('homeWidget', function() {
   return {
     templateUrl: 'side-widget/side-widget-templates/homewidget.widget.html',
     scope: {
     	panel: '=',

     }, 
     link: function(scope, element, attribute){

     	scope.name = 'Access Request Form';
     	scope.array = [name];

     }
   };


 });