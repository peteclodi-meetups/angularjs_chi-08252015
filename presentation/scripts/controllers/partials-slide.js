'use strict';

/**
 * @ngdoc function
 * @name angular1xApp.controller:PartialSlide
 * @description
 * # Partial Slide Controller
 * Controller of the angular1xApp
 */
angular.module('angular1xApp')
    .controller('PartialsSlideController', ['$scope', function($scope) {
        $scope.showPartial = 1;
        $scope.switchPartial = function ($event) {
            if ($event.ctrlKey) { // Move back
                if ($scope.showPartial > 1) {
                    $scope.showPartial--;
                }
            }
            else { // Move forward
                if ($scope.showPartial < ($scope.maxPartialIndex || 1)) {
                    $scope.showPartial++;
                }
            }
        };
    }]);
