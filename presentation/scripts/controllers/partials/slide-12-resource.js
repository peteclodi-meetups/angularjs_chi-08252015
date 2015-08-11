'use strict';

/**
 * @ngdoc function
 * @name angular1xApp.controller:Slide12Resource
 * @description
 * # Slide 12 Resource Controller
 * Controller of the angular1xApp
 */
angular.module('angular1xApp')
    .controller('Slide12ResourceController', ['$scope', '$controller', function($scope, $controller) {
        $controller('ListSlideController', {$scope: $scope});

        $scope.listItemsCache = [
            {id: 0, text: "Requires the inclusion of an extra library and module", subItem: {text: "angular-resource.js and the ngResource module"}},
            {id: 1, text: "Should only be used when dealing with a RESTful API to cut down on overhead"}
        ];
        $scope.listItems = [{id: 2, text: "Wraps $http with methods geared towards RESTful APIs", subItem: {text: "get, $save, $delete, $remove and query"}}];
    }]);
