'use strict';

/**
 * @ngdoc function
 * @name angularUnitTestApp.directive:Paging
 * @description
 * # Paging Directive
 * Directive of the angularUnitTestApp
 */
angular.module('angularUnitTestApp')
    .directive('paging',
    ['$location', function ($location) {
        return {
            restrict: 'E',
            scope: {
                maxPageIndex: '='
            },
            templateUrl: '../../views/directives/paging.html',
            link: function(scope) {
                function navigateToPage(pageNumber) {
                    sessionStorage.currentPage = pageNumber;
                    scope.highlightNextPage = false;
                    $location.url('/' + pageNumber);
                }

                scope.currentPage = sessionStorage.currentPage ? parseInt(sessionStorage.currentPage) : 0;
                scope.prevPage = function() {
                    if(scope.currentPage > 0) {
                        navigateToPage(--scope.currentPage);
                    }
                };
                scope.nextPage = function() {
                    if(scope.currentPage < parseInt(scope.maxPageIndex)) {
                        navigateToPage(++scope.currentPage);
                    }
                };

                scope.$on(scope.$root.events.focusNextPage, function() {
                    scope.highlightNextPage = true;
                });

                scope.$on(scope.$root.events.unfocusNextPage, function() {
                    scope.highlightNextPage = false;
                });
            }
        };
    }]);
