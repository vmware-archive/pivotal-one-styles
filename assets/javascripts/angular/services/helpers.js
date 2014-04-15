angular.module('ConsoleApp').service('Helpers', function() {
  return {
    pluralize: function(count, singularWord, pluralWord) {
      if (count == 1) {
        return singularWord;
      } else {
        return pluralWord;
      }
    },

    clientToServerIds: function(id) {
      return id.replace(/_/g, "-");
    }
  };
});

