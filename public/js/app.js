var hockeyvizApp = angular.module('hockeyvizApp', [
  'ngRoute',
  'hockeyvizControllers'
  ]);

hockeyvizApp.config(['$routeProvider',
  function($routeProvider){
    $routeProvider.
      when('/players', {
        templateUrl: '/partials/player-list.jade',
        controller: 'PlayerListController'
      }).
      when('/players/:playerId', {
        templateUrl: 'partials/player-detail.jade',
        controller: 'PlayerDetailController'
      }).
      otherwise({
        redirectTo: '/players'
      })
  }]);
