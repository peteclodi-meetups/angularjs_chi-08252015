'use strict';

/**
 * @ngdoc function
 * @name angular1xApp.controller:Slide12
 * @description
 * # Slide 12 Controller
 * Controller of the angular1xApp
 */
angular.module('angular1xApp')
    .controller('Slide12Controller', ['$scope', '$controller', function($scope, $controller) {
        $controller('ListSlideController', {$scope: $scope});

        $scope.listItemsCache = [
            {id: 0, text: "Unit/Integration Testing",
                subItems: [
                    {id: 0, text: 'Handles only 1 request that EXACTLY matches the request'},
                    {id: 1, text: 'Is bound to precise ordering'},
                    {id: 2, text: 'Does not need its own response, can use those defined by when definitions'}
                ]
            },
            {id: 1, text: "E2E Testing",
                subItems: [
                    {id: 0, text: 'Write code to encapsulate Page components and functionality'},
                    {id: 1, text: 'Write tests to encapsulate App functionality. I.E. User clicks on page 1\'s button and navigates to page 2'}
                ]
            }
        ];
        $scope.listItems = [
            {id: 2, text: "Focus on Use Cases instead of Object Methods"}
        ];
    }]);
