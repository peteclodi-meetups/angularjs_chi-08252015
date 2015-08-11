'use strict';

/**
 * @ngdoc function
 * @name angular1xApp.controller:Slide4
 * @description
 * # Slide 4 Controller
 * Controller of the angular1xApp
 */
angular.module('angular1xApp')
    .controller('Slide4Controller', ['$scope', '$controller', function($scope, $controller) {
        $scope.maxPartialIndex = 4;
        $controller('PartialsSlideController', {$scope: $scope});

        $scope.configCode = "angular.module('demoApp', ['ngResource', 'ngRoute', 'ngSanitize'])\n" +
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


        $scope.runCode = "angular.module('demoApp', ['ngResource', 'ngRoute', 'ngSanitize'])\n" +
        ".run(['$location', function($location) {\n" +
        "       $location.url('/user/5');\n" +
        "   }]);\n"
    }]);
