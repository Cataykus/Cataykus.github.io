"use strict";$(function(){svg4everybody();$(".faq__button").on("click",function(){$(this).hasClass("active")?($(this).removeClass("active"),$(this).next().slideUp()):($(".faq__button").each(function(){$(this).hasClass("active")&&($(this).next().slideUp(),$(this).removeClass("active"))}),$(this).addClass("active"),$(this).next().slideDown())});$(".updates__list").owlCarousel({loop:!0,items:1,dots:!0,margin:30,center:!1,mouseDrag:!1,smartSpeed:500,autoplay:!1,autoplayTimeout:3e3,autoplayHoverPause:!1,dotsContainer:$(".updates__dots"),responsive:{768:{items:2},1200:{items:3},1600:{items:4}}}),$("body").on("click",".cost__navigation",function(){$(this).hasClass("cost__prev")?$(this).parents(".cost__slider").find(".cost__list").trigger("prev.owl.carousel"):$(this).parents(".cost__slider").find(".cost__list").trigger("next.owl.carousel")});$(".humburger").on("click",function(){$(this).toggleClass("humburger-active"),$(".menu").slideToggle(350),$(this).hasClass("humburger-active")?$(".mobile-navigation-overlay").fadeIn(200):$(".mobile-navigation-overlay").fadeOut(200)}),$(".mobile-navigation-overlay").on("click",function(){$(".humburger").click()})});var rd=void 0,cd=void 0,btn=void 0,sel=void 0,f=void 0,s=void 0,t=void 0,ip=void 0,f2=void 0,s2=void 0,t2=void 0,ip2=void 0,f3=void 0,s3=void 0,t3=void 0,ip3=void 0,sel2=void 0,sel3=void 0,i=0,bool=!0;function animateRates(){bool?i--:i++,-2850==i&&(bool=!1),0==i&&(bool=!0),rd.style.transform="translateX("+i+"px)"}window.addEventListener("load",function(){function e(){cd.remove()}rd=document.getElementById("rates-div"),cd=document.getElementById("cookie-div"),btn=document.getElementById("cookie-div-btn"),sel=document.getElementById("dropdownCurrency"),sel2=document.getElementById("dropdownCurrency2"),sel3=document.getElementById("dropdownCurrency3"),ip=document.getElementById("input-p"),ip2=document.getElementById("input-p2"),ip3=document.getElementById("input-p3"),f=document.getElementById("fbtn"),s=document.getElementById("sbtn"),t=document.getElementById("tbtn"),f2=document.getElementById("fbtn2"),s2=document.getElementById("sbtn2"),t2=document.getElementById("tbtn2"),f3=document.getElementById("fbtn3"),s3=document.getElementById("sbtn3"),t3=document.getElementById("tbtn3"),ip&&(f&&f.addEventListener("click",function(){ip.innerHTML=f.innerHTML}),t&&s.addEventListener("click",function(){ip.innerHTML=s.innerHTML}),s&&t.addEventListener("click",function(){ip.innerHTML=t.innerHTML})),ip2&&(f2&&f2.addEventListener("click",function(){ip2.innerHTML=f2.innerHTML}),t2&&s2.addEventListener("click",function(){ip2.innerHTML=s2.innerHTML}),s2&&t2.addEventListener("click",function(){ip2.innerHTML=t2.innerHTML})),ip3&&(f3&&f3.addEventListener("click",function(){ip3.innerHTML=f3.innerHTML}),t3&&s3.addEventListener("click",function(){ip3.innerHTML=s3.innerHTML}),s3&&t3.addEventListener("click",function(){ip3.innerHTML=t3.innerHTML})),sel&&sel.addEventListener("click",function(){var e=document.getElementById("dropdown-block");e.classList.contains("active")?e.classList.remove("active"):e.classList.add("active")}),sel2&&sel2.addEventListener("click",function(){var e=document.getElementById("dropdown-block2");e.classList.contains("active")?e.classList.remove("active"):e.classList.add("active")}),sel3&&sel3.addEventListener("click",function(){var e=document.getElementById("dropdown-block3");e.classList.contains("active")?e.classList.remove("active"):e.classList.add("active")}),cd&&btn&&btn.addEventListener("click",function(){cd.style.opacity="0",setTimeout(e,500)}),rd&&setInterval(animateRates,1e3/60)});