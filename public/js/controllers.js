var hockeyvizControllers = angular.module('hockeyvizControllers', []);

hockeyvizControllers.controller('PlayerListController', ['$scope', 'Player', function($scope, Player){
  $scope.players = Player.query();
}]);

hockeyvizControllers.controller('PlayerDetailController',
  ['$scope', '$routeParams', 'Player',
  function($scope, $routeParams, Player){
    $scope.player = Player.get({playerId: $routeParams.playerId});
  }]);
