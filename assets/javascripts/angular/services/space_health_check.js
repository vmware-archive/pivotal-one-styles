angular.module("ConsoleApp").service("SpaceHealthCheck", ['$http', function ($http) {
  var SpaceHealthCheck = {
    getHealthFor: function (spaces) {
      var index = 0;
      _.each(spaces, function (space) {
        space.loadingStatus = true;
      });
      var loadSpaceHealth = function loadSpaceHealth(space) {
        index += 1;
        $http.get('/api/organizations/' + space.organization_guid + '/spaces/' + space.guid + '/health.json').then(function(response){
          space.crashed_app_count = response.data.crashed_app_count == 0 ? null : response.data.crashed_app_count;
          space.stopped_app_count = response.data.stopped_app_count == 0 ? null : response.data.stopped_app_count;
          space.running_app_count = response.data.running_app_count == 0 ? null : response.data.running_app_count;
          space.loadingStatus = false;
          if (spaces.length > index) {
            loadSpaceHealth(spaces[index]);
          }
        }, function() {
          if (spaces.length > index) {
            loadSpaceHealth(spaces[index]);
          }
        });
      }
      if (spaces[index]) {
        loadSpaceHealth(spaces[index]);
      }
    }
  };

  return SpaceHealthCheck;
}]);
