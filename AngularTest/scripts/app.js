(function(){
  var app = angular.module('store', []);

  app.controller('StoreController', function(){
    this.product = gem;
    this.arrays = arr;
  });
  
  var gem = {
    name: 'Dodecahedron',
    price: 2.95,
    description: '. . .'
  };
  
  var arr = [
    {"num": "1", "letter": "Al"},
    {"num": "2", "letter": "Bee"},
    {"num": "3", "letter": "Gee"}
  ];
  
})();