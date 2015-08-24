'use strict';

/**
 * @ngdoc function
 * @name angularUnitTestApp.controller:Slide4
 * @description
 * # Slide 4 Controller
 * Controller of the angularUnitTestApp
 */
angular.module('angularUnitTestApp')
    .controller('Slide4Controller', ['$scope', '$controller', function($scope, $controller) {
        $controller('ListSlideController', {$scope: $scope});

        $scope.listItemsCache = [
            {id: 0, text: "E2E Testing" ,
                subItems: [
                    {id: 0, text: 'Test code like a User'},
                    {id: 1, text: 'Can only access what\'s in the DOM'},
                    {id: 2, text: 'Very different from the other techniques'}
                ]
            },
            {id: 1, text: "Integration Testing",
                subItems: [
                    {id: 0, text: 'Test code in concert with the rest of the codebase'},
                    {id: 1, text: 'Mock only dependencies external to codebase'}
                ]
            }
        ];
        $scope.listItems = [
            {id: 2, text: "Unit Testing",
                subItems: [
                    {id: 0, text: 'Test code in isolation'},
                    {id: 1, text: 'Mock all dependencies'}
                ]
            }
        ];
    }]);
