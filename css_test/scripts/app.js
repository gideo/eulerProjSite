'use strict';

$(document).ready(function() {
  $(".title, .mainBox").on("mouseover", function() {
    $(this).addClass("squareL");
  }).on("mouseleave", function() {
    $(this).removeClass("squareL");
  })
  $("*").click(function() {
    console.log(this);
  })
  // $(".paragraph").on("mouseover", function() {
  //   $(this).addClass("active2");
  // }).on("mouseleave", function() {
  //   $(this).removeClass("active2");
  // });
})