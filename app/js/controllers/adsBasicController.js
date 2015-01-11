adsApp.controller("adsBasicController",
    function adsBasicController($scope, adsComponents, SharedContent, TemplateService) {
        $scope.towns = adsComponents.getTowns();
        $scope.categories = adsComponents.getCategories();
        $scope.templateService = TemplateService;
    });