adsApp.service('SharedContent', function SharedContent() {
    var guestHeaderTemplate = "/templates/header/guest.html";
    var userHeaderTemplate = "/templates/header/user.html";
    var headerTemplate = guestHeaderTemplate;
    return {
        setGuestHeader: function () {
            headerTemplate = guestHeaderTemplate;
        },
        setUserHeader: function () {
            headerTemplate = userHeaderTemplate;
        },
        getHeaderTemplate: function () {
            console.log("asdsadasd, " + headerTemplate );
            return  headerTemplate;
        }
    }
});