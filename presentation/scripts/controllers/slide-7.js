'use strict';

/**
 * @ngdoc function
 * @name angular1xApp.controller:Slide7
 * @description
 * # Slide 7 Controller
 * Controller of the angular1xApp
 */
angular.module('angular1xApp')
    .controller('Slide7Controller', ['$scope', function($scope) {
        $scope.karmaConfig = "autoWatch: true,\n" +
            "// base path, that will be used to resolve files and exclude\n" +
            "basePath: '',\n" +
            "frameworks: ['jasmine'],\n" +
            "// list of files / patterns to load in the browser\n" +
            "files: ['scripts/**/*.js', 'views/**/*.html', 'test/**/*.js'],\n" +
            "preprocessors: {\n" +
            "    'scripts/**/*.js': ['coverage'],\n" +
            "    // compile all of the templates into the $templateCache\n" +
            "    'views/**/*.html': ['ng-html2js']\n" +
            "},\n" +
            "ngHtml2JsPreprocessor: {\n" +
            "    // setting this option will create only a single module that contains templates\n" +
            "    // from all the files, so you can load them all with module('packbackApp')\n" +
            "    moduleName: 'demoApp'\n" +
            "},\n" +
            "// test results reporter to use possible values: 'dots', 'progress'\n" +
            "// available reporters: https://npmjs.org/browse/keyword/karma-reporter\n" +
            "reporters: ['progress', 'coverage'],\n" +
            "browsers: ['PhantomJS'],\n" +
            "// Continuous Integration mode\n" +
            "singleRun: false,"
    }]);
