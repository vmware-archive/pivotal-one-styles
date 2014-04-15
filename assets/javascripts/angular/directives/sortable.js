angular.module('ConsoleApp').directive("sortable", [ function (name) {
  return {
    restrict: "A",
    link: function ($scope, element, $attr) {
      var attributeName = $attr.sortable;

      $scope.$watch('sorter.currentSort.attribute', function() {
        element.removeClass('sorted-desc sorted-asc sorted-none');
        var sortDirection = $scope.sorter.sortDirection(attributeName);
        element.addClass("sorted-" + sortDirection);
      });

      $scope.$watch('sorter.currentSort.direction', function() {
        element.removeClass('sorted-desc sorted-asc sorted-none');
        var sortDirection = $scope.sorter.sortDirection(attributeName);
        element.addClass("sorted-" + sortDirection);
      });

      element.bind("click", function () {
        $scope.$apply(function() {
          var sortDirection = $scope.sorter.sortDirection(attributeName);
          if(sortDirection == 'asc') {
            sortDirection = 'desc';
          } else {
            sortDirection = 'asc';
          }
          $scope.sorter.sortBy(attributeName, sortDirection);
        });
      });
    }
  }
}]);
