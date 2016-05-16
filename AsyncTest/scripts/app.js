document.getElementById("idd").innerHTML += ("Hello World!");
document.querySelector("boxCenter").innerHTML += ("Wut www");
document.getElementById("idd").innerHTML += ("WOoot!");

// var xhr = new XMLHttpRequest();
var url = "http://api.openweathermap.org/data/2.5/weather?q=Brooklyn,us&callback=test&appid=3bbd55527ee1ad0e5f326312904163d3";
var wiki = 'http://en.wikipedia.org/w/api.php?format=json&action=query&titles=India&prop=revisions&rvprop=content&callback=?';
// xhr.open("GET", wiki, true);
// xhr.send(null);

$.getJSON(wiki ,function(data) {
  var hash = data;
  var page_value = "";
  $.each(data["query"]["pages"],function(k,v){
    console.log(k);
    $.each(v,function(key,val){
      console.log(key);
    });
  });
});

var json = "Null";
var testing = '<a onclick="process()" href="#" id="test">Testing</a>';
console.log(json);

// function storeJSON(obj) {
//   json = obj;
//   console.log(json);
//   document.getElementById("idd").innerHTML += testing;
// }



// xhr.onreadystatechange = function() {
//   var DONE = 4;
//   var OK = 200;
//   if (xhr.readyState === DONE) {
//     if (xhr.status === OK);
//     storeJSON(xhr.responseText);
//     //document.getElementById("idd").innerHTML += xhr.responseText;
//   }
// }

// function process() {
//   alert(json);
// }