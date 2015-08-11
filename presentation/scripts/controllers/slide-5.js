'use strict';

/**
 * @ngdoc function
 * @name angular1xApp.controller:Slide5
 * @description
 * # Slide 5 Controller
 * Controller of the angular1xApp
 */
angular.module('angular1xApp')
    .controller('Slide5Controller', ['$scope', '$controller', function($scope, $controller) {
        $controller('ListSlideController', {$scope: $scope});

        $scope.listItemsCache = [
            {id: 0, text: "When 'injected' a 'thing' is searched for in the module's cache and instantiated if necessary"},
            {id: 1, text: "All 'things' must be registered with the angular.module", subItem: {text: "angular.module('demoApp', [...]).factory('demoFactory').service('demoService').controller('demoController')"}}
        ];
        $scope.listItems = [{id: 2, text: "It's Magic!!!", subItem: {text: "Just kidding, it's only mapping and caching"}}];
    }]);
