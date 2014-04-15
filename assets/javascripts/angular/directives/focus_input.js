angular.module('ConsoleApp').directive("focusInput", ['$timeout', function (timeout) {
  return {
    restrict: "A",
    link: function (scope, element, attrs) {
      scope.$watch(attrs.focusInput, function(value) {
        if (value == true) {
          timeout(function(){ //let any parent ngShows finish
            $(element).focus();
          },0);
        }
      });
    }
  }
}]);
