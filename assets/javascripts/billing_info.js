onPageReady(".billing_info, .billing_info_callback", function () {
  var $card_details_form = $("#card_details");

  function validateCardDetailsForm() {
    removeValidationErrors($card_details_form);

    $card_details_form.find("input.required, select.required").each(function (index, element) {
      validateIsNotBlank($card_details_form.find(element));
    });

    validateStateSelection();
  }

  function validateStateSelection() {
    var countriesWithStatesRequired = ["US", "CA"];
    var countryRequiresState = $.inArray($("#billTo_country").val(), countriesWithStatesRequired) != -1;
    var stateSelectionIsEmpty = !$("#billTo_state").val().length;

    if (countryRequiresState && stateSelectionIsEmpty) {
      addErrorToField($("#billTo_state"));
    }
  }

  function removeValidationErrors($form) {
    $form.find(".has-error").removeClass("has-error");
    $form.find(".help-inline").remove();
  }

  function validateIsNotBlank($input) {
    if (!$input.val().length) {
      addErrorToField($input)
    }
  }

  function addErrorToField($input) {
    $input.closest(".form-group").addClass("has-error");
    $input.after("<span class=\"help-inline\">required information</span>");
  }

  function fillOutCreditCardType() {
    var cardNumber = $("#card_accountNumber").val();
    var cardType = CreditCardHelpers.getCreditCardType(cardNumber);
    $("#card_cardType").val(cardType);
  }

  window.registerBillingEvents = function registerBillingEvents() {
    $card_details_form = $("#card_details");

    $("#card_accountNumber").payment('formatCardNumber');
    $("#card_cvNumber").payment('formatCardCVC');

    $card_details_form.submit(function (event) {
      fillOutCreditCardType();
      validateCardDetailsForm();

      var errors = $(".has-error", $card_details_form);
      if (errors.length > 0) {
        event.preventDefault();
        return false;
      } else {
        $("#form-submit").prop('disabled', true);
      }
    });
  }

  // set this to the window so we can access it from the form iframe
  window.registerBillingEvents();
});
