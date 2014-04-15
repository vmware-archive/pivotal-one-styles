angular.module('OrganizationDashboard').controller('OrganizationDomainsTabCtrl', ['$scope', 'OrganizationDomainsCollection', 'Helpers', function($scope, organizationDomainsCollection, Helpers) {
  $scope.collection = organizationDomainsCollection;
  $scope.helpers = Helpers;
}]);
