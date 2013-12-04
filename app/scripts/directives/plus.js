'use strict';

angular.module('gdgPlus', [])
    .directive('plusBadge', ['$timeout', '$window', function() {
        return {
            restrict: 'AEC',
            template: '<div class="g-page" data-layout="landscape" data-rel="publisher"></div>',
            scope: {
                plusid: "@plusid"
            },
            controller: ['$scope', '$http', function($scope, $http) {

            }],
            link: function(scope, iElement, iAttrs) {
                iElement[0].children[0].setAttribute('data-href', "//plus.google.com/"+scope.plusid);
                iElement[0].children[0].setAttribute('data-width', iElement[0].offsetWidth);
                gapi.page.go(iElement[0]);
            }
        };
    }])
    .directive('plusShare', ['$timeout', '$window', function() {
        return {
            restrict: 'AEC',
            template: '',
            scope: {
                href: "@href"
            },
            controller: ['$scope', '$http', function($scope, $http) {

            }],
            link: function(scope, iElement, iAttrs) {
                //gapi.plus.render(iElement[0], { action: "share", href: scope.href });
            }
        };
    }])
    .directive('plusOne', ['$timeout', '$window', function() {
        return {
            restrict: 'AEC',
            template: '',
            scope: {
                href: "@href"
            },
            controller: ['$scope', '$http', function($scope, $http) {

            }],
            link: function(scope, iElement, iAttrs) {
                //gapi.plusone.render(iElement[0], { href: scope.href });
            }
        };
    }])
    .directive('plusActivities', ['$timeout', '$window', function() {
        return {
            restrict: 'AEC',
            templateUrl: 'views/directives/plus_activities',
            scope: {
                href: "@href"
            },
            controller: ['$scope', '$http', function($scope, $http) {
                $http.get('https://www.googleapis.com/plus/v1/people/114125193250240340259/activities/public?maxResults=10&key=AIzaSyCas2U13aKrZOC3wBvzJ-8e1k1GaYCi9GQ').success(function(stream) {
                    $scope.stream = stream;
                });
                $http.get('https://www.googleapis.com/plus/v1/people/114125193250240340259/activities/public?maxResults=10&key=AIzaSyCas2U13aKrZOC3wBvzJ-8e1k1GaYCi9GQ').success(function(stream) {
                    $scope.muh = stream;
                    $scope.muh.items.reverse();
                });
            }],
            link: function(scope, iElement, iAttrs) {

            }
        };
    }]);