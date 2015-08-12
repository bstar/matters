angular.module('matters')
  .directive('simpleClient', function () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'app/clients/client-list.tmpl.html'
    }
  })
  .directive('client', function (ClientsModel) {
    var controller = function() {
      var ctrl = this;

      ctrl.updateClient = function (clientId, client) {
        ClientsModel.update(clientId, client)
          .then(function (result) {
            console.log('result', result);
          })
          .catch(function (reason) {
            console.log('error', reason)
          })
          .finally(function () {
          });
      };

      ctrl.deleteClient = function (clientId) {
        console.log("Debug Message, remove client");
        ctrl.remove({ clientId: clientId});
      };

      ctrl.deleteMatter = function (matterId) {
        console.log("Debug Message, remove matter");
        ctrl.remove({ matterId: matterId });
      };
    };

    return {
      templateUrl: 'app/clients/client.tmpl.html',
      controller: controller,
      controllerAs: 'ctrl',
      bindToController: true
    }
  })
;
