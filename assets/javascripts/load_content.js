(function($){
  $.fn.loadContent = function(successCallback, type){
    type = type || "html";

    return this.each(function(){
      var $this = $(this);

      if ($this.attr("loaded")) return;
      $this.attr("loaded", true);

      $.ajax($this.data("url"), { dataType: type })
        .success(function(data) {
          if (type == "html") {
            $this.find(".spinner-sm").after(data);
          }
          if (successCallback) successCallback(data);
        })
        .error(function() {
          $this.find(".error_description").show();
        })
        .complete(function() {
          $this.find(".spinner-sm").hide();
        });
    });
  };
})(jQuery);
