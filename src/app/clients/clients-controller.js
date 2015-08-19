'use strict';

angular.module('matters')
  .controller('ClientsCtrl', function (ClientsModel, MattersModel) {
    var ctrl = this;

    ctrl.showClosed = true;

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

    ctrl.setHiddenStatus = function (checked) {
      if (checked) {
        //console.log("clicked", checked);
        ctrl.showClosed = true;
      } else {
        //console.log("clicked", checked);
        ctrl.showClosed = false;
      }

      console.log("clicked", ctrl.showClosed);
      ctrl.getClients();
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

    ctrl.filterClients = function () {
      // console.log("ShowClosed", ctrl.showClosed);
      if (ctrl.showClosed) {
        // console.log("not filtering anything");
        return { };
      } else {
        //console.log("filtering closed");
        return { status: 'open' };
      }
    };

    ctrl.filterMatters = function (str) {
      console.log("filter matters", ctrl.showClosed);
      if (str) {
        console.log(str);
        // console.log("not filtering anything");
        return { description: str };
      } else {
        //console.log("filtering closed");
        return { };
      }
    };

    ctrl.getClients();
  });
