'use strict';

/**
 * @ngdoc function
 * @name angularUnitTestApp.controller:Slide14
 * @description
 * # Slide 14 Controller
 * Controller of the angularUnitTestApp
 */
angular.module('angularUnitTestApp')
    .controller('Slide14Controller', ['$scope', '$controller', function($scope, $controller) {
        $scope.maxPartialIndex = 4;
        $controller('PartialsSlideController', {$scope: $scope});

        $scope.htmlCode = "<section class=\"all-users\">\n" +
        "  <h1>All Users</h1>\n" +
        "  <div class=\"users-list\">\n" +
        "    <div class=\"header-row\">\n" +
        "      <input type=\"checkbox\" ng-model=\"selectAll\" ng-click=\"toggleSelectAll()\"\n" +
        "             title=\"{{selectAll ? 'Select None' : 'Select All'}}\">\n" +
        "      <span>Name</span>\n" +
        "      <span>Are they Awesome?</span>\n" +
        "    </div>\n" +
        "    <div class=\"user-row\" ng-repeat=\"user in users track by user._id\">\n" +
        "      <input type=\"checkbox\" ng-click=\"userSelectionToggled()\" ng-model=\"user.selected\">\n" +
        "      <span>{{user | FullName}}</span>\n" +
        "      <span>{{user.isAwesome ? 'Hell Yeah!' : 'Naw'}}</span>\n" +
        "      <a ng-click=\"editUser(user)\">edit</a>\n" +
        "    </div>\n" +
        "    <button ng-click=\"deleteSelectedUsers()\" ng-disabled=\"!anySelected\">\n" +
        "      Delete Selected Users\n" +
        "    </button>\n" +
        "  </div>\n" +
        "</section>";

        $scope.pageCode = "var UserRow = require('../controls/user-row');\n" +
            "function UsersPage() {\n" +
            "  this.init = function() {\n" +
            "    this.users = element.all(by.repeater('user in users'));\n" +
            "  };\n" +
            "  this.get = function() {\n" +
            "    return browser.get('/');\n" +
            "  };\n" +
            "  this.getUsersCount = function() {\n" +
            "    return this.users.count();\n" +
            "  };\n" +
            "  this.getUserByName = function(name) {\n" +
            "    return this.users.filter(function(userRow) {\n" +
            "      return new UserRow(userRow).getName().then(function(text) {\n" +
            "        return text === name;\n" +
            "      });\n" +
            "    });\n" +
            "  };\n" +
            "  this.init();\n" +
            "}\n" +
            "module.exports = UsersPage;";

        $scope.controlCode = "function UserRow(userRowElement) {\n" +
            "  var mainElement = userRowElement;\n" +
            "  this.checkbox = mainElement.element(by.model('user.selected'));\n" +
            "  this.name = mainElement.element(by.binding('user | FullName'));\n" +
            "  this.awesomeQuestion = mainElement.element(by.binding('user.isAwesome'));\n" +
            "  this.editLink = mainElement.element(by.linkText('edit'));\n\n" +
            "  this.selectUser = function() {\n" +
            "    return this.checkbox.click();\n" +
            "  };\n" +
            "  this.getName = function() {\n" +
            "    return this.name.getText();\n" +
            "  };\n" +
            "  this.awesomenessQuestion = function() {\n" +
            "    return this.awesomeQuestion.getText();\n" +
            "  };\n" +
            "  this.clickEditLink = function() {\n" +
            "    return this.editLink.click();\n" +
            "  };\n" +
            "}\n" +
            "module.exports = UserRow;";

        $scope.testCode = "var UsersPage = require('../pages/users'), UserPage = require('../pages/user'),\n" +
            "UserRow = require('../controls/user-row');\n" +
            "describe('Edit a User', function() {\n" +
            "  var usersPage = new UsersPage();\n" +
            "  beforeEach(function() {\n" +
            "    usersPage.get();\n" +
            "  });\n" +
            "  it('> Edit the user \"Pete Clodi\" ', function() {\n" +
            "    usersPage.getUserByName('Pete Clodi').then(function(usersOfName) {\n" +
            "      (new UserRow(usersOfName[0])).clickEditLink().then(function() {\n" +
            "        var userPage = new UserPage();\n" +
            "        userPage.firstName('Peter John').then(function() {\n" +
            "          userPage.commitUserValues().then(function() {\n" +
            "            usersPage = new UsersPage();\n" +
            "            usersPage.getUserByName('Peter John Clodi').then(function(usersOfName) {\n" +
            "              expect(usersOfName.length).toBeGreaterThan(0);\n" +
            "            }); }); }); }); });\n" +
            "  });\n" +
            "});";
    }]);
