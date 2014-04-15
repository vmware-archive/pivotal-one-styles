function ApplicationStartStopButton($container) {
  $container.find("form").click(function(e) {
    e.stopPropagation();
  });

  function toggleState($form) {
    var $newIndicator;

    $container.trigger("loading_overlay:show");

    $.ajax($form.attr("action"), { data: $form.serialize(), type: "put" })
      .complete(function(response) {
        $container.trigger("loading_overlay:hide");

        if(response.status == 200 || response.status == 400) {
          $newIndicator = $(response.responseText);

          if ($container.hasClass("health-indicator-large")) {
            $newIndicator.addClass("health-indicator-large");
          }

          $container.replaceWith($newIndicator);
          Elemental.load(document);
        } else {
          AlertModal.show("Something went wrong. Please try again later.");
        }
      });
  }

  function formSubmit() {
    var $form = $(this);
    var $button = $form.find("input[type='submit']");

    if($button.data("confirm")) {
      ConfirmModal.show({
        text: $button.data("confirm"),
        buttonTitle: $button.data("action"),
        confirmCallback: function() { toggleState($form) }
      });
    } else {
      toggleState($form);
    }
    return false;
  }

  $container.on("submit", ".state_form", formSubmit);

  return {};
}

function ApplicationEditForm($container) {

  $container.on("click", "a.edit_link", function() {
    $(this).hide();
    $container.find('.module-controls').show();
    $container.find("form").show();
    $container.find(".viewing").hide();
    return false;
  });

  return {};
}
