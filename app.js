var myApp = angular.module("myApp", ["ngMessages", "ngResource", "ngRoute"]);

myApp.config(function($routeProvider) {
  // console.log($routeProvider);
  $routeProvider
    .when("/", {
      templateUrl: "pages/main.html",
      controller: "mainController"
    })
    .when("/second/", {
      templateUrl: "pages/second.html",
      controller: "secondController"
    })
    .when("/second/:num", {
      templateUrl: "pages/second.html",
      controller: "secondController"
    });
});

myApp.service("nameService", function() {
  var self = this;
  this.name = "John Doe";
  this.nameLength = function() {
    return self.name.length;
  };
});

myApp.controller("mainController", [
  "$scope",
  "$log",
  "$location",
  "nameService",
  function($scope, $log, $location, nameService) {
    $scope.people = [
      {
        name: "John Doe",
        address: "555 Main Street",
        city: "New York",
        state: "NY",
        zip: "11111"
      },
      {
        name: "Jane Doe",
        address: "333 2nd Street",
        city: "Buffalo",
        state: "NY",
        zip: "22222"
      },
      {
        name: "George Doe",
        address: "111 Third Street",
        city: "Miami",
        state: "FL",
        zip: "33333"
      }
    ];

    $scope.formattedAddress = function(person) {
      return (
        person.address +
        ", " +
        person.city +
        ", " +
        person.state +
        ", " +
        person.zip
      );
    };
    // $scope.name = nameService.name;
    // $scope.$watch("name", function() {
    //   nameService.name = $scope.name;
    // });
    // $log.log(nameService.name);
    // $log.log(nameService.nameLength());
    // $scope.name = 'Main';
    // $log.main = "Property from main";
    // $log.log($scope);
    // console.log($location.path());
    // $log.info("path ", $location.path());
  }
]);

myApp.controller("secondController", [
  "$scope",
  "$routeParams",
  "$log",
  "nameService",
  function($scope, $routeParams, $log, nameService) {
    // $scope.name = nameService.name;
    // $scope.$watch("name", function() {
    //   nameService.name = $scope.name;
    // });
    //$scope.name = "Second";
    // $scope.num = $routeParams.num || 1;
    // $log.second = "Property from second";
    // $log.log($scope);
  }
]);

myApp.directive("searchResult", function() {
  return {
    restrict: "AECM", //A = Attribute, E = Element, C = Class, M = Comment
    templateUrl: "directives/searchresult.html",
    //template: '<a href="#" class="list-group-item active"><h4 class="list-group-item-heading">Doe, John</h4><p class="list-group-item-text">555 Main St, New York, NY, 11111</p></a>',
    replace: true, //toggles the <search-result> on and off in the DOM
    scope: {
      personObject: "=",
      formattedAddressFunction: "&"
      // personName: "@",
      // personAddress: "@"
    },
    transclude: true
  };
});
// link: function(scope, elements, attrs) {
//   console.log("linking...");
//   console.log(scope);
//   if (scope.personObject.name === "Jane Doe") {
//     elements.removeAttr("class");
//   }
//   console.log(elements);
// }
// compile: function(element, attributes) {
//   console.log("compiling");
//   // element.removeAttr("class");
//   console.log(element);
//   return {
//     //not recommended to use pre link
//     // pre: function(scope, elements, attributes) {
//     //   console.log("pre-linking");
//     //   console.log(elements);
//     // },
//     post: function(scope, elements, attributes) {
//       console.log("post-linking");
//       console.log(scope);
//       if (scope.personObject.name === "Jane Doe") {
//         elements.removeAttr("class");
//       }
//       console.log(elements);
//     }
//   };
// }
// window.addEventListener("hashchange", function() {
//   console.log("Hash changed ", window.location.hash);
//   if (window.location.hash === "#/bookmark/1") {
//     console.log("Page 1 is cool");
//   }
//   if (window.location.hash === "#/bookmark/2") {
//     console.log("Let me go get Page 2.");
//   }
//   if (window.location.hash === "#/bookmark/3") {
//     console.log("Here's page 3");
//   }
// });
// $scope.handle = "";
// $scope.lowercaseHandle = function() {
//   return $filter("lowercase")($scope.handle);
// };
// $scope.length = 5;
// $scope.newRule = "";
// $scope.addRule = function() {
//   $http
//     .post("/api", { newRule: $scope.newRule })
//     .success(function(result) {
//       $scope.rules = result;
//       $scope.newRule = "";
//     })
//     .error(function(data, status) {
//       console.log(data);
//     });
// };
// $http
//   .get("/api")
//   .success(function(result) {
//     $scope.rules = result;
//   })
//   .error(function(data, status) {
//     console.log(data);
//   });
// $scope.alertClick = function() {
//   alert("Clicked!");
// };
// $scope.name = "John Doe";
// var rulesRequest = new XMLHttpRequest();
// rulesRequest.onreadystatechange = function() {
//   $scope.$apply(function() {
//     if (rulesRequest.readyState == 4 && rulesRequest.status == 200) {
//       $scope.rules = JSON.parse(rulesRequest.responseText);
//     }
//   });
// };
// rulesRequest.open("GET", "http://localhost:54765/api", true);
// rulesRequest.send();
// $scope.rules = [
//   { rulename: "Must be 5 characters" },
//   { rulename: "Must not be used elsewhere" },
//   { rulename: "Must be cool" }
// ];
// console.log($scope.rules);
// $scope.$watch("handle", function(newValue, oldValue) {
//     console.info("Changed!");
//     console.log("Old: ", oldValue);
//     console.log("New", newValue);
//   });
//   setTimeout(function() {
//     $scope.$apply(function() {
//       $scope.handle = "newTwitterHandle";
//       console.log("Scope changed!");
//     });
//   }, 3000);
// $scope.name = "Court";
// $timeout(function() {
//   $scope.name = "Everybody";
// }, 3000);
// var tb = document.getElementById("name");
// tb.addEventListener("keypress", function(event) {
//   console.log("pressed!");
// });
// console.log(tb);
// myApp.controller("mainController", function($scope, $log, $filter, $resource) {
//   $log.info($scope);
//   console.log($resource);
//   $scope.name = "John";
//   $scope.formattedName = $filter("uppercase")($scope.name);
//   $log.info($scope.name);
//   $log.info($scope.formattedName);
//   $log.log("hello.");
//   $log.info("This is some information");
//   $log.warn("Warning!");
//   $log.debug("Some debug information while writing my code");
//   $log.error("This was an error!!!");
//   console.log($log);
//   $scope.name = "Jane Doe";
//   $scope.occupation = "coder";
//   $scope.getName = function() {
//     return "John Doe";
//   };
//   $scope.getName();
//   console.log($scope);
// });
// var searchPeople = function(
//   firstName,
//   lastName,
//   $scope,
//   height,
//   age,
//   occupation
// ) {
//   return "Jane Doe";
// };
// console.log(angular.injector().annotate(searchPeople));
// var searchPeopleString = searchPeople.toString();
// console.log(searchPeopleString);
