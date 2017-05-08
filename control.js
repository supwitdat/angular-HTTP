var app = angular.module('redditApp', []);

app.controller('redditCtrl', function($scope, $http){

  $scope.posts = [];

  $http.get('https://www.reddit.com/r/aww.json').then(function(response){


    for (i=0; i <= 10; i++){

      var title = response.data.data.children[i].data.title;
      var author = response.data.data.children[i].data.author;
      var thumbNail = response.data.data.children[i].data.thumbnail;

      var onePost = {
                title: title,
                author: author,
                pic: thumbNail
              }

      $scope.posts.push(onePost);
    }

  });

  console.log('outside get');
  console.log($scope.posts);
});
