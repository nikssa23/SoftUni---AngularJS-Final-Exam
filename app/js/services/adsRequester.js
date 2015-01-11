adsApp.service('adsRequester', function adsRequester($resource, $http, baseUrl, pageSize, userRequester, SharedContent) {

    var allAdsList = $resource(baseUrl + 'ads?pagesize=10&startpage=1');

    var userAds = $resource(baseUrl + 'user/ads/:id', {
        id: "@id",
        title: '@title',
        text: '@text',
        categoryid: '@categoryid',
        townid: '@townid',
        ImageDataURL: '@ImageDataURL',
        changeimage: "@changeImage"
    }, {
        update: {
            method: 'PUT'
        }
    });

    var userAdsPublishAgain = $resource(baseUrl + 'user/ads/publishagain/:id', {
        id: "@id"
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

    function deleteAd(id) {
        var ad = {};
        ad.id = id;
        setHeaders();
        return userAds.delete(ad);
    }

    function getAdsByFilter() {
        var filterUrl = baseUrl + 'ads';
        if (SharedContent.getTown() != null) {
            filterUrl += '?townid=' + SharedContent.getTown();
        }

        if (SharedContent.getCategory() != null) {
            if (SharedContent.getTown() == null) {
                filterUrl += '?';
            } else {
                filterUrl += "&";
            }
            filterUrl += 'categoryid=' + SharedContent.getCategory();
        }

        if (SharedContent.getSelectedPage() !== null) {
            if (SharedContent.getCategory() !== null || SharedContent.getTown() !== null) {
                filterUrl += '&';
            } else {
                filterUrl += "?";
            }
            filterUrl += 'pagesize=' + pageSize + '&startpage=' + SharedContent.getSelectedPage();
        }

        var resourceUrl = $resource(filterUrl);
        //  setHeaders();
        return resourceUrl.get();
    }

    function PublishAdAgain(ad) {
        setHeaders();
        return userAdsPublishAgain.update(ad);
    }

    return {
        publishNewAd: publishNewAd,
        getAdsList: getAdsList,
        getMyAds: getMyAds,
        getAdById: getAdById,
        updateMyAd: updateMyAd,
        deleteAd: deleteAd,
        getAdsByFilter: getAdsByFilter,
        PublishAdAgain:PublishAdAgain
    }
})