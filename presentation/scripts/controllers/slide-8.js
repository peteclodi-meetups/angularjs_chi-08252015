'use strict';

/**
 * @ngdoc function
 * @name angular1xApp.controller:Slide8
 * @description
 * # Slide 8 Controller
 * Controller of the angular1xApp
 */
angular.module('angular1xApp')
    .controller('Slide8Controller', ['$scope', '$controller', function($scope, $controller) {
        $scope.maxPartialIndex = 2;
        $controller('PartialsSlideController', {$scope: $scope});
    }]);
