'use strict';
$(document).ready(function() {
  $("#title, .paraBox").on("mouseover", function() {
    $(this).addClass("borderM");
  }).on("mouseleave", function() {
    $(this).removeClass("borderM");
  });
  
  $(".footer").on("mouseover", function() {
    $(this).addClass("borderF");
  }).on("mouseleave", function() {
    $(this).removeClass("borderF");
  });
  
  $("#nav").on("mouseover", function() {
    $(this).addClass("borderT");
  }).on("mouseleave", function() {
    $(this).removeClass("borderT");
  });
});