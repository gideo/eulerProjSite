'use strict';

let testFunction = function(str) {
  document.getElementById(str).className += " test";
  alert(d);
}

let testRemove = function(str) {
  document.getElementById(str).className = document.getElementById(str).className.replace(/\btest\b/,'');
}

$(document).ready(function() {
  
  $("#title, .paraBox").on("mouseover", function() {
    $(this).addClass("borderM");
  }).on("mouseleave", function() {
    $(this).removeClass("borderM");
  });
  
  $(".footer, #nav").on("mouseover", function() {
    $(this).addClass("borderB");
  }).on("mouseleave", function() {
    $(this).removeClass("borderB");
  });
});