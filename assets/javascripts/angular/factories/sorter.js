angular.module('ConsoleApp').factory('Sorter', [function Sorter() {
  return function (collection, attribute, direction) {
    var currentSort = {
      attribute: attribute,
      direction: direction
    };
    var sorter = {
      currentSort: currentSort,
      sortBy: function (attribute, direction) {
        currentSort.attribute = attribute;
        currentSort.direction = direction;
        collection.sort(sortIteratorFactory(attribute, direction))
      },
      sortDirection: function(attribute) {
        if (attribute != currentSort.attribute) {
          return "none";
        } else {
          return currentSort.direction;
        }
      },
      clearSort: function() {
        currentSort.attribute = null;
        currentSort.direction = null;
      }
    }
    sorter.sortBy(attribute, direction);

    function sortIteratorFactory(attribute, direction) {
      var signChange = 1;
      if (direction == 'desc') {
        signChange = -1;
      }
      return function (a, b) {
        if (a[attribute] < b[attribute]) {
          return -1 * signChange;
        }
        if (a[attribute] > b[attribute]) {
          return 1 * signChange;
        }
        return 0;
      }
    }

    return sorter;
  }
}]);
