'use strict';

/**
 * @ngdoc function
 * @name angularUnitTestApp.controller:ListSlide
 * @description
 * # List Slide Controller
 * Controller of the angularUnitTestApp
 */
angular.module('angularUnitTestApp')
    .controller('ListSlideController', ['$scope', function($scope) {
        $scope.addItems = function() {
            if($scope.listItemsCache.length > 0) {
                $scope.listItems.push($scope.listItemsCache.pop());
                if($scope.listItemsCache.length === 0) {
                    $scope.$root.$broadcast($scope.$root.events.focusNextPage);
                }
            }
        };
    }]);
