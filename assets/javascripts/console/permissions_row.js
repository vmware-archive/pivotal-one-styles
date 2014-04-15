(function(context, $){
  context.PermissionsRow = function($form) {
    var $input;

    $form.on("change", "input", function(e) {
      $input = $(e.currentTarget);
      $input.hide();
      $('<i class="loading_spinner fa fa-cog fa-spin"></i>').insertAfter($input);
      $form.submit();
    });

    var onFailure = function() {
      $(".loading_spinner").remove();
      $input.show();
      $input.prop("checked", !$input.prop('checked'));
      AlertModal.show($form.attr("data-error"));
    };

    context.FormAjaxifier($form, { "onFailure": onFailure });
  }
})(Console, jQuery);
