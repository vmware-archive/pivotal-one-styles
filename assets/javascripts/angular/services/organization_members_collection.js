angular.module('OrganizationDashboard').service('OrganizationMembersCollection', ['$http','currentOrganizationId', 'Helpers', function($http, currentOrganizationId, Helpers) {

  var items = [],
      type = null,
      currentSpaceId = null;

  var replaceObjectKeys = function(object) {
    keys = _.keys(object);
    _.each(keys, function(key) {
      newKey = Helpers.clientToServerIds(key);
      object[newKey] = object[key];
      if (newKey != key){
        delete object[key];
      }
    });
  };

  return {
    get: function(url) {
      var success = function(response) {
        type = response.data.type;
        items = response.data.members_with_permissions;
        currentSpaceId = null;
        if(items[0].space){
           currentSpaceId = items[0].space.guid;
        }
      }

      $http.get(url+'.json').then(success);
    },

    persist: function(newInviteForm) {
      if(newInviteForm.data.org){
        replaceObjectKeys(newInviteForm.data.org);
      }

      if(newInviteForm.data.space){
      replaceObjectKeys(newInviteForm.data.space);
      }
      var promise = $http.post('/api/organizations/' + currentOrganizationId  +'/invitations.json', {data: newInviteForm.data });
      promise.then(function(response){
        _.each(response.data.members_with_permissions, function(member) {
          items.push(member);
        })
        newInviteForm.data = null;
      })
      return promise;
    },

    destroy: function(member) {
      var success = function() {
        var index = (items).indexOf(member);
        items.splice(index, 1);
      };

      return $http.delete(member.delete_url + '.json').then(success);
    },

    items: function() {
      return items;
    },

    type: function() {
      return type;
    },

    currentSpaceId: function() {
      return currentSpaceId;
    }
  };
}]);
