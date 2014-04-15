(function(context, $){
  context.LeaveOrganizationSubmissionHandler = function($link) {
    $link.on("ajax:success", function(e) {
      $link.closest('li').remove();
    });

    $link.on("ajax:error", function(e) {
      $(".loading_spinner").remove();
      $link.show();
      AlertModal.show("Something went wrong. Please try again.");
    });

    $link.on("ajax:before", function(e) {
      $link.hide();
      $('<i class="loading_spinner fa fa-cog fa-spin type-primary-4"></i>').insertAfter($link);
    });
  }
})(Console, jQuery);
