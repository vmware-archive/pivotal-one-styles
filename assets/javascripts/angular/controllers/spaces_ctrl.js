angular.module('OrganizationDashboard').controller('SpacesCtrl', ['$scope', '$http', 'Spaces', 'currentOrganizationId', 'SpaceHealthCheck', 'Helpers', function (scope, $http, Spaces, currentOrganizationId, SpaceHealthCheck, Helpers) {
  var getNewSpaceForm = function () {
    return scope.newSpaceForm;
  };
  scope.spaces = Spaces(getNewSpaceForm);
  scope.helpers = Helpers;
  SpaceHealthCheck.getHealthFor(scope.spaces.collection.items);
}]);
