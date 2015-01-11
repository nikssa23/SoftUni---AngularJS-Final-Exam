adsApp.factory('TemplateService', function (userRequester) {
    var template = userRequester.checkUserLogin();

    return {

        getTemplate: function () {
            return this.template;
        }
        ,
        setTemplate: function (temp) {
            this.template = temp;
        }
    }
})