$(function($) {
  // Select all links with hashes
  $(".nav").click(function() {
    $("li").removeClass("active");
    var link = $(this).attr("href");
    $(this)
      .parent()
      .addClass("active");
    var posi = $(link).offset().top;
    $("body,html").animate({ scrollTop: posi }, 700);
  });
});
