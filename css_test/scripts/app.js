'use strict';
$(document).ready(function() {
  $("#title, .mainBox").on("mouseover", function() {
    $(this).addClass("titleL");
  }).on("mouseleave", function() {
    $(this).removeClass("titleL");
  });
})