module.exports = angular
  .module('main.component', [])
  .component('mainComponent', {
    templateUrl: './app/js/main/components/main.template.html',
    controller: MainController,
  });

MainController.$inject = ['mainService'];

function MainController(mainService) {

  var ctrl = this;

  ctrl.images = [{url: "app/img/1.jpg"},
                 {url: "app/img/2.jpg"},
                 {url: "app/img/3.jpg"},
                 {url: "app/img/4.jpg"},
                 {url: "app/img/5.jpg"},
                 {url: "app/img/6.jpg"},
                 {url: "app/img/7.jpg"},
                 {url: "app/img/8.jpg"},
                 {url: "app/img/9.jpg"},
                 {url: "app/img/10.jpg"}];

  ctrl.loadRandoms = function() {
    mainService.getReports().then(
      function(data) {
        ctrl.random = data.random;
        ctrl.image = ctrl.images[ctrl.random]
      });
  };
  setInterval(ctrl.loadRandoms, 2000);
};
