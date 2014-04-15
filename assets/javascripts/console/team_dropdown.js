(function($){
  var fetchUrlFromLocation = function fetchUrlFromLocation() {
    return location.hash.slice(1);
  };
  var setLocation = function setLocation(url) {
    window.location.hash = url;
  };
  var loadContainer = function loadContainer($container, url) {
    $container.parents(".overlay").addClass('in');
    $container.load(
      url, null,
      function() {
        $container.parents(".overlay").removeClass('in');
        $container.fadeTo(null, 1);
        Elemental.load($container);
      });
  }

  Console.TeamDropdown = function($select) {
    var $targetTab = $($select.data('targetTabSelector'));
    var urlAtInit = fetchUrlFromLocation() || $select.val();

    $select.on('change', function(e){
      var url = $(e.currentTarget).val();
      $targetTab.fadeTo(null, 0.2);
      setLocation(url);
      loadContainer($targetTab, url);
    });

    loadContainer($targetTab, urlAtInit);
    $select.val(urlAtInit);
  };
})(jQuery);

