(function(){
  var app = angular.module('store', []);
  
  app.controller('StoreController', function($scope, $http, $log){
    this.product = gems;
    this.arrays1 = arr1;
    this.books = book;
    
    console.log("$http requesting");
    
    // $http({
    //   method:'GET',
    //   url: 'http://api.openweathermap.org/data/2.5/weather?q=Brooklyn,us&callback=test&appid=3bbd55527ee1ad0e5f326312904163d3',
    // }).then(function(response) {
    //   alert(response.data);
    // }), function(reason) {
    //   alert("No?");
    // }
  });
  var gems = [ 
    {
      "name": 'Dodecahedron',
      "price": 2.95,
      "description": 'I am a dodecahedron, therefore I am dodecaliously twelve sided.'
    },
    {
      "name": 'Tetrahedron',
      "price": 1.95,
      "description": 'I am a tetrahedron, therefore I am not of this time.'
    },
    {
      "name": 'Pentagram',
      "price": 5.00,
      "description": 'I\'m pretty metal.'
    }
  ];
  
  
  var arr1 = [
    {"title": "In the Rose Garden", "desc": "Alabama Arkansas"},
    {"title": "Falling down Grass", "desc": "Leather Jackets"},
    {"title": "Unto the Breach", "desc": "Into the Darkness"},
    {"title": "Wysteria", "desc": "A Morsel of Food"},
    {"title": "Wrathland", "desc": "Fomenting Dissent"},
    {"title": "????"},
    {"desc" : "?????"}
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

$(document).ready(function() {
  $(".list, .header").on("mouseover", function() {
    $(this).addClass("highlight");
  }).on("mouseleave", function() {
    $(this).removeClass("highlight");
  })
})