angular.module('ConsoleApp').directive('inviteButtonDisabler', [function() {
  return {
    restrict: 'A',
    link: function ($scope, element) {
      var button = element.find('button[type="submit"]');
      var emailField = element.find('input[name="email_addresses"]');
      var disable = function() {
        var grantedAPerm = _(element.find('input[type="checkbox"]')).any(function(checkbox){return checkbox.checked});
        var emailAddressFilled = emailField.val() !== "";
        if(grantedAPerm && emailAddressFilled){
          button.prop('disabled', false);
        }
        else{
          button.prop('disabled', true);
        }
      };
      element.change(function() {_.defer(disable)});
      emailField.on('change keydown paste input', disable);
    }
  }
}]);
