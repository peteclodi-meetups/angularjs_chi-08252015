'use strict';

/**
 * @ngdoc function
 * @name angular1xApp.config:Routing
 * @description
 * # Routing Configuration
 * Config block of the angular1xApp
 */
angular.module('angular1xApp')
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {
                redirectTo: '/0'
            })
            .when('/0', {
                templateUrl: 'views/slide-0.html'
            })
            .when('/1', {
                templateUrl: 'views/slide-1.html',
                controller: 'Slide1Controller'
            })
            .when('/2', {
                templateUrl: 'views/slide-2.html',
                controller: 'Slide2Controller'
            })
            .when('/3', {
                templateUrl: 'views/slide-3.html',
                controller: 'Slide3Controller'
            })
            .when('/4', {
                templateUrl: 'views/slide-4.html',
                controller: 'Slide4Controller'
            })
            .when('/5', {
                templateUrl: 'views/slide-5.html',
                controller: 'Slide5Controller'
            })
            .when('/6', {
                templateUrl: 'views/slide-6.html'
            })
            .when('/7', {
                templateUrl: 'views/slide-7.html',
                controller: 'Slide7Controller'
            })
            .when('/8', {
                templateUrl: 'views/slide-8.html',
                controller: 'Slide8Controller'
            })
            .when('/9', {
                templateUrl: 'views/slide-9.html',
                controller: 'Slide9Controller'
            })
            .when('/10', {
                templateUrl: 'views/slide-10.html',
                controller: 'Slide10Controller'
            })
            .when('/11', {
                templateUrl: 'views/slide-11.html'
            })
            .when('/12', {
                templateUrl: 'views/slide-12.html',
                controller: 'Slide12Controller'
            })
            .when('/13', {
                templateUrl: 'views/slide-13.html',
                controller: 'Slide13Controller'
            })
            .when('/14', {
                templateUrl: 'views/slide-14.html',
                controller: 'Slide14Controller'
            })
            .when('/15', {
                templateUrl: 'views/slide-15.html'
            })
            .otherwise({
                redirectTo: '/'
            });
    }]);
