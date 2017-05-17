$('.faq-button-box').on('click', function(event) {
  $(this).addClass('active');
  var faqSection = $(this).attr('id');
  $('.faq-button-box').not(this).removeClass('active');
  $('.' + faqSection).addClass('active')
  $('.faq-box').not($('.' + faqSection)).removeClass('active');
});
$( ".closed-slide" ).hover(
	function() {
		$(this).hide();
		$(this).parent().find('.open-slide').show();
    $(this).parent().find('.open-slide').toggleClass('rotate');
	}, function() {
		$(this).show();
		$(this).parent().find('.open-slide').hide();
    $(this).parent().find('.open-slide').toggleClass('rotate');
	}
);
$( ".services-gold-box" ).hover(
	function() {
		$(this).addClass('open');
    $(this).show();
		$(this).parent().find('.services-original-box').hide();
	}, function() {
		$(this).hide();
    $(this).removeClass('open');
		$(this).parent().find('.services-original-box').show();
	}
);
$( ".services-original-box" ).hover(
  function() {
    $(this).hide();
    $(this).parent().find('.services-gold-box').addClass('open');
    $(this).parent().find('.services-gold-box').show();
  }, function() {
    $(this).show();
    $(this).parent().find('.services-gold-box').hide();
    $(this).parent().find('.services-gold-box').removeClass('open');
  }
);
$( ".open-slide" ).hover(
  function() {
    $(this).show();
    $(this).parent().find('.closed-slide').hide();
  }, function() {
    $(this).hide();
    $(this).parent().find('.closed-slide').show();
  }
);
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
$('.gallery-link').on('click', function(event) {
  event.preventDefault();
  /* Act on the event */
  var color = $(this).closest('.office-mini-slide').attr('id');
  var colorModal;
  var colorTitle;
  if(color == 'green-slider'){
    colorModal = 'green';
    colorTitle = '<div class="office-title-box"><p class="modal-title inline-block no-margin-text white-text neopraxis-font-montserrat-bold">Consultorio </p><p class="modal-title green-office-text inline-block no-margin-text neopraxis-font-montserrat-bold">verde</p></div>'
  }
  else if(color == 'mint-slider'){
    colorModal = 'mint';
    colorTitle = '<div class="office-title-box"><p class="modal-title inline-block no-margin-text white-text neopraxis-font-montserrat-bold">Consultorio </p><p class="modal-title mint-office-text inline-block no-margin-text neopraxis-font-montserrat-bold">menta</p></div>'
  }
  else if(color == 'grey-slider'){
    colorModal = 'grey';
    colorTitle = '<div class="office-title-box"><p class="modal-title inline-block no-margin-text white-text neopraxis-font-montserrat-bold">Consultorio </p><p class="modal-title grey-office-text inline-block no-margin-text neopraxis-font-montserrat-bold">gris</p></div>'
  }
  else if(color == 'yellow-slider'){
    colorModal = 'yellow';
    colorTitle = '<div class="office-title-box"><p class="modal-title inline-block no-margin-text white-text neopraxis-font-montserrat-bold">Consultorio </p><p class="modal-title yellow-office-text inline-block no-margin-text neopraxis-font-montserrat-bold">amarillo</p></div>'
  }
  else if(color == 'red-slider'){
    colorModal = 'red';
    colorTitle = '<div class="office-title-box"><p class="modal-title inline-block no-margin-text white-text neopraxis-font-montserrat-bold">Consultorio </p><p class="modal-title red-office-text inline-block no-margin-text neopraxis-font-montserrat-bold">rojo</p></div>'
  }
  else if(color == 'blue-slider'){
    colorModal = 'blue';
    colorTitle = '<div class="office-title-box"><p class="modal-title inline-block no-margin-text white-text neopraxis-font-montserrat-bold">Consultorio </p><p class="modal-title blue-office-text inline-block no-margin-text neopraxis-font-montserrat-bold">azul</p></div>'
  }
  else if(color == 'purple-slider'){
    colorModal = 'purple';
    colorTitle = '<div class="office-title-box"><p class="modal-title inline-block no-margin-text white-text neopraxis-font-montserrat-bold">Consultorio </p><p class="modal-title purple-office-text inline-block no-margin-text neopraxis-font-montserrat-bold">morado</p></div>'
  }
  else if(color == 'violet-slider'){
    colorModal = 'violet';
    colorTitle = '<div class="office-title-box"><p class="modal-title inline-block no-margin-text white-text neopraxis-font-montserrat-bold">Consultorio </p><p class="modal-title violet-office-text inline-block no-margin-text neopraxis-font-montserrat-bold">violeta</p></div>'
  }
  else if(color == 'beige-slider'){
    colorModal = 'beige';
    colorTitle = '<div class="office-title-box"><p class="modal-title inline-block no-margin-text white-text neopraxis-font-montserrat-bold">Consultorio </p><p class="modal-title beige-office-text inline-block no-margin-text neopraxis-font-montserrat-bold">beige</p></div>'
  }
  else{
    colorModal = 'orange';
    colorTitle = '<div class="office-title-box"><p class="modal-title inline-block no-margin-text white-text neopraxis-font-montserrat-bold">Consultorio </p><p class="modal-title orange-office-text inline-block no-margin-text neopraxis-font-montserrat-bold">naranja</p></div>'
  }
  $('.modal-title').empty();
  $('.modal-title').append(colorTitle);
  $('.office-slider-item-modal').removeClass('green,');
  $('.office-slider-item-modal').removeClass('red');
  $('.office-slider-item-modal').removeClass('yellow');
  $('.office-slider-item-modal').removeClass('purple');
  $('.office-slider-item-modal').removeClass('violet');
  $('.office-slider-item-modal').removeClass('yellow');
  $('.office-slider-item-modal').removeClass('mint');
  $('.office-slider-item-modal').removeClass('grey');
  $('.office-slider-item-modal').removeClass('beige');
  $('.office-slider-item-modal').removeClass('blue');
  $('.office-slider-item-modal').addClass(colorModal);
  $('#myModal').show();
  $('body').addClass('modal-open');
  $('.modal-slider').slick({
      nextArrow: '<img class="modal-offices-next cursor-pointer" src="./img/icons/right-arrow-white.png"></img>',
      prevArrow: '<img class="modal-offices-prev cursor-pointer" src="./img/icons/left-arrow-white.png"></img>',
  });
});
var galleryModal = document.getElementById('myModal');
var galleryModalBox = document.getElementById('myModalBox');
$('.modal-close-btn-container-offices').on('click', function(event) {
  event.preventDefault();
  /* Act on the event */
  $('#myModal').hide();
  $('body').removeClass('modal-open');
});
$(window).on('click', function(event) {
  event.preventDefault();
  /* Act on the event */
    console.log('nonono');
  if (event.target == galleryModal || event.target == galleryModalBox) {
    console.log('sisisi');
    trialModal.classList.remove('modal-open');
    body.classList.remove('modal-open');
    $('#myModal').hide();
    $('body').removeClass('modal-open');
  }
});
document.querySelector('#neopraxis-hamburger-menu').addEventListener('click', function () {
   this.classList.toggle('is-active');
   document.querySelector('#neopraxis-main-navbar').classList.toggle('neopraxis-navbar-style');
 });

