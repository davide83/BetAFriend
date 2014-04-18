'use strict';

/* Controllers */

var betAfriendControllers = angular.module('betAfriendControllers', []);

betAfriendControllers.controller('BetListCtrl', ['$scope', '$http',
  function($scope, $http) {
    $http.get('json/bets.json').success(function(data) {
    });
    $scope.bets = [
      {'name': 'kdo je bolši',
       'description': 'Fast just got faster with Nexus S.', 
       'author': 'john doe',
       'categories': 'Friends',
       'Status': 'In progress',
       'reward': '10€',
       'end date': '12.2.2015'},
      {'name': 'drinking beer',
       'description': 'This bet is about drinking 9 cups of beer in about half an hour, without throwing up.', 
       'author': 'janez novak',
       'categories': 'Fun&Party',
       'Status': 'Finished',
       'reward': '15€',
       'end date': '17.4.2014'},
      {'name': 'sporting',
       'description': 'Who will be the faster in 60m race.', 
       'author': 'športni navdušenec',
       'categories': 'Sport',
       'Status': 'Pending',
       'reward': '5€',
       'end date': '17.4.2014'},

    ];

    loadTagCategories("categoriesTags");
<<<<<<< HEAD
    $('.tooltip1').tooltip();
=======
    $(':checkbox').checkbox();
>>>>>>> matox/angular
  }]);

betAfriendControllers.controller('CategoriesListCtrl', ['$scope', '$http',
  function($scope, $http) {
    $http.get('json/categories.json').success(function(data) {
      $scope.categories = data;
    });

    $scope.orderProp = 'age';
  }]);

betAfriendControllers.controller('BetDetailCtrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
    $http.get('json/' + $routeParams.phoneId + '.json').success(function(data) {
      $scope.phone = data;
    });
  }]);

betAfriendControllers.controller('UserDetailCtrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
    $http.get('json/' + $routeParams.phoneId + '.json').success(function(data) {
      $scope.phone = data;
    });
  }]);