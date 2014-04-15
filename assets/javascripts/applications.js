onPageReady(".applications.show", function() {
  $("#instances_list table.tablesorter").tablesorter({
    widgets: ["zebra"],
    textExtraction: function customExtractValues(node) {
      if ($(node).data("sortable-value")) {
        return $(node).data("sortable-value");
      }
      return node.innerHTML;
    }
  });

  var $details = $('#application_dashboard_content');

  new ApplicationEditForm($details);
});

onPageReady(".applications.new, .applications.create", function(){
  new ApplicationEditForm($(".module"));
});
