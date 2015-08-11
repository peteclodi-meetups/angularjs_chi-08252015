'use strict';

/**
 * @ngdoc function
 * @name angular1xApp.directive:Paging
 * @description
 * # Paging Directive
 * Directive of the angular1xApp
 */
angular.module('angular1xApp')
    .directive('paging',
    ['$location', function ($location) {
        return {
            restrict: 'E',
            scope: {
                maxPageIndex: '='
            },
            templateUrl: '../../views/directives/paging.html',
            link: function(scope) {
                scope.currentPage = sessionStorage.currentPage ? parseInt(sessionStorage.currentPage) : 0;
                scope.prevPage = function() {
                    if(scope.currentPage > 0) {
                        sessionStorage.currentPage = --scope.currentPage;
                        $location.url('/' + scope.currentPage);
                    }
                };
                scope.nextPage = function() {
                    if(scope.currentPage < parseInt(scope.maxPageIndex)) {
                        sessionStorage.currentPage = ++scope.currentPage;
                        $location.url('/' + scope.currentPage);
                    }
                };
            }
        };
    }]);
