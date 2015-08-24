'use strict';

/**
 * @ngdoc function
 * @name angularUnitTestApp.controller:Slide12
 * @description
 * # Slide 12 Controller
 * Controller of the angularUnitTestApp
 */
angular.module('angularUnitTestApp')
    .controller('Slide12Controller', ['$scope', '$controller', function($scope, $controller) {
        $controller('ListSlideController', {$scope: $scope});

        $scope.listItemsCache = [
            {id: 0, text: "E2E Testing",
                subItems: [
                    {id: 0, text: 'Write code to encapsulate Page components and functionality'},
                    {id: 1, text: 'Write tests to encapsulate App functionality. I.E. User clicks on page 1\'s button and navigates to page 2'}
                ]
            }
        ];
        $scope.listItems = [
            {id: 1, text: "Focus on Use Cases instead of Object Methods"}
        ];
    }]);
