onPageReady(".spaces.show", function(){
  $("tr.application .urls a").click(function(e) {
    e.stopPropagation();
  });
});
