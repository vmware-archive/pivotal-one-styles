Console.SpaceServiceCredentialsModal = function ($showModalContentLink) {
  $showModalContentLink.click(function(e) {
    e.preventDefault();
    $.get($showModalContentLink.attr('href'), function(service_instance_credentials_data) {
      $content = $(JST['templates/service_instance_credentials'](service_instance_credentials_data));
      Elemental.load($content);
      InfoModal.show(service_instance_credentials_data.service_instance_name + ' Credentials', $content, 'OK');
    });
  });

}

