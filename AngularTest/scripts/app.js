var myApp = angular.module('myApp1',[]);

myApp.controller('MainController', ['$scope', function($scope) {
  $scope.message = 'Hola!';
}]);