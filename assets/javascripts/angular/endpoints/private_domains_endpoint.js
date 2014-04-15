angular.module('ConsoleApp').service('PrivateDomainsEndpoint', [ '$http', function ($http) {
  return {
    save: function(domain) {
      return $http({method: 'POST', url: '/api/organizations/' + domain.owning_organization_guid + '/private_domains.json', data: domain});
    },

    delete: function(domain) {
      return $http({method: 'DELETE', url: '/api/organizations/' + domain.owning_organization_guid + '/private_domains/' + domain.guid + '.json'});
    }
  }
}]);
