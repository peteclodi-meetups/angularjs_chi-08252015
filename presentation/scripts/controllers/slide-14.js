'use strict';

/**
 * @ngdoc function
 * @name angular1xApp.controller:Slide14
 * @description
 * # Slide 14 Controller
 * Controller of the angular1xApp
 */
angular.module('angular1xApp')
    .controller('Slide14Controller', ['$scope', '$controller', function($scope, $controller) {
        $controller('ListSlideController', {$scope: $scope});

        $scope.listItemsCache = [
            {id: 0, text: "Gulp", image: "images/logos/gulp.png", subItems: [{id: 0, text: "http://gulpjs.com"}] },
            {id: 1, text: "Grunt", image: "images/logos/grunt.png", subItems: [{id: 0, text: "http://gruntjs.com"}] },
            {id: 2, text: "Bower", image: "images/logos/bower.png", subItems: [{id: 0, text: "http://bower.io"}] },
            {id: 3, text: "NPM", subItems: [{id: 0, text: "http://npmjs.com"}] }
        ];
        $scope.listItems = [{id: 4, text: "Yeoman", image: "images/logos/yeoman.png", subItems: [{id: 0, text: "http://yeoman.io"}] }];
    }]);
