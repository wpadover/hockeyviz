var hockeyvizServices = angular.module('hockeyvizServices', ['ngResource']);

hockeyvizServices.factory('Player', ['$resource', function($resource){
  return $resource('api/players/:playerId', {}, {
    query: { method: 'GET', params: {playerId:''}, isArray: true}
  });
}]);
