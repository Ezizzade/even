$(document).ready(function() {
  $(".menu-btn").click(function() {
    $(".menu").toggleClass("active");
    $(".bottom-nav").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });
});
