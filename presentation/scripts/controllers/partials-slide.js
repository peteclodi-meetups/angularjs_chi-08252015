'use strict';

/**
 * @ngdoc function
 * @name angularUnitTestApp.controller:PartialSlide
 * @description
 * # Partial Slide Controller
 * Controller of the angularUnitTestApp
 */
angular.module('angularUnitTestApp')
    .controller('PartialsSlideController', ['$scope', function($scope) {
        $scope.showPartial = 1;
        $scope.switchPartial = function ($event) {
            if ($event.ctrlKey) { // Move back
                if ($scope.showPartial > 1) {
                    $scope.showPartial--;
                    $scope.$root.$broadcast($scope.$root.events.unfocusNextPage);
                }
            }
            else { // Move forward
                if ($scope.showPartial < ($scope.maxPartialIndex || 1)) {
                    $scope.showPartial++;
                    if($scope.showPartial === ($scope.maxPartialIndex || 1)) {
                        $scope.$root.$broadcast($scope.$root.events.focusNextPage);
                    }
                }
            }
        };
    }]);
