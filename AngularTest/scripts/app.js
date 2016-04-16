// var myApp = angular.module('myApp1',[]);

// myApp.controller('MainController', ['$scope', function($scope) {
//   $scope.message = 'Hola!';
// }]);
(function(){
  var app = angular.module('store', []);

  app.controller('StoreController', function(){
    this.product = gem;
  });
  
  var gem = {
    name: 'Dodecahedron',
    price: 2.95,
    description: '. . .'
  };
  
  var arr = {
    a : ["A", "1", "Alpha"],
    b : ["B", "2", "Beta"],
    c : ["C", "3", "Gamma"]
  };
  
})();