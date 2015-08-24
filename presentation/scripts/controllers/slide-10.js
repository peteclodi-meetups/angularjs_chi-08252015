'use strict';

/**
 * @ngdoc function
 * @name angularUnitTestApp.controller:Slide10
 * @description
 * # Slide 10 Controller
 * Controller of the angularUnitTestApp
 */
angular.module('angularUnitTestApp')
    .controller('Slide10Controller', ['$scope', '$controller', function($scope, $controller) {
        $scope.maxPartialIndex = 5;
        $controller('PartialsSlideController', {$scope: $scope});

        $scope.controllerSyncCode = "angular.module('demoApp').controller('UsersController', function ($scope) {\n" +
            "  $scope.editUser = function(user) {\n" +
            "    $location.url($scope.$root.routePaths.user + '/' + user._id);\n" +
            "  };\n" +
            "});";
        $scope.controllerSyncTestCode = "describe('Controller: UsersController', function () {\n" +
            "  beforeEach(module('demoApp'));\n" +
            "  var $controller, $scope, $location;\n" +
            "  function createController(scope) {\n" +
            "    return $controller('UsersController', {$scope: scope});\n" +
            "  }\n" +
            "  beforeEach(inject(function (_$controller_, _$rootScope_, _$location_) {\n" +
            "    $controller = _$controller_;\n" +
            "    angular.extend(_$rootScope_, {routePaths: _RoutePaths_});\n" +
            "    $scope = _$rootScope_.$new();\n" +
            "    $location = _$location_;\n" +
            "  }));\n" +
            "  it('> Verify that the User Editing page is loaded properly', function() {\n" +
            "    ...\n" +
            "    $location.url($scope.$root.routePaths.users);\n" +
            "    createController($scope);\n" +
            "    $scope.editUser(users[0]);\n" +
            "    expect($location.url()).toMatch($scope.$root.routePaths.user + '/' + users[0]._id);\n" +
            "    ...\n" +
            "  });\n" +
            "});";

        $scope.controllerAsyncCode = "angular.module('demoApp').controller('UsersController', ['$scope', 'Users', function ($scope, Users) {\n" +
            "  function retrieveUsers() { $scope.users = Users.query(); }\n" +
            "  retrieveUsers();\n" +
            "}]);";
        $scope.controllerAsyncTestCode = "describe('Controller: UsersController', function () {\n" +
            "  beforeEach(module('demoApp'));\n" +
            "  var $controller, $scope, $httpBackend;\n" +
            "  function createController(scope) {\n" +
            "    return $controller('UsersController', {$scope: scope});\n" +
            "  }\n" +
            "  beforeEach(inject(function (_$controller_, _$rootScope_, _$httpBackend_) {\n" +
            "    $controller = _$controller_; $scope = _$rootScope_.$new(); $httpBackend = _$httpBackend_;\n" +
            "  }));\n" +
            "  afterEach(function() {\n" +
            "    $httpBackend.verifyNoOutstandingExpectation();\n" +
            "    $httpBackend.verifyNoOutstandingRequest();\n" +
            "  });\n" +
            "  it('> Verify that users are retrieved properly', function() {\n" +
            "    $httpBackend.whenGET('http://0.0.0.0:4000/users').respond(function() {return [200, users, {}];});\n" +
            "    createController($scope);\n" +
            "    $scope.users.$promise.then(function() {\n" +
            "      expect($scope.users.length).toEqual(users.length);\n" +
            "    });\n" +
            "    $httpBackend.flush();\n" +
            "  });\n" +
            "});";

        $scope.controllerAsCode = "angular.module('demoApp').controller('UserController', ['$routeParams', 'Users', function ($routeParams, Users) {\n" +
            "  if(angular.isDefined($routeParams.id)) {\n" +
            "    this.user = Users.get({userId: $routeParams.id});\n" +
            "  }else {\n" +
            "    this.user = { isAwesome: true };\n" +
            "  }";
        $scope.controllerAsTestCode = "describe('Controller: UserController', function () {\n" +
            "  beforeEach(module('demoApp'));\n" +
            "  var $controller, $routeParams;\n" +
            "  function createController(routeParams) {\n" +
            "    return $controller('UserController', {$routeParams: routeParams});\n" +
            "  }\n" +
            "  beforeEach(inject(function (_$controller_, _$routeParams_) {\n" +
            "    $controller = _$controller_; $routeParams = _$routeParams_;\n" +
            "  }));\n" +
            "  it('> Verify that user is retrieved properly', function() {\n" +
            "    ...\n" +
            "    $routeParams.id = '55d21f29437bed5b216acbcb';\n" +
            "    var controller = createController($routeParams);\n" +
            "    controller.user.$promise.then(function() {\n" +
            "      expect(controller.isUpdate).toBeTruthy();\n" +
            "      expect(controller.user._id).toEqual('55d21f29437bed5b216acbcb');\n" +
            "    });\n" +
            "    ...\n" +
            "  });\n" +
            "});";

        $scope.serviceSyncCode = "userDeletionProcessor.getUsersMarkedForDeletion = function(users) {\n" +
            "  if(angular.isArray(users)) {\n" +
            "    return users.filter(function(user) { return user.selected; });\n" +
            "  }\n" +
            "  return [];\n" +
            "};";
        $scope.serviceSyncTestCode = "describe('Service: UserDeletionProcessor', function () {\n" +
            "  beforeEach(module('demoApp'));\n" +
            "  var UserDeletionProcessor, localUsers;\n" +
            "  beforeEach(inject(function (_UserDeletionProcessor_) {\n" +
            "    UserDeletionProcessor = _UserDeletionProcessor_;\n" +
            "    localUsers = angular.copy(users);\n" +
            "  }));\n" +
            "  it('> Verify only users where \"selected === true\" are returned', function() {\n" +
            "    localUsers.forEach(function(user, index) {\n" +
            "      user.selected = index % 2;\n" +
            "    });\n" +
            "    var selectedUsers = UserDeletionProcessor.getUsersMarkedForDeletion(localUsers);\n" +
            "    expect(selectedUsers.length).toEqual(Math.floor(localUsers.length / 2));\n" +
            "    expect(selectedUsers.every(function(user) { return user.selected; })).toBeTruthy();\n" +
            "  });\n" +
            "});";

        $scope.serviceAsyncCode = "userDeletionProcessor.deleteUsers = function(users) {\n" +
            "  var deferred = $q.defer();\n" +
            "  users.forEach(function(user) {\n" +
            "    deletedUsers[user._id] = false;\n" +
            "    user.$delete({userId: user._id},\n" +
            "      function() { deletedUsers[user._id] = true; if(deletedUsers.isFullyCompleted()) { deferred.resolve(); } },\n" +
            "      function() { deletedUsers[user._id] = true; if(deletedUsers.isFullyCompleted()) { deferred.reject(); }\n" +
            "    });\n" +
            "  });\n" +
            "  return deferred.promise;\n" +
            "};";
        $scope.serviceAsyncTestCode = "it('> Verify that delete processing is running correctly', function() {\n" +
            "  $httpBackend.whenGET('http://0.0.0.0:4000/users').respond(function() { return [200, users, {}]; });\n" +
            "  localUsers = Users.query(function() {\n" +
            "    localUsers.forEach(function(user, index) { user.selected = index % 2; });\n" +
            "    var selectedUsers = UserDeletionProcessor.getUsersMarkedForDeletion(localUsers);\n" +
            "    selectedUsers.forEach(function(user) {\n" +
            "      $httpBackend.whenDELETE('http://0.0.0.0:4000/users/' + user._id).respond(function() {return [ 200, user, {} ];});\n" +
            "    });\n" +
            "    UserDeletionProcessor.deleteUsers(selectedUsers).then(function() {\n" +
            "      expect(true).toBeTruthy();\n" +
            "    });\n" +
            "  });\n" +
            "  $httpBackend.flush();\n" +
            "});";
    }]);
