(function(){
  var app = angular.module('store', []);
  
  app.controller('StoreController', function(){
    this.product = gems;
    this.arrays1 = arr1;
    this.books = book;
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
  
  var book = [
    {"title": "The Art of Animal Drawing", "author": " Ken Hultgren"},
    {"title": "HTML & CSS : Design and Build Websites", "author": "Jon Duckett"},
    {"title": "The C Programming Language", "author": "Brian W.Kerninghan, Dennis M.Ritchie"},
    {"title": "A Song of Ice and Fire", "author": "George R.R. Martin"},
    {"title": "Lord of the Rings", "author": "J.R.R. Tolkien"},
    {"title": "Hyperion Cantos", "author": "Dan Simmons"}
  ]
})();