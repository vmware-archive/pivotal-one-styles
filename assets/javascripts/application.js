//= require jquery
//= require jquery_ujs
//= require underscore
//= require angular
//= require angular-resource
//= require angular-animate
//= require jquery_table_sorter/jquery.tablesorter.min
//= require bootstrap3/alert
//= require bootstrap3/dropdown
//= require bootstrap3/transition
//= require bootstrap3/modal
//= require bootstrap3/collapse
//= require bootstrap3/tab
//= require bootstrap3/tooltip
//= require bootstrap3/scrollspy
//= require console/console
//= require console/toggle
//= require console/team_loader
//= require console/select_all
//= require console/progress_bar
//= require console/permissions_row
//= require console/select_linker
//= require console/clickable_table
//= require console/team_dropdown
//= require console/gentle_scroll
//= require console/form_ajaxifier
//= require console/auto_select
//= require console/invite_link
//= require console/leave_organization_submission_handler
//= require console/custom_domain_adder
//= require console/filtered_selects
//= require angular/console_app
//= require angular/organization_dashboard
//= require angular/directives/add_button
//= require angular/directives/cancel_button
//= require angular/directives/focus_input
//= require angular/directives/sortable
//= require angular/directives/hoverable
//= require angular/directives/invite_button_disabler
//= require angular/directives/confirmation_modal
//= require angular/factories/addable_table
//= require angular/factories/sorter
//= require angular/factories/spaces
//= require angular/factories/editable_text
//= require angular/services/shared_domains
//= require angular/services/helpers
//= require angular/endpoints/private_domains_endpoint
//= require angular/services/private_domains
//= require angular/services/organizations
//= require angular/services/organization_members_collection
//= require angular/services/organization_domains_collection
//= require angular/services/spaces_collection
//= require angular/services/space_health_check
//= require angular/controllers/domain_addable_table_ctrl
//= require angular/controllers/organization_domains_tab_ctrl
//= require angular/controllers/members_tab_ctrl
//= require angular/controllers/editable_org_name_ctrl
//= require angular/controllers/spaces_ctrl
//= require angular/controllers/organization_members_ctrl

// This is legacy javascript. We should consider rewriting it.
//= require_self
//
//Required by spaces/show
//= require app
//= require load_content
//= require util
//= require confirm_dialog
//= require url_creator
//= require spaces
//= require templates/confirm_modal
//
//Required by applications/show
//= require alert_dialog
//= require external/elemental
//= require console/console
//= require application_controls
//= require applications
//= require setup_elemental_behaviors
//= require info_dialog
//= require console/space_service_credentials_modal
//= require templates/service_instance_credentials
//= require rails_overrides
//= require ajax_form
//
//Required by add credit card page.
//= require billing_info
//= require external/jquery.payment
//= require credit_card_helpers
//
//Required by management pages
//= require admin/user_registrations
//We aren't even using this, but an old js references it.
//= require external/jquery.tablesorter

function onPageReady(pageClass, readyCallback) {
  $(document).ready(function () {
    if ($("body").is(pageClass)) readyCallback();
  });
}

$(function(){
  $('.with-tooltip').tooltip({trigger: 'hover', placement: 'bottom'});
});

$(function() {
  $('form').not('[data-skip-button-disable]').on('submit', function(e) {
    $(e.currentTarget).find('input[type="submit"]').prop('disabled', true);
  });
});
