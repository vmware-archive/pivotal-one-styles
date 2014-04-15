angular.module('OrganizationDashboard').service('SpacesCollection', ['spaces', 'currentOrganizationId', '$http', function (spaces, currentOrganizationId, $http) {
  return {
    items: spaces,
    persist: function (space) {
      return $http({method: 'POST', url: '/api/organizations/' + currentOrganizationId + '/spaces.json', data: space.data});
    },
    newSpaceDefaultData: function() {
      return {
        organization_guid: currentOrganizationId,
        name: null,
        guid: null,
        path: null,
        app_count: 0,
        service_count: 0,
        percent_of_total_quota: 0
      }
    }
  };
}]);

