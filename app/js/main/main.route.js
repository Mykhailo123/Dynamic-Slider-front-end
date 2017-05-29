module.exports = angular
  .module('main.route', [])
  .config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/main');
      $stateProvider.state('main', {
        name: 'main',
        template: '<main-component></main-component>',
        url: "/main"
      });
    }]);

