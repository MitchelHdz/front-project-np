!function(){$.validator.setDefaults({invalidHandler:function(e,t){var o=$(this);o.find(".form-message").removeClass(o.hasClass("success")?"success":"error").html("")},submitHandler:function(e){var t=$(e).serialize(),o=$(e).find("select, input, textarea, button").not("[disabled]"),i=$(e).find(".form-message"),n=$('<i class="fa fa-check-circle"></i><span>Mensaje enviado exitosamente</span>'),a=$('<i class="fa fa-times-circle"></i><span>Ocurrió un error</span>'),s=function(e){var t=e?n:a;o.removeAttr("disabled"),i.removeClass(e?"error":"success"),i.addClass(e?"success":"error"),i.html(t)};o.attr("disabled","disabled"),i.html(""),$(e).find(".button-wrapper .loader").length||$(e).find(".button-wrapper").addClass("disabled"),$.ajax({url:$(e).attr("action"),method:"POST",data:t}).done(function(t){s(1===parseInt(t)),e.reset()}).fail(function(){s(!1)}).always(function(){o.removeAttr("disabled"),$(e).find(".button-wrapper").removeClass("disabled")})}})}(),$(".faq-button-box").on("click",function(e){$(this).addClass("active");var t=$(this).attr("id");$(".faq-button-box").not(this).removeClass("active"),$("."+t).addClass("active"),$(".faq-box").not($("."+t)).removeClass("active")}),$(".closed-slide").hover(function(){$(this).hide(),$(this).parent().find(".open-slide").show(),$(this).parent().find(".open-slide").toggleClass("rotate")},function(){$(this).show(),$(this).parent().find(".open-slide").hide(),$(this).parent().find(".open-slide").toggleClass("rotate")}),$(".services-gold-box").hover(function(){$(this).addClass("open"),$(this).show(),$(this).parent().find(".services-original-box").hide()},function(){$(this).hide(),$(this).removeClass("open"),$(this).parent().find(".services-original-box").show()}),$(".services-original-box").hover(function(){$(this).hide(),$(this).parent().find(".services-gold-box").addClass("open"),$(this).parent().find(".services-gold-box").show()},function(){$(this).show(),$(this).parent().find(".services-gold-box").hide(),$(this).parent().find(".services-gold-box").removeClass("open")}),$(".open-slide").hover(function(){$(this).show(),$(this).parent().find(".closed-slide").hide()},function(){$(this).hide(),$(this).parent().find(".closed-slide").show()}),$('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(e){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var t=$(this.hash);t=t.length?t:$("[name="+this.hash.slice(1)+"]"),t.length&&(e.preventDefault(),$("html, body").animate({scrollTop:t.offset().top},1e3,function(){var e=$(t);if(e.focus(),e.is(":focus"))return!1;e.attr("tabindex","-1"),e.focus()}))}}),$(".gallery-link").on("click",function(e){e.preventDefault();var t,o,i=$(this).closest(".office-mini-slide").attr("id");"green-slider"==i?(t="green",o='<div class="office-title-box"><p class="modal-title inline-block no-margin-text white-text neopraxis-font-montserrat-bold">Consultorio </p><p class="modal-title green-office-text inline-block no-margin-text neopraxis-font-montserrat-bold">verde</p></div>'):"mint-slider"==i?(t="mint",o='<div class="office-title-box"><p class="modal-title inline-block no-margin-text white-text neopraxis-font-montserrat-bold">Consultorio </p><p class="modal-title mint-office-text inline-block no-margin-text neopraxis-font-montserrat-bold">menta</p></div>'):"grey-slider"==i?(t="grey",o='<div class="office-title-box"><p class="modal-title inline-block no-margin-text white-text neopraxis-font-montserrat-bold">Consultorio </p><p class="modal-title grey-office-text inline-block no-margin-text neopraxis-font-montserrat-bold">gris</p></div>'):"yellow-slider"==i?(t="yellow",o='<div class="office-title-box"><p class="modal-title inline-block no-margin-text white-text neopraxis-font-montserrat-bold">Consultorio </p><p class="modal-title yellow-office-text inline-block no-margin-text neopraxis-font-montserrat-bold">amarillo</p></div>'):"red-slider"==i?(t="red",o='<div class="office-title-box"><p class="modal-title inline-block no-margin-text white-text neopraxis-font-montserrat-bold">Consultorio </p><p class="modal-title red-office-text inline-block no-margin-text neopraxis-font-montserrat-bold">rojo</p></div>'):"blue-slider"==i?(t="blue",o='<div class="office-title-box"><p class="modal-title inline-block no-margin-text white-text neopraxis-font-montserrat-bold">Consultorio </p><p class="modal-title blue-office-text inline-block no-margin-text neopraxis-font-montserrat-bold">azul</p></div>'):"purple-slider"==i?(t="purple",o='<div class="office-title-box"><p class="modal-title inline-block no-margin-text white-text neopraxis-font-montserrat-bold">Consultorio </p><p class="modal-title purple-office-text inline-block no-margin-text neopraxis-font-montserrat-bold">morado</p></div>'):"violet-slider"==i?(t="violet",o='<div class="office-title-box"><p class="modal-title inline-block no-margin-text white-text neopraxis-font-montserrat-bold">Consultorio </p><p class="modal-title violet-office-text inline-block no-margin-text neopraxis-font-montserrat-bold">violeta</p></div>'):"beige-slider"==i?(t="beige",o='<div class="office-title-box"><p class="modal-title inline-block no-margin-text white-text neopraxis-font-montserrat-bold">Consultorio </p><p class="modal-title beige-office-text inline-block no-margin-text neopraxis-font-montserrat-bold">beige</p></div>'):(t="orange",o='<div class="office-title-box"><p class="modal-title inline-block no-margin-text white-text neopraxis-font-montserrat-bold">Consultorio </p><p class="modal-title orange-office-text inline-block no-margin-text neopraxis-font-montserrat-bold">naranja</p></div>'),$(".modal-title").empty(),$(".modal-title").append(o),$(".office-slider-item-modal").removeClass("green,"),$(".office-slider-item-modal").removeClass("red"),$(".office-slider-item-modal").removeClass("yellow"),$(".office-slider-item-modal").removeClass("purple"),$(".office-slider-item-modal").removeClass("violet"),$(".office-slider-item-modal").removeClass("yellow"),$(".office-slider-item-modal").removeClass("mint"),$(".office-slider-item-modal").removeClass("grey"),$(".office-slider-item-modal").removeClass("beige"),$(".office-slider-item-modal").removeClass("blue"),$(".office-slider-item-modal").addClass(t),$("#myModal").show(),$("body").addClass("modal-open"),$(".modal-slider").slick({nextArrow:'<img class="modal-offices-next cursor-pointer" src="./img/icons/right-arrow-white.png"></img>',prevArrow:'<img class="modal-offices-prev cursor-pointer" src="./img/icons/left-arrow-white.png"></img>'})});var galleryModal=document.getElementById("myModal"),galleryModalBox=document.getElementById("myModalBox");$(".modal-close-btn-container-offices").on("click",function(e){e.preventDefault(),$("#myModal").hide(),$("body").removeClass("modal-open")}),$(window).on("click",function(e){e.preventDefault(),console.log("nonono"),e.target!=galleryModal&&e.target!=galleryModalBox||(console.log("sisisi"),trialModal.classList.remove("modal-open"),body.classList.remove("modal-open"),$("#myModal").hide(),$("body").removeClass("modal-open"))}),document.querySelector("#neopraxis-hamburger-menu").addEventListener("click",function(){this.classList.toggle("is-active"),document.querySelector("#neopraxis-main-navbar").classList.toggle("neopraxis-navbar-style")}),document.querySelector("#body").addEventListener("click",function(e){document.querySelector("#neopraxis-hamburger-menu").classList.contains("is-active")&&"SPAN"!==e.target.tagName&&"a"!==e.target.tagName&&(document.querySelector("#neopraxis-hamburger-menu").classList.remove("is-active"),document.querySelector("#neopraxis-main-navbar").classList.remove("neopraxis-navbar-style"))}),document.querySelector("#body").addEventListener("touchstart",function(e){document.querySelector("#neopraxis-hamburger-menu").classList.contains("is-active")&&"SPAN"!==e.target.tagName&&"a"!==e.target.tagName&&(document.querySelector("#neopraxis-hamburger-menu").classList.remove("is-active"),document.querySelector("#neopraxis-main-navbar").classList.remove("neopraxis-navbar-style"))});var trialModal=document.getElementById("freeTrialModal"),footerBtn=document.getElementById("footerBtn"),span=document.getElementsByClassName("modal-close-btn-container")[0],body=document.getElementById("body");footerBtn.onclick=function(){trialModal.classList.add("modal-open"),body.classList.add("modal-open")},span.onclick=function(){trialModal.classList.remove("modal-open"),body.classList.remove("modal-open")},window.onclick=function(e){e.target==trialModal&&(trialModal.classList.remove("modal-open"),body.classList.remove("modal-open"),trialModal.style.display="none")};var filler="just testing";!function(){function e(e){$(e.target).is(".site-navbar__menu-trigger")||$(e.target).is(".site-navbar__menu-container")||$(e.target).closest(".site-navbar__menu-container").length||!$(".site-navbar__menu-container").hasClass("site-navbar__menu-container--show-menu")||(e.preventDefault(),$(".site-navbar__menu-container").removeClass("site-navbar__menu-container--show-menu"),$("body").removeClass("noscroll"))}function t(){$(".site-navbar__menu-container").hasClass("site-navbar__menu-container--show-menu")?($(".site-navbar__menu-container").removeClass("site-navbar__menu-container--show-menu"),$("body").removeClass("noscroll")):($(".site-navbar__menu-container").addClass("site-navbar__menu-container--show-menu"),$("body").addClass("noscroll"))}var o=window.matchMedia("(max-width: 876px)");o.matches?($("body")[0].addEventListener("touchstart",e,{passive:!1}),$(".site-navbar__menu-trigger").click(t)):($("body")[0].removeEventListener("touchstart",e,{passive:!1}),$(".site-navbar__menu-trigger").off("click"),$("body").removeClass("noscroll")),$(window).resize(function(){$("body")[0].removeEventListener("touchmove",e,{passive:!1}),$(".site-navbar__menu-trigger").off("click"),$("body").removeClass("noscroll"),$(".site-navbar__menu-container").removeClass("show-menu"),o.matches&&($("body")[0].addEventListener("touchmove",e,{passive:!1}),$(".site-navbar__menu-trigger").click(t))})}();