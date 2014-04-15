(function ($) {
  Console.SelectAll = function ($select_all_toggle) {
    var parentForm = $select_all_toggle.closest('form'),
      checkboxesToToggleSelector = '[data-select-all-toggle-target="' + $select_all_toggle.attr('id') + '"]',
      checkboxesToToggle = $(checkboxesToToggleSelector, parentForm);

    $select_all_toggle.click(function () {
      var selectAllCheckedState = $select_all_toggle.is(":checked")
      checkboxesToToggle.not(':disabled').prop("checked", selectAllCheckedState);
    });

    var updateSelectAllToggleState = function () {
      var allAreChecked = (checkboxesToToggle.filter(':checked').not(':disabled').length == checkboxesToToggle.not(':disabled').length);
      $select_all_toggle.prop("checked", allAreChecked);
    };

    parentForm.on('click', checkboxesToToggleSelector, updateSelectAllToggleState);
    updateSelectAllToggleState();
  };
})(jQuery);
