'use strict';
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