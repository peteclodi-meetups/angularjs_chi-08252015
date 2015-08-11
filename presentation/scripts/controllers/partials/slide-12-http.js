'use strict';

/**
 * @ngdoc function
 * @name angular1xApp.controller:Slide12HTTP
 * @description
 * # Slide 12 HTTP Controller
 * Controller of the angular1xApp
 */
angular.module('angular1xApp')
    .controller('Slide12HTTPController', ['$scope', '$controller', function($scope, $controller) {
        $controller('ListSlideController', {$scope: $scope});

        $scope.listItemsCache = [
            {id: 0, text: "Implements methods that support all of the standard Request Verbs", subItem: {text: "get, post, put, delete, head, patch, JSONP"}},
            {id: 1, text: "Calls return a promise/deferred object that supports two calls to handle responses", subItem: {text: "success(...) and error(...)"}}
        ];
        $scope.listItems = [{id: 2, text: "Service that provides a way to make AJAX calls"}];
    }]);
