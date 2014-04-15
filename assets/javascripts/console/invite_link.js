(function(context, $){
  context.InviteLink = function($link) {
    $link.click(function(e) {
      e.preventDefault();
      $link.hide();
      $link.next('[data-invite-link-target]').show().select();
    });
  }
})(Console, jQuery)
