(function(){
  window.InfoModal = {
    show: function(title, text, buttonTitle, confirmCallback) {
      var $modal = $("#info_modal");

      $modal.find(".modal-header h3").text(title);
      $modal.find(".modal-body").html(text);
      $modal.find(".btn-primary").text(buttonTitle).click(function(){
        $(this).unbind("click");
        $modal.modal("hide");

        if (confirmCallback) {
          confirmCallback();
        }
        return false;
      });

      $modal.modal({ keyboard: true });
    }
  };
})();
