(function ($) {
  var headerHeight = 104;

  Console.GentleScroll = function ($a) {
    var $root = $('html, body');
    $a.on('click', function(e){
      var href = $a.attr('href');
      $root.animate({
        scrollTop: $(href).offset().top - headerHeight
      }, 500, function () {
        $(href).focus();
        window.location.hash = href;
      });
      return false;
    });
  };
})(jQuery);
