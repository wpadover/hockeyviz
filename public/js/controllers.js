var hockeyvizControllers = angular.module('hockeyvizControllers', []);

hockeyvizControllers.controller('PlayerListController', ['$scope', '$http', function($scope, $http){
  $http.get('api/players').success(function($data){
    $scope.players = $data;
  });
  
}]);

hockeyvizControllers.controller('PlayerDetailController',
  ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http){
    $http.get('api/players/' + $routeParams.playerId)
      .success(function($data){
        $scope.player = $data;
      });
  }]);
