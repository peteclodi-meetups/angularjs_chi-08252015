'use strict';

/**
 * @ngdoc function
 * @name angular1xApp.controller:Slide16
 * @description
 * # Slide 16 Controller
 * Controller of the angular1xApp
 */
angular.module('angular1xApp')
    .controller('Slide16Controller', ['$scope', '$controller', function($scope, $controller) {
        $controller('ListSlideController', {$scope: $scope});

        $scope.listItemsCache = [
            {id: 0, text: "Smashing Magazine", subItem: {text: "http://www.smashingmagazine.com/"}},
            {id: 1, text: "NG-Nuggets", subItem: {text: "http://ng.malsup.com/"}},
            {id: 2, text: "Egghead.io", subItem: {text: "Short video tutorials"}},
            {id: 3, text: "YearOfMoo.com"},
            {id: 4, text: "StackOverflow.com"}
        ];
        $scope.listItems = [{id: 5, text: "AngularJS.org"}];
    }]);
