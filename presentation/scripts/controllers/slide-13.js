'use strict';

/**
 * @ngdoc function
 * @name angular1xApp.controller:Slide13
 * @description
 * # Slide 13 Controller
 * Controller of the angular1xApp
 */
angular.module('angular1xApp')
    .controller('Slide13Controller', ['$scope', '$controller', function($scope, $controller) {
        $scope.maxPartialIndex = 2;
        $controller('PartialsSlideController', {$scope: $scope});

        $scope.protractorConfig = "// A base URL for your application under test. Calls to protractor.get() with relative paths will be prepended with this.\n" +
            "baseUrl: 'http://ng08252015.demo.meetups.local/',\n" +
            "directConnect: true,\n" +
            "chromeDriver: './node_modules/protractor/selenium/chromedriver',\n" +
            "specs: [ 'test-e2e/tests/**/*.Spec.js' ],\n" +
            "framework: 'jasmine2',\n" +
            "jasmineNodeOpts: {\n" +
            "  // If true, display spec names.\n" +
            "  isVerbose: true,\n" +
            "  // If true, print colors to the terminal.\n" +
            "  showColors: true,\n" +
            "  // If true, include stack traces in failures.\n" +
            "  includeStackTrace: true,\n" +
            "  // Default time to wait in ms before a test fails.\n" +
            "  defaultTimeoutInterval: 30 * 1000\n" +
            "},\n" +
            "// The timeout in milliseconds for each script run on the browser.\n" +
            "// This should be longer than the maximum time your application needs to stabilize between tasks.\n" +
            "allScriptsTimeout: 30 *1000,\n" +
            "multiCapabilities: [\n" +
            "  {\n" +
            "    // Desktop\n" +
            "    browserName: 'chrome',\n" +
            "    chromeOptions : {\n" +
            "      args: [\n" +
            "        '--lang=en',\n" +
            "        '--window-position=0,250',\n" +
            "        '--window-size=1200,1080'\n" +
            "      ]\n" +
            "    }\n" +
            "  }\n" +
            "]";

        $scope.protractorGruntConfig = "protractor: {\n" +
            "  options: {\n" +
            "    configFile: 'protractor.conf.js', // Default config file\n" +
            "    noColor: false, // If true, protractor will not use colors in its output.\n" +
            "    keepAlive: true // If false, the grunt process stops when the test fails.\n" +
            "  },\n" +
            "  app: {   // Grunt requires at least one target to run so you can simply put 'all: {}' here too.\n" +
            "    options: {\n" +
            "      args: {\n" +
            "      } // Target-specific arguments\n" +
            "    }\n" +
            "  },\n" +
            "  dev: {   // Grunt requires at least one target to run so you can simply put 'all: {}' here too.\n" +
            "    options: {\n" +
            "      args: {\n" +
            "        params: { env: 'dev' }\n" +
            "      } // Target-specific arguments\n" +
            "    }\n" +
            "  },\n" +
            "  prod: {   // Grunt requires at least one target to run so you can simply put 'all: {}' here too.\n" +
            "    options: {\n" +
            "      args: {\n" +
            "        params: { env: 'prod' }\n" +
            "      } // Target-specific arguments\n" +
            "    }\n" +
            "  }\n" +
            "}";
        }
    ]);