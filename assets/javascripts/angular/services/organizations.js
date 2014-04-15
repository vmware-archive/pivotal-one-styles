angular.module('ConsoleApp').service('Organizations', [ '$http', function ($http) {
  var service = {
      persist: function(org) {
        return $http.put('/api/organizations/' + org.guid + '.json', {name: org.name});
      }
    };

  return service;
}]);
