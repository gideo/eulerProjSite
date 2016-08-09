'use strict';
$(document).ready(function() {
  $("#title, .paraBox").on("mouseover", function() {
    $(this).addClass("titleL");
  }).on("mouseleave", function() {
    $(this).removeClass("titleL");
  });
})