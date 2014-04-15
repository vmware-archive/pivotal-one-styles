angular.module('ConsoleApp').directive('confirmationModal', [function() {
  return {
    restrict: 'A',
    link: function (scope, element, attrs) {
      element.on('click', function(e) {
        e.preventDefault();
        ConfirmModal.show({
          header: attrs.confirmationHeader,
          text: attrs.confirmationModal,
          buttonTitle: element.text(),
          buttonClass: element.data('dangerousAction') ? 'btn-danger' : 'btn-primary',
          confirmCallback: function() {
            if (attrs.confirmationAction) {
              scope.$eval(attrs.confirmationAction);
              return;
            } else if (attrs.method) {
              $.rails.handleMethod(element);
              return
            }
          }
        });
      });
    }
  }
}]);
