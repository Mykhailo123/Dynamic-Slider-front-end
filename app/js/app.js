var angular = require('angular');
var mainModule = require('./main/main.module.js');
var vendorModule = require('./requirements.js');

angular
  .module('dynamicSlider', [
    vendorModule.name,
    mainModule.name
  ])

 .config(['$locationProvider', 'localStorageServiceProvider',
    function($locationProvider, localStorageServiceProvider) {
      $locationProvider.html5Mode(true);
      localStorageServiceProvider.setPrefix('dynamicSlider');
    }]);
