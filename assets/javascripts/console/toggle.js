(function(context, $){
  context.Toggle = function($toggle) {
    $toggle.on('click', '[data-toggle=toggle]', function(e){
      e.preventDefault();
      if ($(e.currentTarget).data('target') == 'edit') {
        $toggle.addClass('edit');
      } else {
        $toggle.removeClass('edit');
      }
    });
  };
})(Console, jQuery);
