(function(){
  var app = angular.module('store', []);

  app.controller('StoreController', function(){
    this.product = gem;
    this.arrays1 = arr1;
  });
  
  var gem = {
    name: 'Dodecahedron',
    price: 2.95,
    description: 'I am a dodecahedron, therefore I am dodecaliously twelve sided.'
  };
  
  var arr1 = [
    {"num": "1", "letter": "Al"},
    {"num": "2", "letter": "Bee"},
    {"num": "3", "letter": "Gee"}
  ];
  
})();