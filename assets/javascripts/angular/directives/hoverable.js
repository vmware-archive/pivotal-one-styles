angular.module('ConsoleApp').directive('hoverableGroup', [function() {
  return {
    restrict: 'A',
    link: function ($scope, element, $attr) {
      element.on('click', '[hoverable]', function(e) {
        var hoveredEl = $(e.currentTarget);
        element.find('[hoverable]').removeClass('clicked');
        hoveredEl.addClass('clicked');
      });
    }
  }
}]);
