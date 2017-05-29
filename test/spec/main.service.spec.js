var mainService = require('./../../app/js/common/services/main.service.js');
var mainResource = require('./../../app/js/common/resources/main.resource.js');
var requirements = require('./../../app/js/requirements.js');

describe('PresenceReport Test', function() {
  var service;
  var $httpBackend;

  var success = {data: 1};
  var errors = {data: 'Error message'};

  beforeEach(angular.mock.module(requirements.name,
                                 mainService.name,
                                 mainResource.name));

  beforeEach(inject(function($injector) {
    service = $injector.get('mainService');
    $httpBackend = $injector.get('$httpBackend');
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('is define getReports', function() {
    expect(service.getReports).toBeDefined();
  });

 it('is should return render', function() {
    $httpBackend.whenGET('http://localhost:3000/randoms').respond(200, success);
    var response;
    service.getReports().then(function(data) {
      response = data;
    });

    $httpBackend.flush();

    expect(JSON.stringify(response)).toEqual(JSON.stringify(success));
  });

 it('is should return render', function() {
    $httpBackend.whenGET('http://localhost:3000/randoms').respond(400, errors);
    var response;
    service.getReports().then(function(data) {
      response = data;
    });

    $httpBackend.flush();

    expect(JSON.stringify(response)).toEqual(JSON.stringify(errors));
  });

});
