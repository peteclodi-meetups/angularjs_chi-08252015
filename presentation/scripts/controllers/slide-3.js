'use strict';

/**
 * @ngdoc function
 * @name angular1xApp.controller:Slide3
 * @description
 * # Slide 3 Controller
 * Controller of the angular1xApp
 */
angular.module('angular1xApp')
    .controller('Slide3Controller', ['$scope', '$controller', function($scope, $controller) {
        $controller('ListSlideController', {$scope: $scope});

        $scope.listItemsCache = [
            {id: 0, text: "angular.module('demoApp', [...])"},
            {id: 1, text: "angular.bootstrap (manual bootstrapping)", subItem: {text: "angular.bootstrap(any, ['demoApp'])"} },
            {id: 2, text: "ng-app directive (auto-bootstrapping)", subItem: {text: "<any ng-app='demoApp'>...</any>"} }
        ];
        $scope.listItems = [{id: 3, text: "Bootstrapping (Auto vs. Manual)"}];
    }]);
