adsApp.controller('RegisterController',function($scope,$location,TemplateService,userRequester,SharedContent){

    $scope.registerUser = function (user) {
        userRequester.registerUser(user).then(function (data) {
            userRequester.makeUserLogged(data.username, data.access_token);
            TemplateService.setTemplate(true);
            //    $scope.userName = userRequester.getUsername();
            SharedContent.setModalMessage('Successful registration');
            $location.path("/ads");
          //  window.location = window.location.hostname;
        }, function (error) {
            SharedContent.setModalMessage(error.message);
        });
    }

})