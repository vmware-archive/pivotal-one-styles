(function ($) {
  Console.ProgressBar = function ($progress) {
  var ariaValue = $progress.attr('aria-valuenow');
  $progress.css("width",ariaValue+"%");
  };
})(jQuery);
