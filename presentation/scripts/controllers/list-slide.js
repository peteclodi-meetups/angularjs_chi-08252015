'use strict';

/**
 * @ngdoc function
 * @name angular1xApp.controller:ListSlide
 * @description
 * # List Slide Controller
 * Controller of the angular1xApp
 */
angular.module('angular1xApp')
    .controller('ListSlideController', ['$scope', function($scope) {
        $scope.addItems = function() {
            if($scope.listItemsCache.length > 0) {
                $scope.listItems.push($scope.listItemsCache.pop());
            }
        };
    }]);
