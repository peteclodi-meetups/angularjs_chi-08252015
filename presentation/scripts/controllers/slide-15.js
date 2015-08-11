'use strict';

/**
 * @ngdoc function
 * @name angular1xApp.controller:Slide15
 * @description
 * # Slide 15 Controller
 * Controller of the angular1xApp
 */
angular.module('angular1xApp')
    .controller('Slide15Controller', ['$scope', '$controller', function($scope, $controller) {
        $controller('ListSlideController', {$scope: $scope});

        $scope.listItemsCache = [
            {id: 0, text: "It won't blow up your world!!!", subItem: {text: "Learn more at http://angular.io"}},
            {id: 1, text: "Backwards compatible with Angular 1.x", subItem: {text: "Most of the compatibility will appear in 1.4"}},
            {id: 2, text: "Built upon components"},
            {id: 3, text: "Built to take advantage of ES6"}
        ];
        $scope.listItems = [{id: 4, text: "Still in Alpha"}];
    }]);
