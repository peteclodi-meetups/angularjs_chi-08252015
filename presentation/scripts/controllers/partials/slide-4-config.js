'use strict';

/**
 * @ngdoc function
 * @name angular1xApp.controller:Slide4Config
 * @description
 * # Slide 4 Config Controller
 * Controller of the angular1xApp
 */
angular.module('angular1xApp')
    .controller('Slide4ConfigController', ['$scope', '$controller', function($scope, $controller) {
        $controller('ListSlideController', {$scope: $scope});

        $scope.listItemsCache = [
            {id: 0, text: "Cannot use Services; only Providers, Values and Constants"}
        ];
        $scope.listItems = [{id: 1, text: "Place where the app is setup before executing"}];
    }]);
