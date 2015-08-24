'use strict';

/**
 * @ngdoc function
 * @name angularUnitTestApp.controller:Slide8HTTPBackendController
 * @description
 * # Slide 8 HTTP Backend Controller
 * Controller of the angularUnitTestApp
 */
angular.module('angularUnitTestApp')
    .controller('Slide8HTTPBackendController', ['$scope', '$controller', function($scope, $controller) {
        $controller('ListSlideController', {$scope: $scope});

        $scope.listItemsCache = [
            {id: 0, text: "expect*",
                subItems: [
                    {id: 0, text: 'Handles only 1 request that EXACTLY matches the request'},
                    {id: 1, text: 'Is bound to precise ordering'},
                    {id: 2, text: 'Does not need its own response, can use those defined by when definitions'}
                ]
            },
            {id: 1, text: "when*",
                subItems: [
                    {id: 0, text: 'Handles any number of requests that EXACTLY match the request'},
                    {id: 1, text: 'Is not bound to any order of fulfillment'},
                    {id: 2, text: 'Needs to have its own response definition'}
                ]
            }
        ];
        $scope.listItems = [
            {id: 2, text: "Provides methods for \'mock\'ing HTTP calls leaving your App" ,
                subItems: [
                    {id: 0, text: 'whenGET, whenPOST, whenPUT, whenDELETE...'},
                    {id: 1, text: 'expectGET, expectPOST, expectPUT, expectDELETE...'}
                ]
            }
        ];
    }]);
