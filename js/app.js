particlesJS.load('particles-js', 'particles.json', function() {
  console.log('callback - particles.js config loaded');
});

$("nav").find("a").click(function(e) {
    e.preventDefault();
    var section = $(this).attr("href");
    $("html, body").animate({
        scrollTop: $(section).offset().top
    });
});
