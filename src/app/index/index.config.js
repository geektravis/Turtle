angular.module('index').config(function($stateProvider) {
  $stateProvider.state('index', {
    url: '/',
    views: {
      main: {
        controller: 'LogoController',
        templateUrl: 'index/index.tpl.html'
      }
    },
    data: {
      pageTitle: 'Home'
    }
  });
});