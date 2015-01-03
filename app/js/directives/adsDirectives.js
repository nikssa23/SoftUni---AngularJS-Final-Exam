'use strict';

adsApp /* TOWNS */
    .directive("listTowns", function () {
        return {
            restrict: "A",
            templateUrl: "/templates/directives/towns/list-towns.html",
            replace: true
        }
    })
    .directive("selectTown", function () {
        return {
            restrict: "A",
            templateUrl: "/templates/directives/towns/select-town.html",
            replace: true
        }
    })
    .directive("makeActiveOnClick", function () {
        return {
            restrict: "A",
            link: function (scope, element) {
                $(element).on('click', function () {
                    var parent = $(element).parent()
                    $(parent).find("li").removeClass("active");
                    $(element).addClass("active");
                    alert($(element).attr("data-object-id"));
                })
            }
        }
    })
    /* CATEGORIES */
    .directive("listCategories", function () {
        return {
            restrict: "A",
            templateUrl: "/templates/directives/categories/list-categories.html",
            replace: true
        }
    })
    .directive("selectCategories", function () {
        return {
            restrict: "A",
            templateUrl: "/templates/directives/categories/select-category.html",
            replace: true
        }
    })
