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
    {"num": "1", "letter": "Alabama Arkansas"},
    {"num": "2", "letter": "Leather Jackets"},
    {"num": "3", "letter": "Into the Darkness"}
  ];

  var arr2 = [
    {"num": "4", "letter": "The Riches"},
    {"num": "5", "letter": "Cahbs Secret"},
    {"num": "6", "letter": "Sinclair The World"}
  ];
  
})();