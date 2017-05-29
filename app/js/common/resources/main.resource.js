module.exports = angular
  .module('main.resource', [])
  .factory('mainResource', mainResource);

mainResource.$inject = ['$resource'];

function mainResource($resource) {
  return $resource('http://localhost:3000/randoms');
}
