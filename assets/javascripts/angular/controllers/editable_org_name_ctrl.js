angular.module('OrganizationDashboard').controller('EditableOrgNameCtrl', ['$scope', 'Organizations', 'currentOrganizationId', 'currentOrganizationName', 'EditableText', function (scope, organizations, currentOrganizationId, currentOrganizationName, editableText) {

  var newModelConstructor = function() {
    return {name: currentOrganizationName, guid: currentOrganizationId};
  }

  var getForm = function () {
    return scope.orgNameForm;
  };

  var persist = function (org) {
    return organizations.persist(org)
  };
  scope.orgNameEdit = editableText(newModelConstructor, getForm, persist);
}]);
