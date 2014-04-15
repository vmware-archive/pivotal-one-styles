angular.module('ConsoleApp').service('PrivateDomains', [ 'PrivateDomainsEndpoint', function (private_domains_endpoint) {
  var items = [],
  service = {
    reset: function(data){
      items = data;
    },
    all: function() {
      return items;
    },
    destroy: function(domain) {
      return private_domains_endpoint.delete(domain);
    },

    persist: function(domain) {
      return private_domains_endpoint.save(domain);
    }
  };

  return service;
}]);
