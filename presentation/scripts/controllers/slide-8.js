'use strict';

/**
 * @ngdoc function
 * @name angularUnitTestApp.controller:Slide8
 * @description
 * # Slide 8 Controller
 * Controller of the angularUnitTestApp
 */
angular.module('angularUnitTestApp')
    .controller('Slide8Controller', ['$scope', '$controller', function($scope, $controller) {
        $scope.maxPartialIndex = 2;
        $controller('PartialsSlideController', {$scope: $scope});
    }]);
