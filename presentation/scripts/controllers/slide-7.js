'use strict';

/**
 * @ngdoc function
 * @name angular1xApp.controller:Slide7
 * @description
 * # Slide 7 Controller
 * Controller of the angular1xApp
 */
angular.module('angular1xApp')
    .controller('Slide7Controller', ['$scope', '$controller', function($scope, $controller) {
        $scope.maxPartialIndex = 2;
        $controller('PartialsSlideController', {$scope: $scope});

        $scope.routingCode = "angular.module('demoApp', ['ngResource', 'ngRoute', 'ngSanitize'])\n" +
        "   .config(['$routeProvider', function ($routeProvider) {\n" +
        "       $routeProvider\n" +
        "          .when('/', {\n" +
        "               templateUrl: 'views/main.html',\n" +
        "               controller: 'MainController'\n" +
        "           })\n" +
        "           .when('/user/:id', {\n" +
        "               templateUrl: 'views/user.html',\n" +
        "               controller: 'UserController'\n" +
        "           })\n" +
        "           .when('/single-page', {\n" +
        "               templateUrl: 'views/single-page.html',\n" +
        "               controller: 'SinglePageController'\n" +
        "           })\n" +
        "           .otherwise({\n" +
        "               redirectTo: '/'\n" +
        "           });\n" +
        "   }]);";

        $scope.locationCode = "$location.url('/user/5');";
    }]);
