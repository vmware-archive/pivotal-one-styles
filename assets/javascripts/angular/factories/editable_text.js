angular.module('ConsoleApp').factory('EditableText', [function editableTextFactory() {
  return function FormContenteditable(newModelConstructor, form, persist) {
    var formContenteditable = {
      newModel: newModelConstructor(),
      form: form,
      persist: persist,
      enterEditMode: enterEditMode,
      save: save
    };

    function save() {
      formContenteditable.editing = false;

      if(!form().name.$dirty)
        return;

      var modelToSave = formContenteditable.newModel;
      formContenteditable.saving = true;

      var saveSucceeds = function () {
        form().$setPristine();
        form().name.$setValidity('serverError', true);
        modelToSave.serverErrors = {};
        formContenteditable.saving = false;
      };

      var saveFails = function (response) {
        form().name.$setValidity('serverError', false);
        formContenteditable.editing = true;
        modelToSave.serverErrors = response.data.errors;
        formContenteditable.saving = false;
      };

      persist(modelToSave).then(saveSucceeds, saveFails);
    }

    function enterEditMode() {
      formContenteditable.editing = true;
    }
    return formContenteditable;
  }
}]);
