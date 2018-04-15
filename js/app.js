particlesJS.load('particles-js', 'particles.json', function() {
  console.log('callback - particles.js config loaded');
});

$('nav').find('a').click(function(e) {
    e.preventDefault();
    var section = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(section).offset().top - 55
    });
});

window.sr = ScrollReveal({ duration: 600, reset: true });
sr.reveal('#intro .row', { duration: 700, reset: true }, 600);
sr.reveal('#aboutme');
sr.reveal('.col', { duration: 1000, reset: true }, 400);
sr.reveal('.card', { duration: 1000, reset: true }, 300);


var myDate = new Date();
var hrs = myDate.getHours();
var greet;

if (hrs < 5) {
    greet = 'Hope you are having a good night';
} else if (hrs >= 5 && hrs < 12) {
	greet = 'Good Morning';
} else if (hrs >= 12 && hrs <= 17) {
    greet = 'Good Afternoon';
} else if (hrs >= 17 && hrs <= 24) {
    greet = 'Good Evening';
}


$(document).ready(function() {
	$('#greetings').html('<b>' + greet + ' and welcome to my porfolio page!</b>');
});