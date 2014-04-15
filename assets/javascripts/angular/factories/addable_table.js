angular.module('ConsoleApp').factory('AddableTable', ['$timeout', function addableTableFactory(timeout) {
  return function(getAddForm, collection) {
    var table = {
      newModel: collection.newModelConstructor(),
      enterEditMode: enterEditMode,
      cancel: cancel,
      save: save,
      editing: false,
      collection: collection,
      destroy: destroy
    };

    function enterEditMode() {
      table.editing = true;
    }

    function destroy(modelToDelete) {
      modelToDelete.deleting = true;

      var destroySucceeds = function() {
        var index = (collection.items).indexOf(modelToDelete);
        collection.items.splice(index, 1);
      };

      var destroyFails = function(response) {
        modelToDelete.serverErrors = response.data.errors;
      };
      collection.destroy(modelToDelete).then(destroySucceeds, destroyFails);
    }

    function cancel() {
      resetForm();
      table.editing = false;
    }

    function save() {
      var modelToSave = table.newModel;
      table.collection.items.unshift(modelToSave);

      table.editing = false;
      modelToSave.saving = true;

      var saveSucceeds = function(response){
        resetForm();
        modelToSave.guid = response.data.guid;
        modelToSave.saving = false;

        modelToSave.freshlySaved = true;
        timeout(function() {
          modelToSave.freshlySaved = false;
        }, 2000);
      };

      var saveFails = function(response) {
        modelToSave.saving = false;
        getAddForm().name.$setValidity('serverError', false);
        modelToSave.serverErrors = response.data.errors;
        table.editing = true;
        table.collection.items.shift();
      };

      collection.persist(modelToSave).then(saveSucceeds, saveFails);
    }

    function resetForm() {
      getAddForm().$setPristine();
      getAddForm().name.$setValidity('serverError', true);
      table.newModel = collection.newModelConstructor();
    }
    return table;
  };
}]);

