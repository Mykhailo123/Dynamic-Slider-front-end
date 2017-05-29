var mainComponent = require('./components/main.component.js');
var mainRoute = require('./main.route.js');
var mainService = require('./../common/services/main.service.js');
var mainResource = require('./../common/resources/main.resource.js');

require('../../css/style.scss');

module.exports = angular
  .module('main', [
    mainComponent.name,
    mainRoute.name,
    mainResource.name,
    mainService.name
  ]);
