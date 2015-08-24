'use strict';

/**
 * @ngdoc function
 * @name angularUnitTestApp.controller:Slide5
 * @description
 * # Slide 5 Controller
 * Controller of the angularUnitTestApp
 */
angular.module('angularUnitTestApp')
    .controller('Slide5Controller', ['$scope', '$controller', function($scope, $controller) {
        $controller('ListSlideController', {$scope: $scope});

        $scope.listItemsCache = [
            {id: 0, text: 'Protractor', image: '/img/logos/protractor.png',
                subItems: [
                    {id: 0, text: 'Framework extension that adds AngularJS specific locators'}
                ]
            },
            {id: 1, text: 'Jasmine', image: '/img/logos/jasmine.png'}
        ];
        $scope.listItems = [{id: 2, text: 'Karma', image: '/img/logos/karma.png',
            subItems: [
                {id: 0, text: 'Runs the tests in the various browsers'}
            ]
        }];
    }]);
