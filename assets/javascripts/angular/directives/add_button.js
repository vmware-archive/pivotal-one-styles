angular.module('ConsoleApp').directive("addButton", [ function () {
  return {
    restrict: "A",
    link: function (scope, element) {
      var onEdit = function () {
        scope.enterEditMode();
      };

      element.bind("click", function () {
        scope.$apply(onEdit);
      });
    }
  }
}]);

