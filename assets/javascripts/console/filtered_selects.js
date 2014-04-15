(function($){
  Console.FilteredSelects = function(el) {
    var $filteringSelect = $(el);
    var $filteredSelect = $($filteringSelect.data('target'));

    $filteringSelect.on('change', function(){
      var applicationsBySpace = ($(this).data('json'));
      var currentValue = $filteringSelect.val()
      var optionsTemplate = "" +
        "<option value=\"\">[do not bind]</option>" +
        "<% _.each(options, function(option) {%> " +
        " <option value=\"<%= option.value %>\"><%= option.label %></option> " +
        "<%}); %>";
      $filteredSelect.html(_.template(optionsTemplate, {options: applicationsBySpace[currentValue]}));
    });
  }
})(jQuery);
