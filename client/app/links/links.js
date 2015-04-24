angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.data = {links: []};
  $scope.getLinks = function() {
    Links.fetchLinks().then(function(data) {
      $scope.data.links = data;
    }).catch(function(err) {
      console.error(err);
    });
    
  };
  $scope.getLinks();
  //angular.extend($scope, Links);

});

