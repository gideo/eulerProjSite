'use strict';

$(document).ready(function() {
  $(".title, .mainBox").on("mouseover", function() {
    $(this).addClass("squareL");
  }).on("mouseleave", function() {
    $(this).removeClass("squareL");
  })
  
  $(".paragraph").on("mouseover", function() {
    $(this).addClass("active2");
  }).on("mouseleave", function() {
    $(this).removeClass("active2");
  });
})