'use strict';

/**
 * @ngdoc function
 * @name angular1xApp.controller:Slide8MockeryController
 * @description
 * # Slide 8 Mockery Controller
 * Controller of the angular1xApp
 */
angular.module('angular1xApp')
    .controller('Slide8MockeryController', ['$scope', '$controller', function($scope, $controller) {
        $controller('ListSlideController', {$scope: $scope});

        $scope.listItemsCache = [
            {id: 0, text: "Provides testing specific implementations of some common services",
                subItems: [
                    {id: 0, text: '$controller'},
                    {id: 1, text: '$httpBackend'}
                ]
            },
            {id: 1, text: "angular.mock.inject",
                subItems: [
                    {id: 0, text: 'Creates an instance of $injector per test'},
                    {id: 1, text: 'Can be used anywhere; i.e. beforeEach, it or within the body of an it'},
                    {id: 2, text: 'Only available under Jasmine and Mocha'},
                    {id: 3, text: 'Note: beforeEach(inject(function($injector){ $q = $injector.get(\'$q\'); })); is valid'}
                ]
            }
        ];
        $scope.listItems = [
            {id: 2, text: "angular.mock.module" ,
                subItems: [
                    {id: 0, text: 'Registers a module which will be used by $injector'},
                    {id: 1, text: 'Only available under Jasmine and Mocha'}
                ]
            }
        ];
    }]);
