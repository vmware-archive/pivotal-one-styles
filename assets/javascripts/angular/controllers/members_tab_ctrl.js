angular.module('OrganizationDashboard').controller('MembersTabCtrl', ['$scope', 'OrganizationMembersCollection', 'Helpers', function($scope, OrganizationMembersCollection, Helpers) {
  $scope.collection = OrganizationMembersCollection;
  $scope.helpers = Helpers;
}]);
