$( ".closed-slide" ).hover(
	function() {
		$(this).hide();
		$(this).parent().find('.open-slide').show();
	}, function() {
		$(this).show();
		$(this).parent().find('.open-slide').hide();
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
  var navbar = document.getElementById("neopraxisNavbar");

var myScrollFunc = function () {
    var y = window.scrollY;
    if (y >= 120) {
        navbar.classList.add('show');
    } else {
        navbar.classList.remove('show');
    }
};
window.addEventListener("scroll", myScrollFunc);
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