angular.module('OrganizationDashboard').controller('OrganizationMembersCtrl', ['$scope', '$http', 'OrganizationMembersCollection', 'currentOrganizationId', 'spaces', function($scope, $http, OrganizationMembersCollection, currentOrganizationId, spaces) {
  $scope.orgMembers = OrganizationMembersCollection;
  $scope.selectedPermissionsUrl = null;
  $scope.allOrgsSelected = false;
  $scope.allSpacesSelected = false;

  $scope.updatePermission = function($event, permissionType, member) {
    var permissionGranted = $($event.target).prop('checked');
    $scope.permissionType = permissionType;
    member.savingPermissionType = permissionType;
    if(member.token != null){
      $http.put('/api/organizations/' + currentOrganizationId  +'/invitations/' + member.id + '.json', {space_id: $scope.orgMembers.currentSpaceId(), permission_type: permissionType, permission_value: permissionGranted}).finally(function(){
        member.savingPermissionType = null;
      });
    }
    else{
      $http.put($scope.selectedPermissionsUrl + '/' + member.id + '.json', {permission_type: permissionType, permission_value: permissionGranted}).finally(function(){
        member.savingPermissionType = null;
      });
    }
  };

  $scope.resendInvitation = function(member) {
    member.sending = true;
    return $http.get(member.resend_url + '.json');
  };


  $scope.$watch('selectedPermissionsUrl', function(url) {
    OrganizationMembersCollection.get(url);
  });

  $scope.selectAllOrgs = function() {
    $scope.allOrgsSelected = !$scope.allOrgsSelected;
    getInviteForm().data.org = {};
    if($scope.allOrgsSelected){
      getInviteForm().data.org[currentOrganizationId] = {auditor: true, billing_manager: true, manager: true};
    }
    else{
      getInviteForm().data.org = null;
    }
  };

  $scope.selectAllSpaces = function(){
    $scope.allSpacesSelected = !$scope.allSpacesSelected;
    getInviteForm().data.space = {};
    if($scope.allSpacesSelected){
      _.each(spaces, function(currentSpace){
        getInviteForm().data.space[currentSpace.guid] = {manager: true, auditor: true, developer: true};
      })
    }
    else{
      getInviteForm().data.space = null;
    }
  };

  $scope.sendInvite = function(){
    OrganizationMembersCollection.persist(getInviteForm()).then(inviteSuccessful, inviteFailed);
  }

  var getInviteForm = function () {
    return $scope.inviteMembersForm;
  };

  var inviteSuccessful = function() {
    $scope.inviting = false;
    $scope.allOrgsSelected = false;
    $scope.allSpacesSelected = false;
  };

  var inviteFailed = function(response) {
    $scope.inviteMembersForm.errors = response.data.errors;
  };
}]);
