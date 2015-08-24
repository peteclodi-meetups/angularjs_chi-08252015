'use strict';

/**
 * @ngdoc function
 * @name angularUnitTestApp.controller:Slide9
 * @description
 * # Slide 9 Controller
 * Controller of the angularUnitTestApp
 */
angular.module('angularUnitTestApp')
    .controller('Slide9Controller', ['$scope', '$controller', function($scope, $controller) {
        $scope.maxPartialIndex = 2;
        $controller('PartialsSlideController', {$scope: $scope});

        $scope.filterCode = "angular.module('demoApp').filter('FullName', [function () {\n" +
            "  return function(user) {\n" +
            "    return (user.firstName || 'John') + ' ' + (user.lastName || 'Doe');\n" +
            "  }\n" +
            "}]);";
        $scope.filterTestCode = "describe('Filter: FullName', function () {\n" +
            "  beforeEach(module('demoApp'));\n" +
            "  var $filter;\n" +
            "  beforeEach(inject(function (_$filter_) { $filter = _$filter_; }));\n\n" +
            "  it('> Verify that full name matches the user values', function() {\n" +
            "    var user = { _id: '55d21f29437bed5b216acbcb', isAwesome: true, firstName: 'Pete', lastName: 'Clodi' };\n" +
            "    expect($filter('FullName')(user)).toEqual('Pete Clodi');\n" +
            "  });\n\n" +
            "  describe('> Test failure Cases', function() {\n" +
            "    it('> Verify that full name fills in for an empty First Name property', function() {\n" +
            "      var user = { _id: '55d21f29437bed5b216acbcb', isAwesome: true, lastName: 'Clodi' };\n" +
            "      expect($filter('FullName')(user)).toEqual('John Clodi');\n" +
            "    });\n\n" +
            "    it('> Verify that full name fills in for an empty Last Name property', function() {\n" +
            "      var user = { _id: '55d21f29437bed5b216acbcb', isAwesome: true, firstName: 'Pete' };\n" +
            "      expect($filter('FullName')(user)).toEqual('Pete Doe'); \n" +
            "    });\n" +
            "  });\n" +
            "});";

        $scope.headerCode = "angular.module('demoApp').directive('header', [function () {\n" +
            "  return {\n" +
            "    restrict: 'E',\n" +
            "    scope: { brandName: '@' },\n" +
            "    templateUrl: 'views/directives/header.html',\n" +
            "    transclude: true\n" +
            "  };\n" +
            "}]);";
        $scope.headerTestCode = "describe('Directive: Header', function () {\n" +
            "  beforeEach(module('demoApp'));\n" +
            "  var $compile, $scope;\n" +
            "  function compileDirective(scope, transcludedHtml) {\n" +
            "    var element =\n" +
            "      $compile(\'<header brand-name=\"{{brandName}}\">' + transcludedHtml + '</header>')(scope);\n" +
            "    scope.$apply(); return element;\n" +
            "  }\n" +
            "  beforeEach(inject(function (_$compile_, _$rootScope_) {\n" +
            "    $compile = _$compile_;  $scope = _$rootScope_.$new();\n" +
            "    angular.extend($scope, {brandName: \"Pete Clodi\'s DemoApp\"});\n" +
            "  }));\n" +
            "  it('> Verify that the BrandName value is stored in the Isolate Scope', function() {\n" +
            "    var element = compileDirective($scope, '<div></div>');\n" +
            "    expect(element.isolateScope().brandName).toEqual(\"Pete Clodi\'s DemoApp\");\n" +
            "  });\n" +
            "  it('> Verify that the transcluded html is inserted', function() {\n" +
            "    var element = compileDirective($scope, '<h1>Testing the transclusion</h1>');\n" +
            "    expect(element.html()).toMatch('Testing the transclusion');\n" +
            "  });\n" +
            "});";
    }]);
