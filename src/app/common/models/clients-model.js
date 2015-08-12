angular.module('matters.common')
  .service('ClientsModel', function ($http, ENDPOINT_URI) {

    function extract(result) {
      return result.data;
    }

    function getUrl() {
      return ENDPOINT_URI + '/clients?filter[include]=matters';
    }

    function getUrlForId(clientId) {
      return ENDPOINT_URI + '/clients/' + clientId;
    }

    this.all = function () {
      return $http.get(getUrl()).then(extract);
    };

    this.fetch = function (clientId) {
      return $http.get(getUrlForId(clientId)).then(extract);
    };

    this.create = function (client) {
      return $http.post(getUrl(), client).then(extract);
    };

    this.update = function (clientId, client) {
      return $http.put(getUrlForId(clientId), client).then(extract);
    };

    this.destroy = function (clientId) {
      return $http.delete(getUrlForId(clientId)).then(extract);
    };
  });
