'use strict';

angular.module('matters', [
  'ui.router',
  'matters.common'
])
  .constant('ENDPOINT_URI', 'http://ec2-54-198-71-172.compute-1.amazonaws.com:3003/api')
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
