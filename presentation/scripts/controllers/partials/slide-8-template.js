'use strict';

/**
 * @ngdoc function
 * @name angular1xApp.controller:Slide8Template
 * @description
 * # Slide 8 Template Controller
 * Controller of the angular1xApp
 */
angular.module('angular1xApp')
    .controller('Slide8TemplateController', ['$scope', '$controller', function($scope, $controller) {
        $controller('ListSlideController', {$scope: $scope});

        $scope.listItemsCache = [
            {id: 0, text: "AngularJS specific Expressions", subItem: {text: "<span>{{item.value}}</span>"}},
            {id: 1, text: "AngularJS specific Directives", subItem: {text: "<span ng-if='visibilityFlag'>...</span>"}},
            {id: 2, text: "Standard HTML syntax"}
        ];
        $scope.listItems = [{id: 3, text: "Here's the page's HTML...sorta"}];
    }]);
