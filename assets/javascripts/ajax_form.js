$(document).ready(function(){
  $(document).on("click", "a.ajax", function(e) {
    var $link = $(this);
    var method = $link.data("method");
    var action = $link.attr("href");
    var submit = function() {
      $.ajax(action, { type: method })
      .complete(function(response) {
        if(response.status <= 400) {
          //Gross fix for js_replace as we send javascript back in plain text
          var nodes = $(response.responseText);
          $.each(nodes, function() { eval($(this).text()); });
        } else {
          AlertModal.show("Something went wrong. Please try again later.");
        }
      });
    };

    if ($link.data("confirm")) {
      ConfirmModal.show({
        text: $link.data("confirm"),
        buttonTitle: $link.text(),
        confirmCallback: submit
      });
    } else {
      submit();
    }

    e.preventDefault();
  });
});
