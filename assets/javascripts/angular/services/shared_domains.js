angular.module('ConsoleApp').service('SharedDomains', [ '$rootScope', function ($rootScope) {
  var items = [],
  service = {
    reset: function(data){
      items = data;
    },
    all: function() {
      return items;
    }
  };

  return service;
}]);
