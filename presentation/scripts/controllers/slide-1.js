'use strict';

/**
 * @ngdoc function
 * @name angular1xApp.controller:Slide1
 * @description
 * # Slide 1 Controller
 * Controller of the angular1xApp
 */
angular.module('angular1xApp')
    .controller('Slide1Controller', ['$scope', '$controller', function($scope, $controller) {
        $controller('ListSlideController', {$scope: $scope});

        $scope.listItemsCache = [
            {id: 0, text: '42'},
            {id: 1, text: 'Because it\'s easy until it\'s not'},
            {id: 2, text: 'Because reading a tutorial can only get you so far'}
        ];
        $scope.listItems = [{id: 3, text: 'Because AngularJS is not the only framework around'}];
    }]);
