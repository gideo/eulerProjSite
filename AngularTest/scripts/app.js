(function(){
  var app = angular.module('store', []);

  app.controller('StoreController', function(){
    this.product = gems;
    this.arrays1 = arr1;
    this.arrays2 = arr2;
  });
  
  var gems = {
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
    {"letter": "A", "desc": "The Riches"},
    {"letter": "B", "desc": "Cahbs Secret"},
    {"letter": "C", "desc": "Sinclair The World"}
  ];
  
})();