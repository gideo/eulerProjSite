$(document).ready(function() {
  $(".paragraph").on("mouseover", function() {
    $(this).addClass("active");
  }).on("mouseleave", function() {
    $(this).removeClass("active");
  })
  
  $(".imgSize1").on("mouseover", function() {
    $(this).addClass("squareL");
  }).on("mouseleave", function() {
    $(this).removeClass("squareL");
  })
})