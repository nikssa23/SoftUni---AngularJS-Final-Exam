adsApp.service('adsRequester', function adsRequester($resource, $http, baseUrl, userRequester) {

    var allAdsList = $resource(baseUrl + 'ads?pagesize=10&startpage=1');

    var userAds = $resource(baseUrl + 'user/ads/:id', {
        id: "@id",
        title: '@title',
        text: '@text',
        categoryid: '@categoryid',
        townid: '@townid',
        ImageDataURL: '@ImageDataURL'
    }, {
        update: {
            method: 'PUT'
        }
    });

    function setHeaders() {
        $http.defaults.headers.common['Authorization'] = 'Bearer ' + userRequester.getToken();
    }

    function getAdsList() {
        return allAdsList.get();
    }

    function publishNewAd(ad) {
        setHeaders();
        return userAds.save(ad)
    }

    function getMyAds() {
        setHeaders();
        return userAds.get();
    }

    function getAdById(id) {
        var ad = {};
        ad.id = id;
        setHeaders();
        return userAds.get(ad);
    }

    function updateMyAd(ad) {
        return userAds.update(ad);
    }

    function deleteAd(id){
        var ad = {};
        ad.id = id;
        setHeaders();
        return userAds.delete(ad);
    }

    return {
        publishNewAd: publishNewAd,
        getAdsList: getAdsList,
        getMyAds: getMyAds,
        getAdById: getAdById,
        updateMyAd:updateMyAd,
        deleteAd:deleteAd
    }
})