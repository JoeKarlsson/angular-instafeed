'use strict'

let createPhotoGrid = () => {
  let instafeed = document.getElementById('instafeed');

  let ngApp = document.createElement('div');
  ngApp.setAttribute('ng-app', 'instafeed');
  instafeed.appendChild(ngApp);

  let ngControllerSection = document.createElement('section');
  ngControllerSection.setAttribute('ng-controller', 'ShowImages as images');
  ngApp.appendChild(ngControllerSection);

  let bar = document.createElement('div');
  bar.className = 'bar';
  ngControllerSection.appendChild(bar);

  let listIcon = document.createElement('a');
  listIcon.className = 'list-icon';
  bar.appendChild(listIcon);
  listIcon.setAttribute('ng-class', '{active: layout == \'list\'}');
  listIcon.setAttribute('ng-click', 'layout = \'list\'');

  let gridIcon = document.createElement('a');
  gridIcon.className = 'grid-icon';
  bar.appendChild(gridIcon);
  gridIcon.setAttribute('ng-class', '{active: layout == \'grid\'}');
  gridIcon.setAttribute('ng-click', 'layout = \'grid\'');

  // A view with big photos and no text
  let gridList = document.createElement('ul');
  gridList.className = 'grid';
  gridList.setAttribute('ng-show', 'layout == \'grid\'');
  ngControllerSection.appendChild(gridList);

  let photoGridItem = document.createElement('li');
  photoGridItem.className = 'grid';
  photoGridItem.setAttribute('ng-repeat', 'p in pics');
  gridList.appendChild(photoGridItem);

  let photoLinkGrid = document.createElement('a');
  photoLinkGrid.href = '{{p.link}}';
  photoLinkGrid.target = '_blank';
  photoGridItem.appendChild(photoLinkGrid);

  let photoGridImg = document.createElement('img');
  photoGridImg.setAttribute('ng-src', '{{p.images.low_resolution.url}}');
  photoLinkGrid.appendChild(photoGridImg);

  // A compact view smaller photos and titles
  let listList = document.createElement('ul');
  listList.className = 'list';
  listList.setAttribute('ng-show', 'layout == \'list\'');
  ngControllerSection.appendChild(listList);

  let photoListItem = document.createElement('li');
  photoListItem.className = 'grid';
  photoListItem.setAttribute('ng-repeat', 'p in pics');
  listList.appendChild(photoListItem);

  let photoListLink = document.createElement('a');
  photoListLink.href = '{{p.link}}';
  photoListLink.target = '_blank';
  photoListItem.appendChild(photoListLink);

  let photoListImg = document.createElement('img');
  photoListImg.setAttribute('ng-src', '{{p.images.low_resolution.url}}');
  photoListItem.appendChild(photoListImg);

  let caption = document.createElement('p');
  caption.innerHTML = '{{p.caption.text}}';
  photoListItem.appendChild(caption);

}

module.exports = function(client_id, user_id) {

  createPhotoGrid();
  let access_token = '464793431.64a12cb.9e7f0e0fd8ba4361be3205810e02cb73';

  let app = angular.module('instafeed', []);

  app.factory('InstagramAPI', ['$http', function($http) {
    return {
      fetchPhotos : function(callback) {
        let endpoint = 'https://api.instagram.com/v1/users/';
        endpoint += user_id;
        endpoint += '/media/recent/?';
        endpoint += '?count=99';
        endpoint += '&callback=JSON_CALLBACK';
        endpoint += '&access_token=' + access_token;
        $http.jsonp(endpoint)
        .success(function(response) {
          callback(response.data);
        })
        .error(function(xhr, status, err) {
          console.error(status, err);
        })
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
}

