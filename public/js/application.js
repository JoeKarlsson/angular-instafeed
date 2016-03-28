(function() {
  //Place your own Instagram client_id below. Go to https://instagram.com/developer/clients/manage/ and register your app to get a client ID
  var client_id = '451cf9fc4a0a44379d699e4ca48d58fb';

  //To get your user ID go to http://jelled.com/instagram/lookup-user-id and enter your Instagram user name to get your user ID
  var user_id = '464793431';

  var app = angular.module('instafeed', []);

  app.factory('InstagramAPI', ['$http', function($http) {
    return {
      fetchPhotos : function(callback) {
        var endpoint = 'https://api.instagram.com/v1/users/' + user_id + '/media/recent/?';
        endpoint += '?count=99';
        endpoint += '&client_id=' + client_id;
        endpoint += '&callback=JSON_CALLBACK';
        $http.jsonp(endpoint).success(function(response) {
          callback(response.data);
        });
      }
    }
  }]);

  app.controller('ShowImages', function($scope, InstagramAPI) {
    $scope.layout = 'grid';
    $scope.data = {};
    $scope.pics = [];

    InstagramAPI.fetchPhotos(function(data) {
      $scope.pics = data;
    });
  });

})();