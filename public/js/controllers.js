var hockeyvizApp = angular.module('hockeyvizApp', []);

hockeyvizApp.controller('PlayerListController', function($scope, $http){
  $http.get('api/players').success(function($data){
    $scope.players = $data;
  });
  
});

