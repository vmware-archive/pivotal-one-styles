$(document).undelegate($.rails.linkClickSelector, "click.rails");
$(document).undelegate($.rails.formInputClickSelector, "click.rails");

$(document).delegate($.rails.linkClickSelector, "click", function(e) {
  var $link = $(this);
  if ($link.data('confirmationModal')) {
    return;
  }

  // .ajax elements are handled by ajax_form
  if (!$link.is(".ajax")) {
    if ($link.data("confirm")) {
      ConfirmModal.show({
        text: $link.data("confirm"),
        buttonTitle: $link.text(),
        buttonClass: $link.data('dangerousAction') ? 'btn-danger' : 'btn-primary',
        confirmCallback: function() {
          if ($link.data("remote")) {
            $.rails.handleRemote($link);
          } else {
            $.rails.handleMethod($link);
          }
        }
      });
    } else {
      $link.trigger("loading_overlay:show");
      $.rails.handleMethod($link);
    }
  }

  // allow other handlers to execute for clicked element
  e.preventDefault();
});
