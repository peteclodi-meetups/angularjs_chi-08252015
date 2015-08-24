'use strict';

/**
 * @ngdoc function
 * @name angularUnitTestApp.controller:Slide3
 * @description
 * # Slide 3 Controller
 * Controller of the angularUnitTestApp
 */
angular.module('angularUnitTestApp')
    .controller('Slide3Controller', ['$scope', '$controller', function($scope, $controller) {
        $controller('ListSlideController', {$scope: $scope});

        $scope.listItemsCache = [
            {id: 0, text: "Repeat for every iteration of the codebase", image: "img/sad.jpg"},
            {id: 1, text: "Note any bugs" },
            {id: 2, text: "Do stuff!!!" }
        ];
        $scope.listItems = [{id: 3, text: "Launch your App in a browser"}];
    }]);
