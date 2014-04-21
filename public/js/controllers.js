var hockeyvizControllers = angular.module('hockeyvizControllers', []);

hockeyvizControllers.controller('PlayerListController', ['$scope', '$routeParams', 'Player', function($scope, $routeParams, Player){
  $scope.players = Player.query({team: $routeParams.team});
}]);

hockeyvizControllers.controller('PlayerDetailController',
  ['$scope', '$routeParams', 'Player',
  function($scope, $routeParams, Player){
    $scope.player = Player.get({playerId: $routeParams.playerId});
  }]);
