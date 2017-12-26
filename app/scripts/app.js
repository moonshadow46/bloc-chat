(function() {
  function config($locationProvider, $stateProvider) {
    $locationProvider
      .html5Mode({
        enabled: false,
        requireBase: false
      });

    $stateProvider
      .state('home', {
        url: '',
        controller: 'HomeCtrl as home',
        templateUrl: '/templates/home.html'
      });
  }

  angular
    .module('blocChat', ['ui.bootstrap', 'ui.router', 'firebase', 'ngCookies'])
    .config(config);
})();
