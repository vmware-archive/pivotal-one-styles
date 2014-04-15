angular.module('ConsoleApp').directive("cancelButton", [ function () {
  return {
    restrict: "A",
    link: function (scope, element) {
      var onCancel = function () {
        scope.cancel();
      };

      element.bind("click", function () {
        scope.$apply(onCancel);
      });
    }
  }
}]);
