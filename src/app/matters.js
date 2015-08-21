'use strict';

angular.module('matters', [
  'ui.router',
  'matters.common'
])
  .constant('ENDPOINT_URI', 'http://ec2-23-22-59-98.compute-1.amazonaws.com:3005/api')
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
