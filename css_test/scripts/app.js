'use strict';
$(document).ready(function() {
  $("#title, .paraBox").on("mouseover", function() {
    $(this).addClass("borderL");
  }).on("mouseleave", function() {
    $(this).removeClass("borderL");
  });
})