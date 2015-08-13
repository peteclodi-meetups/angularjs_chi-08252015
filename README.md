# Discuss Unit Testing, practical implementation techniques

Presented on 8/25/2015

# Speaking Notes

 - Introduce Myself
 - Explain why I'm presenting this information
 - Explain the different types of software testing
  - Manual E2E Testing, i.e. smoke testing
  - Automated
   - Unit Testing
   - Integration Testing
   - E2E Testing
 - Tools I'm Using
  - Karma (runner)
  - Jasmine (testing framework)
  - Protractor (E2E Testing)
 - Tools I'm Not Using
  - Mocha (framework), Sinon (assertion library), Chai (assertion library)
 - Unit Testing
  - controllers
    - synchronous $scope methods
    - asynchronous $scope methods
    - 'controller as'
  - services
    - synchronous methods
    - asynchronous methods
  - filters
    - synchronous methods
    - asynchronous methods
  - directives
    - isolate scope
      - synchronous methods
      - asynchronous methods
    - shared scope
      - synchronous methods
      - asynchronous methods
    - transclusion
 - Integration Testing
   - controllers calling services
 - E2E Testing
   - It's a different way of approaching testing
   - Filling in input field and clicking button
   - Navigating to a new page