(function($){
  Console.SelectLinker = function($select){
    $select.on('change', function(e){
      window.location = $(e.target).val();
    });
  }
})(jQuery);

