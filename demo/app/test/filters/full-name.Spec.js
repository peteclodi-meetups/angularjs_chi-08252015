'use strict';

describe('Filter: FullName', function () {

    // load the filter's module
    beforeEach(module('demoApp'));

    var $filter;

    // Initialize the controller and a mock scope
    beforeEach(inject(function (_$filter_) {
        $filter = _$filter_;
    }));

    it('> Verify that full name matches the user values', function() {
        var user = {
            _id: '55d21f29437bed5b216acbcb',
            isAwesome: true,
            firstName: 'Pete',
            lastName: 'Clodi'
        };

        expect($filter('FullName')(user)).toEqual('Pete Clodi');
    });

    describe('> Test failure Cases', function() {
        it('> Verify that full name fills in for an empty First Name property', function() {
            var user = {
                _id: '55d21f29437bed5b216acbcb',
                isAwesome: true,
                lastName: 'Clodi'
            };

            expect($filter('FullName')(user)).toEqual('John Clodi');
        });

        it('> Verify that full name fills in for an empty Last Name property', function() {
            var user = {
                _id: '55d21f29437bed5b216acbcb',
                isAwesome: true,
                firstName: 'Pete'
            };

            expect($filter('FullName')(user)).toEqual('Pete Doe');
        });

        it('> Verify that full name fills in when there are NO name properties', function() {
            var user = {
                _id: '55d21f29437bed5b216acbcb',
                isAwesome: true
            };

            expect($filter('FullName')(user)).toEqual('John Doe');
        });
    });
});
