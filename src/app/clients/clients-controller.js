'use strict';

angular.module('matters')
  .controller('ClientsCtrl', function (ClientsModel, MattersModel) {
    var ctrl = this;

    ctrl.newClient = {
      name: ''
    };

    ctrl.resetForm = function () {
      ctrl.loading = false;
      ctrl.newClient = {
        name: ''
      };
    };

    ctrl.getClients = function () {
      ClientsModel.all()
        .then(function (result) {
          ctrl.clients = (result !== 'null') ? result : {};
        }, function () {
          ctrl.resetForm();
        });
    };

    ctrl.createClient = function (client, isValid) {
      if (isValid) {
        ctrl.loading = true;

        ClientsModel.create(client)
          .then(function (result) {
            ctrl.getClients();
          })
          .catch(function (reason) {
            //
          })
          .finally(function () {
            ctrl.resetForm();
          });
      }
    };

    ctrl.updateClient = function (clientId, client, isValid) {
      if (isValid) {
        ClientsModel.update(clientId, client)
          .then(function (result) {
            ctrl.getClients();
          })
          .catch(function (reason) {
            //
          })
          .finally(function () {
            ctrl.cancelEditing();
          });
      }
    };

    ctrl.deleteClient = function (clientId) {
      ClientsModel.destroy(clientId)
        .then(function (result) {
          ctrl.getClients();
        })
        .catch(function (reason) {
          //
        })
        .finally(function () {
          ctrl.cancelEditing();
        });
    };

    ctrl.deleteMatter = function (matterId) {
      MattersModel.destroy(matterId)
        .then(function (result) {
          ctrl.getClients();
        })
        .catch(function (reason) {
          //
        })
        .finally(function () {
          ctrl.cancelEditing();
        });
    };

    ctrl.updateMatter = function (matterId, matter, isValid) {
      if (isValid) {
        ctrl.loading = true;

        MattersModel.update(matterId, matter)
          .then(function (result) {
            ctrl.getClients();
          })
          .catch(function (reason) {
            //
          })
          .finally(function () {
            ctrl.cancelEditing();
          });
      }
    };

    ctrl.setEditedClient = function (clientId, client) {
      ctrl.editedClientId = clientId;
      ctrl.editedClient = angular.copy(client);
      ctrl.isEditing = true;
    };

    ctrl.isCurrentClient = function (clientId) {
      return ctrl.editedClient !== null && ctrl.editedClientId === clientId;
    };

    ctrl.cancelEditing = function () {
      ctrl.loading = false;
      ctrl.editedClientId = null;
      ctrl.editedClient = null;
      ctrl.isEditing = false;
    };

    ctrl.getClients();
  });
