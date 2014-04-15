(function($){
  Console.ClickableTable = function($table) {
    $table.find('a').on('click', function(e) {
      e.stopPropagation();
    });

    $table.on('click', 'tr', function() {
      var targetPath = $(this).data('targetPath'),
      preventClick = $(this).data('preventClick'),
      preventClickMessage = $(this).data('preventClickMessage') || "Error: Insufficient Privileges";
      if (preventClick) {
        AlertModal.show(preventClickMessage);
      }
      if (targetPath && !preventClick) {
        util.redirectTo(targetPath);
      }
    });
  };
})(jQuery);
