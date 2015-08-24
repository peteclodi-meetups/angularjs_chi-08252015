'use strict';

/**
 * @ngdoc function
 * @name angularUnitTestApp.controller:Slide2
 * @description
 * # Slide 2 Controller
 * Controller of the angularUnitTestApp
 */
angular.module('angularUnitTestApp')
    .controller('Slide2Controller', ['$scope', '$controller', function($scope, $controller) {
        $controller('ListSlideController', {$scope: $scope});

        $scope.listItemsCache = [
            {id: 0, text: 'Automated End 2 End(E2E) Testing'},
            {id: 1, text: 'Integration Testing'},
            {id: 2, text: 'Unit Testing'}
        ];
        $scope.listItems = [{id: 3, text: 'Manual End 2 End(E2E) Testing'}];
    }]);
