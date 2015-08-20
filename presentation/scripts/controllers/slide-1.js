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
            {id: 0, text: 'Because a handful of Unit Tests does not a Test Suite make'},
            {id: 1, text: 'Because you\'ve probably not had a chance to implement it yourself'},
            {id: 2, text: 'Because every organization loves testing...until they have to pay for it'}
        ];
        $scope.listItems = [{id: 3, text: 'Manual Testing...UGH!', subItems: [{id: 0, text: 'I know, right!?'}] }];
    }]);