document.querySelector('#body').addEventListener('click', function (e) {
  if (document.querySelector('#neopraxis-hamburger-menu').classList.contains('is-active') && e.target.tagName !== 'SPAN' && e.target.tagName !== 'a') {
    document.querySelector('#neopraxis-hamburger-menu').classList.remove('is-active');
    document.querySelector('#neopraxis-main-navbar').classList.remove('neopraxis-navbar-style');
  }
});
document.querySelector("#body").addEventListener( "touchstart",function (e) {
  if (document.querySelector('#neopraxis-hamburger-menu').classList.contains('is-active') && e.target.tagName !== 'SPAN' && e.target.tagName !== 'a') {
    document.querySelector('#neopraxis-hamburger-menu').classList.remove('is-active');
    document.querySelector('#neopraxis-main-navbar').classList.remove('neopraxis-navbar-style');
  }
});
var trialModal = document.getElementById('freeTrialModal');

// Get the button that opens the modal
var footerBtn = document.getElementById("footerBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("modal-close-btn-container")[0];
var body = document.getElementById('body');
// When the user clicks on the button, open the modal 
footerBtn.onclick = function() {
  trialModal.classList.add('modal-open');
  body.classList.add('modal-open');
}
// When the user clicks anywhere outside of the modal, close it
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  trialModal.classList.remove('modal-open');
  body.classList.remove('modal-open');
}
window.onclick = function(event) {
  if (event.target == trialModal) {
    trialModal.classList.remove('modal-open');
    body.classList.remove('modal-open');
    trialModal.style.display = "none";
  }
}
var filler = 'just testing';