'use strict';

/**
 * @ngdoc function
 * @name angular1xApp.controller:Slide4Run
 * @description
 * # Slide 4 Run Controller
 * Controller of the angular1xApp
 */
angular.module('angular1xApp')
    .controller('Slide4RunController', ['$scope', '$controller', function($scope, $controller) {
        $controller('ListSlideController', {$scope: $scope});

        $scope.listItemsCache = [
            {id: 0, text: "Cannot use Providers; only Services, Values, Constants and Filters"}
        ];
        $scope.listItems = [{id: 1, text: "Place for the app's startup code"}];
    }]);
