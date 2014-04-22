var hockeyvizControllers = angular.module('hockeyvizControllers', []);

hockeyvizControllers.controller('PlayerListController', ['$scope', '$routeParams', 'Player', function($scope, $routeParams, Player){
  $scope.players = Player.query({team: $routeParams.team});
}]);

hockeyvizControllers.controller('PlayerDetailController',
  ['$scope', '$routeParams', 'Player',
  function($scope, $routeParams, Player){
    $scope.player = Player.get({playerId: $routeParams.playerId});
  }]);

hockeyvizControllers.controller('TeamListController',
  ['$scope', function($scope){
    $scope.teams = [
      'Anaheim Ducks',
      'Boston Bruins',
      'Buffalo Sabres',
      'Calgary Flames',
      'Carolina Hurricanes',
      'Chicago Blackhawks',
      'Colorado Avalanche',
      'Columbus Blue Jackets',
      'Dallas Stars',
      'Detroit Red Wings',
      'Edmonton Oilers',
      'Florida Panthers',
      'Los Angeles Kings',
      'Minnesota Wild',
      'Montreal Canadiens',
      'Nashville Predators',
      'New Jersey Devils',
      'New York Islanders',
      'New York Rangers',
      'Ottawa Senators',
      'Philadelphia Flyers',
      'Phoenix Coyotes',
      'Pittsburgh Penguins',
      'San Jose Sharks',
      'St. Louis Blues',
      'Tampa Bay Lightning',
      'Toronto Maple Leafs',
      'Vancouver Canucks',
      'Washington Capitals',
      'Winnipeg Jets'
      ];}]);
      
