'use strict';

angular.module('matters', [
  'ui.router',
  'matters.common'
])
  .constant('ENDPOINT_URI', 'http://localhost:4000/api')
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/clients');

    $stateProvider
      .state('clients', {
        url:'/clients',
        templateUrl: 'app/clients/clients-mdv.tmpl.html',
        controller: 'ClientsCtrl',
        controllerAs: 'ctrl'
      });
  });
