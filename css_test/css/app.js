'use strict';
$(document).ready(function() {
  $(".paragraph").on("mouseover", function() {
    $(this).addClass("active");
  }).on("mouseleave", function() {
    $(this).removeClass("active");
  })
})