var hockeyvizApp = angular.module('hockeyvizApp', [
  'ngRoute',
  'hockeyvizControllers',
  'hockeyvizServices'
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
      when('/teams', {
        templateUrl: '/partials/team-list.jade',
        controller: 'TeamListController'
      }).
      otherwise({
        redirectTo: '/teams'
      })
  }]);
