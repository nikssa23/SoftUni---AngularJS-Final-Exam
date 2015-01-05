adsApp.service('SharedContent', function SharedContent() {
    var guestHeaderTemplate = "/templates/header/guest.html";
    var userHeaderTemplate = "/templates/header/user.html";
    var headerTemplate = userHeaderTemplate;

    return {
        setGuestHeader: function () {
            headerTemplate = guestHeaderTemplate;
        },
        setUserHeader: function () {
            headerTemplate = userHeaderTemplate;
        },
        getHeaderTemplate: function () {
            return  headerTemplate;
        }
    }
});