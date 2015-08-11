'use strict';

/**
 * @ngdoc function
 * @name angular1xApp.controller:Slide8Controller
 * @description
 * # Slide 8 Controller Controller
 * Controller of the angular1xApp
 */
angular.module('angular1xApp')
    .controller('Slide8ControllerController', ['$scope', '$controller', function($scope, $controller) {
        $controller('ListSlideController', {$scope: $scope});

        $scope.listItemsCache = [
            {id: 0, text: "Interacts with its template(s) through the $scope object"},
            {id: 1, text: "Can interact with Services, Values, Constants and Filters"}
        ];
        $scope.listItems = [{id: 2, text: "The page's codebase"}];
    }]);
