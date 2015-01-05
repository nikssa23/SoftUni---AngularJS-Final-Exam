adsApp.controller('RegisterUser', function RegisterUser($scope, adsComponents) {
    $scope.registerUser = function (user) {
        adsComponents.registerUser(user).then(function (data) {
            adsComponents.loginUser(data.name,data.access_token);
            alert(adsComponents.getToken());
        });
    }
});