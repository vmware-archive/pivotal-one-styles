(function(context, $){
  context.CustomDomainAdder = function($form) {

    var onSuccess = function(response) {
      var nodes = $(response);
      $.each(nodes, function() { eval($(this).text()); });
      $('#private_domain_creation_name').focus();
    };

    context.FormAjaxifier($form, { "onSuccess": onSuccess });
  }
})(Console, jQuery);
