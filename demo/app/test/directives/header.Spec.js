'use strict';

describe('Directive: Header', function () {

    // load the directives's module
    beforeEach(module('demoApp'));

    var $compile;
    var $scope;

    function compileDirective(scope, transcludedHtml) {
        // Compile a piece of HTML containing the directive
        var element = $compile('<header brand-name="{{brandName}}">' + transcludedHtml + '</header>')(scope);
        // fire all the watches, so the scope expression book will be evaluated
        scope.$apply();
        return element;
    }

    // Initialize the controller and a mock scope
    beforeEach(inject(function (_$compile_, _$rootScope_) {
        $compile = _$compile_;
        $scope = _$rootScope_.$new();
    }));

    it('> Verify that directive compiles and the BrandName value is stored in the Isolate Scope', function() {
        angular.extend($scope, {brandName: 'Pete Clodi\'s DemoApp'});
        var element = compileDirective($scope, '<div></div>');
        expect(element.isolateScope().brandName).toEqual('Pete Clodi\'s DemoApp');
    });

    it('> Verify that directive compiles and the transcluded html is inserted', function() {
        angular.extend($scope, {brandName: 'Pete Clodi\'s DemoApp'});
        var element = compileDirective($scope, '<h1>Testing the transclusion</h1>');
        expect(element.html()).toMatch('Testing the transclusion');
    });
});
