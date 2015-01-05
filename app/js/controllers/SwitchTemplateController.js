adsApp.controller('SwitchTemplateController',function SwitchTemplateController($scope,SharedContent){
    $scope.headerTemplate = SharedContent.getHeaderTemplate();
});