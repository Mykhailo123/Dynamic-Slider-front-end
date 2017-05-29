module.exports = angular
  .module('main.service', [])
  .factory('mainService', mainService);

mainService.$inject = ['mainResource'];

function mainService(mainResource) {
  var service = {
    getReports: getReports
  };
  return service;

  function getReports() {
    return mainResource.get().
      $promise.then(responseSuccess, responseFailure);
  };

  function responseSuccess(response) {
    return response;
  };

  function responseFailure(response) {
    return response.data;
  };
}
