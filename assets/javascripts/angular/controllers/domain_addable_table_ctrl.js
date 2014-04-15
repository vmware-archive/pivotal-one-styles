angular.module('OrganizationDashboard').controller('DomainAddableTableCtrl', ['$scope', 'AddableTable', 'Sorter', 'OrganizationDomainsCollection', function (scope, AddableTable, Sorter, OrganizationDomainsCollection) {
  var getAddForm = function getAddForm() {
      return scope.newDomainForm;
    },
    sorter = Sorter(OrganizationDomainsCollection.items, 'name', 'asc'),
    sortableCollection = _.extend(_.clone(OrganizationDomainsCollection), {
      persist: function () {
        sorter.clearSort();
        return OrganizationDomainsCollection.persist.apply(OrganizationDomainsCollection, arguments);
      }
    });

  scope.domainTable = AddableTable(getAddForm, sortableCollection);
  scope.sorter = sorter;
}]);
