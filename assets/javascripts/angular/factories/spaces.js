angular.module('ConsoleApp').factory('Spaces', ['$timeout', 'SpacesCollection', function spacesFactory(timeout, SpacesCollection) {
  return function(getNewSpaceForm) {
    var newSpace = {},
        collection = SpacesCollection;

    newSpace.data = collection.newSpaceDefaultData();
    newSpace.state = 'default';

    newSpace.clickAdd = function() {
      newSpace.state = 'adding';
    };

    newSpace.cancelAdd = function() {
      newSpace.state = 'default';
      newSpace.data = collection.newSpaceDefaultData();
      newSpace.serverErrors = '';
      getNewSpaceForm().$setPristine();
      getNewSpaceForm().name.$setValidity('serverError', true);
    };

    newSpace.clickSave = function() {
      newSpace.state = 'saving';
      var saveSucceeds = function(response){
        newSpace.state = 'default';

        newSpace.data.guid = response.data.guid;
        newSpace.data.path = response.data.path;
        collection.items.push(newSpace.data);
        newSpace.cancelAdd();
      };

      var saveFails = function(response) {
        newSpace.state = 'adding';
        getNewSpaceForm().name.$setValidity('serverError', false);
        newSpace.serverErrors = response.data.errors.name.join(' ');
      };

      collection.persist(newSpace).then(saveSucceeds, saveFails);
    };

    return {
      newSpace: newSpace,
      collection: collection
    };
  }
}]);

