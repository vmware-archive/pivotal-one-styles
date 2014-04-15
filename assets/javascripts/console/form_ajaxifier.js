(function (context, $) {
  context.FormAjaxifier = function ($form, options) {
    $form.on('submit', function (e) {
      e.preventDefault();

      var action = $form.attr('action');
      var data = $form.serialize();
      var method = $form.find("input[name='_method']").val() || $form.attr("method");

      if (method === 'patch') {
        method = 'put';
      }

      $.ajax(action, {
        data: data,
        type: method,

        error: function () {
          if (options && options.onFailure) {
            options.onFailure();
          } else {
            AlertModal.show("Something went wrong. Please try again later.");
            $form.trigger("ajax_form:failure");
          }
        },

        success: function(response) {
          // look in ajax_form, we need to do this for js_replace
          // because it returns javascript
          if (options && options.onSuccess) {
            options.onSuccess(response);
          } else {
            var nodes = $(response);
            $.each(nodes, function() { eval($(this).text()); });
          }
        }
      });
    });
  };
})(Console, jQuery);
