WebFont.load({
    google: {
      families: ['Droid Serif:400,400i,700,700i', 'Roboto Condensed:300,300i,400,400i,700,700i', 'Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i']
    }
  });

$(document).ready(function() {

  var $ = jQuery;
  // Accordion arrow animation
  $('#accordion').on("show.bs.collapse hide.bs.collapse", function (event) {
    $(event.target).parent().find('.indicator').toggleClass("indicator-collapsed");
  });

  $(window).scroll(function(){
    if ($(this).scrollTop() > 50) {
        $('.navbar').addClass('nav-scrolled');
        $('.btn-scroll-top').fadeIn();
    } else {
        $('.navbar').removeClass('nav-scrolled');
        $('.btn-scroll-top').fadeOut();
    }
  });

  // Navigation click actions
  $('.scroll-link').on('click touch', function(event){
    event.preventDefault();
    var sectionID = $(this).attr("data-id");
    scrollToID('#' + sectionID, 750);
  });

  $('.scroll-link-inner').on('click touch', function(event){
    event.preventDefault();

    $('#dates-location .slide-page-cont').animate({ scrollTop: $(".claim-tickets-form").offset().top}, 'slow');
  });

  if ($(window).width() >= 768) {

    // Resize the list items for the first time
    resizeListItems();

    // Resize the list items whenever the window resizes
    $(window).resize(resizeListItems);
  }

  if ($(window).width() < 992) {

    // hide hero video
    $('.b-roll-cont').hide();
  }

  $('.btn-exit').on('click touch', function(event){
    event.preventDefault();
    var el = $('.slide-page');
    el.removeClass('slide-page-overflow');
    $('.claim-tickets-slide').hide();
    $('body').removeClass('slide-body-overflow');
  });

  $('#agenda-link').on('click touch', function(event){
    event.preventDefault();
    $('#agenda').addClass('slide-page-overflow');
    $('body').addClass('slide-body-overflow');
    $('.claim-tickets-slide').show();
  });

  $('#learn-more-link').on('click touch', function(event){
    event.preventDefault();
    $('#agenda').addClass('slide-page-overflow');
    $('body').addClass('slide-body-overflow');
    $('.claim-tickets-slide').show();
  });

  $('#dates-location-link').on('click touch', function(event){
    event.preventDefault();
    $('#dates-location').addClass('slide-page-overflow');
    $('body').addClass('slide-body-overflow');
    $('.claim-tickets-slide').show();
  });

  $('#speakers-link').on('click touch', function(event){
    event.preventDefault();
    $('#speakers').addClass('slide-page-overflow');
    $('body').addClass('slide-body-overflow');
    $('.claim-tickets-slide').show();
  });

  $('#testimonials-link').on('click touch', function(event){
    event.preventDefault();
    $('#testimonials').addClass('slide-page-overflow');
    $('body').addClass('slide-body-overflow');
    $('.claim-tickets-slide').show();
  });

  $('#faq-link').on('click touch', function(event){
    event.preventDefault();
    $('#faq').addClass('slide-page-overflow');
    $('body').addClass('slide-body-overflow');
    $('.claim-tickets-slide').show();
  });

  $('#contact-link').on('click touch', function(event){
    event.preventDefault();
    $('#contact').addClass('slide-page-overflow');
    $('body').addClass('slide-body-overflow');
    $('.claim-tickets-slide').show();
  });

  $('#footer-contact-link').on('click touch', function(event){
    event.preventDefault();
    $('#contact').addClass('slide-page-overflow');
    $('body').addClass('slide-body-overflow');
    $('.claim-tickets-slide').show();
  });

  $('#claim-tickets-now-link').on('click touch', function(event){
    event.preventDefault();
    $('#contact').addClass('slide-page-overflow');
    $('body').addClass('slide-body-overflow');
    $('.claim-tickets-slide').show();
  });

  $('.loc-cont .scroll-link-inner').on('click touch', function(e) {
    e.preventDefault();
    var loc = $(this).data('location');
    $('#input_8 option[value="' + loc + '"]').attr('selected', 'selected');
  });

  var player;

  $('#recap-box').on('show.bs.modal', function (event) { // on modal show
    var button = $(event.relatedTarget); // Button that triggered the modal
    var id = button.data('recap'); // Extract info from data-* attributes

    var loc = button.data('location');

    $('.modal-title').html(loc + " Video Recap");

    $('.js-plyr-recap') // pick element with video id
    .attr('data-video-id', id); // set data-video-id to video-id

    player = plyr.setup('.js-plyr-recap')[0]; // create instance of plyr

  });

  $('#recap-box').on('hidden.bs.modal', function (event) { // when modal hidden
    $('.js-plyr-recap') // pick the right element
    .attr('data-video-id', '');  // empty the video id

    player.destroy(); // should destroy the instance

  });

  $(window).on('load', function() {
    var claimForm = $('#js-main-claim-form form');
    var seatForm = $('#js-main-seat-form form');
    claimForm.src = claimForm.data('src');
    var divs = [ 'agenda', 'speakers', 'testimonials', 'faq'];
    divs.map(function(key, value) {
      claimForm.clone().appendTo($('#' + key + ' .claim-tickets-form'));
    });
    seatForm.clone().appendTo($('#contact .claim-tickets-form'));


  });

  function resizeListItems() {
  var $li = $('.content ol li');

  var maxHeight = $li.map(function() {
      return $(this).height();
  }).get();

  $li.height(Math.max.apply(this, maxHeight));
}

// Scroll function
function scrollToID(id, speed){
  var offSet = $('.navbar').height();
  var targetOffset = $(id).offset().top - offSet;
  var nav = $('.navbar-collapse');
  $('html,body').animate({scrollTop:targetOffset}, speed);
  nav.removeClass("in");
}

$(window).on('load', function() {
  plyr.setup('.js-plyr-video');
});

$('#testimonials-link').on('click touch', function() {
  plyr.setup('.js-plyr-testimonial-video');
});

$('#speakers-link').on('click touch', function() {
  plyr.setup('.js-plyr-speaker-video');
});

});





function init() {
  var imgDefer = document.getElementsByTagName('img');
  for (var i=0; i<imgDefer.length; i++) {
    if(imgDefer[i].getAttribute('data-src')) {
      imgDefer[i].setAttribute('src',imgDefer[i].getAttribute('data-src'));
    }
  }
}
window.onload = init;
