(function($){
  window.AlertModal = {
    show: function(text) {
      $("#alert_modal").find(".modal-body p").html(text);
      $("#alert_modal").modal({ keyboard: true });
    }
  }
})(jQuery);

