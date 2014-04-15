angular.module('OrganizationDashboard').service('OrganizationDomainsCollection', ['SharedDomains', 'PrivateDomains', 'currentOrganizationId', function(sharedDomains, privateDomains, currentOrganizationId) {
  var domains = privateDomains.all().concat(sharedDomains.all()),
  newModelConstructor = function newModuleConstructor() {
    return {name: null, owning_organization_guid: currentOrganizationId};
  },
  collection = {
    items: domains,
    persist: privateDomains.persist,
    destroy: privateDomains.destroy,
    newModelConstructor: newModelConstructor
  };

  return collection;
}]);

