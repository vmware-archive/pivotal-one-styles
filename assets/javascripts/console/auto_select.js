(function(context, $){
  context.AutoSelect = function($input) {
    $input.click(function() {
      this.select();
    });
  }
})(Console, jQuery)
