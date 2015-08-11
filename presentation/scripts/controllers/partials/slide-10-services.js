'use strict';

/**
 * @ngdoc function
 * @name angular1xApp.controller:Slide10Services
 * @description
 * # Slide 10 Services Controller
 * Controller of the angular1xApp
 */
angular.module('angular1xApp')
    .controller('Slide10ServicesController', ['$scope', '$controller', function($scope, $controller) {
        $controller('ListSlideController', {$scope: $scope});

        $scope.listItemsCache = [
            {id: 0, text: "Contains the business logic of your application"},
            {id: 1, text: "Is a Singleton", subItem: {text: "typically"}}
        ];
        $scope.listItems = [{id: 2, text: "The real workhorse of AngularJS apps"}];
    }]);
