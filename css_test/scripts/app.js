'use strict';
$(document).ready(function() {
  $("#title").on("mouseover", function() {
    $(this).addClass("borderM");
  }).on("mouseleave", function() {
    $(this).removeClass("borderM");
  });
  
  $(".paraBox").on("mouseover", function() {
    $(this).addClass("borderL");
  }).on("mouseleave", function() {
    $(this).removeClass("borderL");
  })
})