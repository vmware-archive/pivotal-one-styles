app.helpers.UrlCreator = function(organizationId, spaceId) {
  var self = this;

  _(self).extend({
    create: function(options) {
      var url = "/organizations/" + organizationId + "/spaces/" + spaceId;

      if(!_(options).isEmpty()) {
        url += "?";
        var flash_messages = _(options).map(function(index, key) {
          return "flash_" + key + "=" + encodeURI(options[key]);
        });
        url += flash_messages.join("&");
      }

      return url;
    }
  });
};
