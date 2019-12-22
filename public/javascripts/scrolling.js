$(document).ready(function () {
  $('.nav-link').on('click', function (event) {
    event.preventDefault();
    var hash = this.hash;
    $('html, body').animate({ scrollTop: $(hash).offset().top }, 500);
    $(document).on("scroll", onScroll);
  });
})