adsApp.service('SharedContent', function SharedContent() {
    var guestHeaderTemplate = "/templates/header/guest.html";
    var userHeaderTemplate = "/templates/header/user.html";
    var headerTemplate = userHeaderTemplate;
    var selectedTown = null;
    var selectedCategory = null;
    var selectedPage = null;


    return {
        setGuestHeader: function () {
            headerTemplate = guestHeaderTemplate;
        },
        setUserHeader: function () {
            headerTemplate = userHeaderTemplate;
        },
        getHeaderTemplate: function () {
            return headerTemplate;
        },
        selectTown: function (town) {
            selectedTown = town;
        },
        selectCategory: function (cateogry) {
            selectedCategory = cateogry;
        },
        selectPage: function (page) {
            selectedPage = page;
        },
        getCategory: function () {
            return selectedCategory;
        },
        getTown: function () {
            return selectedTown;
        },
        getSelectedPage: function () {
            return selectedPage;
        },
        setModalMessage : function(message){
            $('#myModal').find('.modal-body').text(message);
            $('#myModal').modal('show');
        }

    }
});