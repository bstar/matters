'use strict';

angular.module('matters.common')
  .service('MattersModel', function ($http, ENDPOINT_URI) {

    function extract(result) {
      return result.data;
    }

    function getUrl(clientId) {
      return ENDPOINT_URI + '/clients/' + clientId + '/matters';
    }

    function getUrlForId(matterId) {
      return ENDPOINT_URI + '/matters/' + matterId
    }

    this.all = function (clientId) {
      return $http.get(getUrl(clientId)).then(extract);
    };

    this.fetch = function (matterId) {
      return $http.get(getUrlForId(matterId)).then(extract);
    };

    this.create = function (clientId, matter) {
      return $http.post(getUrl(clientId), matter).then(extract);
    };

    this.update = function (matterId, matter) {
      return $http.put(getUrlForId(matterId), matter).then(extract);
    };

    this.destroy = function (matterId) {
      return $http.delete(getUrlForId(matterId)).then(extract);
    };
  });

