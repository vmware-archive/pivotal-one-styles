  window.ConfirmModal = {
  show: function(options) {
    var html = JST["templates/confirm_modal"]({header: options.header, text: options.text, buttonTitle: options.buttonTitle, buttonClass: options.buttonClass || 'btn-primary'});

    var $modal = $("#confirm_modal").html(html),
      submitForm = function(){
        $(this).unbind("click");

        var modalHide = function() { $modal.modal('hide');};

        $.when(options.confirmCallback())
          .done(modalHide);

        return false;
      };

    $modal.find('.btn:contains("' + options.buttonTitle + '")').click(submitForm);

    var enterKeyCode = 13;
    $modal.on('keypress', function(e) {
      var keyCode = e.which;
      if (keyCode === enterKeyCode) {
        submitForm();
        //without preventDefault this event will bubble &
        //cancel the request.
        e.preventDefault();
      }
    });

    $modal.modal({ keyboard: true });
  }
};
