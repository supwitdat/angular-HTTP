var app = angular.module('redditApp');

// app.factory('searchService', function($http) {
//   return {
//     async: function() {
//       return $http.get('https://www.reddit.com/r/aww.json');  //1. this returns promise
//     }
//   };
// });
//
//
// app.controller('MainCtrl', function( searchService,$scope) {
//   myService.async().then(function(d) { //2. so you can use .then()
//     $scope.data = d;
//   });
// });
//
// });
