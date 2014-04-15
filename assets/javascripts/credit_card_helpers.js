window.CreditCardHelpers = (function(){
  return {
    getCreditCardType: function getCreditCardType(accountNumber) {
      var result = "";

      if (/^4/.test(accountNumber)) {
        result = "001"; // VISA
      } else if (/^5[1-5]/.test(accountNumber)) {
        result = "002"; // Mastercard
      } else if (/^3[47]/.test(accountNumber)) {
        result = "003"; // AmEx
      } else if (/6(?:011|5[0-9]{2})/.test(accountNumber)) {
        result = "004"; // Discover
      } else if (/3(?:0[0-5]|[68][0-9])/.test(accountNumber)) {
        result = "005"; // Diners
      }

      return result;
    }
  };
})();
